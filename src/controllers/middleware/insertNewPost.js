const insertPost = require('./../../database/queries/insertPost');

exports.post = (req, res, next) => {
  const {
    content, privacy,
  } = req.body;
  insertPost.insert(content.trim(), privacy, req.token.userId)
    .then((result) => {
      req.post = result.rows[0];
      next();
    })
    .catch((error) => {
      res.status(500).send(JSON.stringify({ error: 'Internal Server Error' }));
    });
}
