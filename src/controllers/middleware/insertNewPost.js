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
      res.status(500).send(JSON.stringify({ error: 'Internal Server Error' }));
    });
};

exports.postUser = (req, res, next) => {
  insertPostUser.insert(req.token.userId, req.post.id)
    .then(() => {
      next();
    })
    .catch(() => {
      res.status(500).send(JSON.stringify({ error: 'Internal Server Error' }));
    });
};
