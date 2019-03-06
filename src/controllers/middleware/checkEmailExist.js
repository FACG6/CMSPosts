const checkEmail = require('./../../database/queries/selectViaEmail');

exports.check = (req, res, next) => {
  checkEmail.select(req.body.email.trim())
    .then((result) => {
      if (result.rows.length !== 0) {
        res.send(JSON.stringify({ error: 'Email Already Exist' }));
      } else {
        next();
      }
    })
    .catch((error) => {
      next(error);
    });
};
exports.checkLogin = (req, res, next) => {
  checkEmail.select(req.body.email.trim())
    .then((result) => {
      if (result.rows.length === 0) {
        res.send(JSON.stringify({ error: 'Email Not Exist' }));
      } else {
        req.data = {
          id: result.rows[0].id,
          firstName: result.rows[0].first_name,
          lastName: result.rows[0].last_name,
          password: result.rows[0].password,
          image: result.rows[0].image,
        };
        next();
      }
    })
    .catch((error) => {
      next(error);
    });
};
