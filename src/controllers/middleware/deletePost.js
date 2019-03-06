const deletePost = require('./../../database/queries/deletePost');

exports.deletePost = (req, res, next) => {
  deletePost.delete(req.body.postId)
    .then(() => {
      next();
    })
    .catch((error) => {
      next(error);
    });
};
