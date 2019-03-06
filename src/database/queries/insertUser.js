const connection = require('./../db_connection');

exports.insert = (firstName, lastName, password, email, imgUrl) => connection.query('insert into users (first_name,last_name,email,image,password) values ($1,$2,$3,$4,$5) returning *', [firstName, lastName, email, imgUrl, password]);
