const bcrypt = require('bcrypt');

exports.hash = (req, res, next) => {
  bcrypt.hash(req.body.password, 5, (error, hash) => {
    if (error) {
      next(error);
    } else {
      req.body.password = hash;
      next();
    }
  });
};
