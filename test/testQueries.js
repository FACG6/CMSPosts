const tape = require('tape');
const built = require('./../src/database/db_built');
const insertUser = require('./../src/database/queries/insertUser');
const selectPosts = require('./../src/database/queries/selectPosts');
const updatePost = require('./../src/database/queries/updatePost');
/* This tests not cover all queries just 3 queries  */
// test for insert user
tape('Add New User already exist', (test) => {
  built();
  const data = {
    firstName: 'test',
    lastName: 'test',
    email: 'shrooq@saad.com',
    image: 'https://images.pexels.com/photos/20787/pexels-photo.jpg',
    password: '12345',
  };
  insertUser.insert(data.firstName, data.lastName, data.password, data.email, data.image)
    .then((res) => {})
    .catch((error) => {
      test.equal(error.code, '23505', 'test pass of duplicate email');
    })
  test.end();
});

tape('Add New User', (test) => {
  const data = {
    firstName: 'test',
    lastName: 'test',
    email: 'test@test.com',
    image: 'https://images.pexels.com/photos/20787/pexels-photo.jpg',
    password: '12345',
  };
  insertUser.insert(data.firstName, data.lastName, data.password, data.email, data.image)
    .then((res) => {
      test.equal(res.rowCount, 1, 'test pass of count of rows must be 1');
      test.equal(res.rows[0].first_name, 'test', 'test pass of the first name value of result must be test');
    })
    .catch((error) => {
      test.error(error);
    })
  test.end();
});

// test for select all public posts
tape('Display All Public Posts', (test) => {
  selectPosts.select()
  .then((res) => {
    test.equal(res.rows[0].hasOwnProperty('content'), true, 'test pass of get all public popsts');
    test.equal(res.rows[0].hasOwnProperty('first_name'), true, 'test pass of get all public popsts with owner post');
  })
  .catch((error) => {
    test.error(error);
  });
  test.end();
});

// test for update post
tape('Update spesific post', (test) => {
  updatePost.update(1, 'Wellcom for all :)')
  .then((res) => {
    test.equal(res.rowCount, 1, 'test pass of update post the result must equal 1');
    test.equal(res.rows[0].content, 'Wellcom for all :)', 'test pass of update must the rusult equla \'Wellcom for all :)\'');
  })
  .catch((error) => {
    test.error(error);
  });
  test.end();
});

tape('Update spesific post with empty content', (test) => {
  updatePost.update(1,null)
  .then((res) => {
  })
  .catch((error) => {
    test.equal(error.code, '23502', 'test pass of the value must be not null');
  });
  test.end();
});
