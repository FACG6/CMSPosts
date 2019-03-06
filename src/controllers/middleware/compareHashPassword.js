const bcrype = require('bcrypt');

exports.compare = (req, res, next) => {
  bcrype.compare(req.body.password, req.data.password, (error, success) => {
    if (error) {
      next(error);
    } else if (success) next();
    else res.send(JSON.stringify({ error: 'Password Wrong' }));
  });
};
