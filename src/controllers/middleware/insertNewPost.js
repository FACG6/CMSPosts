const insertPost = require('./../../database/queries/insertPost');
const insertPostUser = require('./../../database/queries/insertPostUser');

exports.post = (req, res, next) => {
  const {
    content, privacy,
  } = req.body;
  insertPost.insert(content.trim(), privacy)
    .then((result) => {
      req.post = result.rows[0];
      next();
    })
    .catch((error) => {
      next(error);
    });
};

exports.postUser = (req, res, next) => {
  insertPostUser.insert(req.token.userId, req.post.id)
    .then(() => {
      next();
    })
    .catch((error) => {
      next(error);
    });
};
