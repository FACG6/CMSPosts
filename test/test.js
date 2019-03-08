const tape = require('tape');
const supertest = require('supertest');
const app = require('../src/app');
const built = require('../src/database/db_built');

tape('test', (test) => {
  test.equal(1, 1, 'must equal');
  test.end();
});

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
