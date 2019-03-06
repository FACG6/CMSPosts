const connection = require('./../db_connection');

exports.insert = (content, privacy) => connection.query('insert into posts (content,privacy) values ($1,$2) returning *', [content, privacy]);
