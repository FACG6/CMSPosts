const { verify } = require('jsonwebtoken');

exports.check = (req, res, next) => {
  if (req.cookies && req.cookies.jwt) {
    verify(req.cookies.jwt, process.env.SECRETE, (error, token) => {
      if (error) {
        res.clearCookie('jwt');
        res.render('authentication');
      } else {
        req.token = token;
        next();
      }
    });
  } else {
    next();
  }
};
