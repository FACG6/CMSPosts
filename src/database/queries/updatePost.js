const connection = require('./../db_connection');

exports.update = (postId, content) => connection.query('update posts set content=$1 where id=$2 returning *', [content, postId]);
