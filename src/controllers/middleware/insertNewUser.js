const insertUser = require('./../../database/queries/insertUser');

exports.add = (req, res, next) => {
  const {
    firstName, lastName, email, image, password,
  } = req.body;
  insertUser.insert(firstName.trim(), lastName.trim(), password, email.trim(), image.trim())
    .then(() => {
      next();
    })
    .catch((error) => {
      res.status(500).send(JSON.stringify({ error: 'Internal Server Error' }));
    });
};
