const deletePost = require('./../../database/queries/deletePost');

exports.deletePost = (req, res, next) => {
  deletePost.delete(req.body.postId)
    .then(() => {
      next();
    })
    .catch(() => {
      res.status(500).send(JSON.stringify({ error: 'Internal Server Error' }));
    });
};
