require('dotenv').config();
const url = require('url');
const pg = require('pg');

const { Pool } = pg;

let DB_URL = process.env.DATABASE_URL_LOCAL;
if (process.env.NODE_ENV === 'dev') {
  DB_URL = process.env.DATABASE_URL_LOCAL;
} else if (process.env.NODE_ENV === 'pro') {
  DB_URL = process.env.DATABASE_URL;
} else if (process.env.NODE_ENV === 'test') {
  DB_URL = process.env.HEROKU_POSTGRESQL_MAROON_URL;
}

const params = url.parse(DB_URL);
const pool = new Pool({
  user: params.auth.split(':')[0],
  password: params.auth.split(':')[1],
  port: params.port,
  host: params.hostname,
  database: params.path.split('/')[1],
  ssl: params.hostname !== 'localhost',
  max: 2,
});
module.exports = pool;
