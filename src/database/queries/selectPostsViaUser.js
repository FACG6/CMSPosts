const connection = require('./../db_connection');

exports.select = userId => connection.query('select posts.id as posts_id,posts.content,users.first_name,users.last_name,users.image from posts join users ON users.id = posts.user_id where users.id=$1 order by posts.id desc', [userId]);
