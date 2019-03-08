const tape = require('tape');
const supertest = require('supertest');
const app = require('../src/app');
const built = require('../src/database/db_built');

/* This tests not cover all routers just 4 router  */

// test home page
tape('home page', test => {
  supertest(app)
    .get('/')
    .expect(200)
    .expect('content-type', 'text/html; charset=utf-8')
    .end((err, res) => {
      if (err) test.error(err);
      test.equal(res.text.includes('<title>Posts</title>'), true, 'pass the test of home page');
      test.end()
    });
});

// tests for sign up
tape('Sign up new User with correct information', test => {
  built();
  const data = {
    firstName: 'test',
    lastName: 'test',
    email: 'test10@hotmail.com',
    image: 'https://images.pexels.com/photos/20787/pexels-photo.jpg',
    password: '12345',
  };
  supertest(app)
    .post('/checkSignup')
    .send(data)
    .expect(200)
    .expect('content-type', 'text/html; charset=utf-8')
    .end((err, res) => {
      if (err) test.error(err);
      test.equal(res.text, '{"done":true}', 'pass the test of add new user')
      test.end()
    });
});

tape('Sign up new User already exists', test => {
  const data = {
    firstName: 'test',
    lastName: 'test',
    email: 'test10@hotmail.com',
    image: 'https://images.pexels.com/photos/20787/pexels-photo.jpg',
    password: '12345',
  };
  supertest(app)
    .post('/checkSignup')
    .send(data)
    .expect(200)
    .expect('content-type', 'text/html; charset=utf-8')
    .end((err, res) => {
      if (err) test.error(err);
      test.equal(res.text, '{"error":"Email Already Exist"}', 'pass the test of add new user already exist')
      test.end()
    });
});

tape('Sign up new User with incorrect information', test => {
  const data = {
    firstName: 'test',
    lastName: 'test',
    email: 'test10@hotmail.com',
    image: 'https://images.pexels.com/photos/20787/pexels-photo.text',
    password: '12345',
  };
  supertest(app)
    .post('/checkSignup')
    .send(data)
    .expect(200)
    .expect('content-type', 'text/html; charset=utf-8')
    .end((err, res) => {
      if (err) test.error(err);
      test.equal(res.text, '{"error":"Please Enter Valid Pattern"}', 'pass the test of add new user with incorrect data ')
      test.end()
    });
});

// test for login
tape('Login user with correct information', test => {
  const data = {
    email: 'test10@hotmail.com',
    password: '12345',
  };
  supertest(app)
    .post('/checkLogin')
    .send(data)
    .expect(200)
    .expect('content-type', 'text/html; charset=utf-8')
    .end((err, res) => {
      if (err) test.error(err);
      test.equal(res.text, '{"done":true}', 'pass the test of login user')
      test.end()
    });
});

tape('Login user with incorrect information', test => {
  const data = {
    email: 'test10@hotmail.com',
    password: '1235',
  };
  supertest(app)
    .post('/checkLogin')
    .send(data)
    .expect(200)
    .expect('content-type', 'text/html; charset=utf-8')
    .end((err, res) => {
      if (err) test.error(err);
      test.equal(res.text, '{"error":"Password Wrong"}', 'pass the test of login user with incorrect password')
      test.end()
    });
});

//test the page not found
tape('Page Not Found', test => {
  supertest(app)
    .get('/notfound')
    .expect(404)
    .expect('content-type', 'text/html; charset=utf-8')
    .end((err, res) => {
      if (err) test.error(err);
      test.equal(res.text.includes('alt=404'), true, 'pass the test of 404 page not found');
      test.end();
    });
});
