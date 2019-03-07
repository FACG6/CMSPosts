const connection = require('./../db_connection');

exports.insert = (content, privacy, userId) => connection.query('insert into posts (content,privacy,user_id) values ($1,$2,$3) returning *', [content, privacy,userId]);
