const selectPosts = require('./../../database/queries/selectPosts');
const selectPostsViaUser = require('./../../database/queries/selectPostsViaUser');

exports.display = (req, res, next) => {
  if (req.token) {
    selectPostsViaUser.select(req.token.userId)
      .then((result) => {
        req.rows = result.rows;
        next();
      })
      .catch((error) => {
        next(error);
      });
  } else {
    selectPosts.select()
      .then((result) => {
        req.rows = result.rows;
        next();
      })
      .catch((error) => {
        next(error);
      });
  }
};
