const bcrype = require('bcrypt');

exports.compare = (req, res, next) => {
  bcrype.compare(req.body.password, req.data.password, (error, success) => {
    if (error) {
      res.status(500).send(JSON.stringify({ error: 'Internal Server Error' }));
    } else if (success) next();
    else res.send(JSON.stringify({ error: 'Password Wrong' }));
  });
};
