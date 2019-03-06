const connection = require('./../db_connection');

exports.delete = postId => connection.query('delete from posts where id=$1', [postId]);
