const connection = require('./../db_connection');

exports.select = email => connection.query('select * from users where email=$1', [email]);
