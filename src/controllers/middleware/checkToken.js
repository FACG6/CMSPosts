exports.checkUnsave = (req, res, next) => {
  if (req.token) {
    res.redirect('/');
  } else {
    next();
  }
};
exports.checkSave = (req, res, next) => {
  if (!req.token) {
    res.redirect('/');
  } else {
    next();
  }
};
