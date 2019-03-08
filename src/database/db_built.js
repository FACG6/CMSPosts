const fs = require('fs');
const path = require('path');
const connection = require('./db_connection');

const dbBuilt = (file) => {
  const sql = fs.readFileSync(path.join(__dirname, file)).toString();
  return connection.query(sql);
}
module.exports = dbBuilt;