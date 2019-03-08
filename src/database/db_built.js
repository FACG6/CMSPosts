const fs = require('fs');
const path = require('path');
const connection = require('./db_connection');

const dbBuilt = () => {
  const sql = fs.readFileSync(path.join(__dirname, 'db_built.sql')).toString();
  return connection.query(sql);
}
module.exports = dbBuilt;
