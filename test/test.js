const tape = require('tape');
const supertest = require('supertest');
const app = require('../src/index');
// const built = require('../src/database/db_built');
tape('test', (test) => {
  test.equal(1,1,'must equal');
  test.end();
});