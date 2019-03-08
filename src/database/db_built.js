const fs = require('fs');
const path = require('path');
const connection = require('./db_connection');

const sql = fs.readFileSync(path.join(__dirname, 'db_built.sql')).toString();
const dbBuilt = () => {
  connection.query(sql)
    .then(() => {
      console.log('database built');
    })
    .catch(() => {
      console.log('database field to built');
    });
};
dbBuilt();
module.exports = dbBuilt;
