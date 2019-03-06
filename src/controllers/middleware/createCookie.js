const { sign } = require('jsonwebtoken');

exports.cookie = (req, res, next) => {
  const payload = {
    userId: req.data.id,
    userFirstName: req.data.firstName,
    userLastName: req.data.lastName,
    userIamge: req.data.image,
  };
  const jwt = sign(payload, process.env.SECRETE);
  res.cookie('jwt', jwt, {
    maxAge: 1000 * 60 * 60 * 2,
    httpOnly: true,
  });
  next();
};
