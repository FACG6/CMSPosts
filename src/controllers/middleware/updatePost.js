const update = require('./../../database/queries/updatePost');

exports.updatePost = (req, res, next) => {
  update.update(req.body.postId.trim(), req.body.content.trim())
    .then(() => {
      next();
    })
    .catch(() => {
      res.status(500).send(JSON.stringify({ error: 'Internal Server Error' }));
    });
};
