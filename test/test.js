const tape = require('tape');
const supertest = require('supertest');
const app = require('../src/app');
const built = require('../src/database/db_built');

tape('test', (test) => {
  built('db_built.js')
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  test.equal(1,1,'must equal');
  test.end();
});