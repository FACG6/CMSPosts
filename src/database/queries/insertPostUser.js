const connection = require('./../db_connection');

exports.insert = (userId, postId) => connection.query('insert into post_user (user_id,post_id) values ($1,$2) returning *', [userId, postId]);
