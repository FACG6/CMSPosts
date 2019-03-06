const connection = require('./../db_connection');

exports.select = () => connection.query('select posts.id as posts_id,posts.content,users.first_name,users.last_name,users.image from posts join post_user ON post_user.post_id = posts.id join users ON users.id = post_user.user_id where posts.privacy=0 order by posts.id desc');
