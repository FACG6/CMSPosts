exports.checkUnsave = (req, res, next) => {
  if (req.token) {
    res.redirect('/');
  } else {
    next();
  }
};
exports.checkSave = (req, res, next) => {
  if (!req.token) {
    res.status(403).render('error', {
      layout: 'error',
      statusCode: 403,
      imageMessage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8PvLv5F2xpulmwUfOdVIwYE_P8cEFZIaE9zYYuHQwcKO4r7ZF'
    })
  } else {
    next();
  }
};
