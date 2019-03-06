exports.client = (req, res) => {
  res.status(404).render('error', {
    layout: 'error',
    statusCode: 404,
    imageMessage: 'http://salmasnli.com/Content/Common/404.png',
  });
};

exports.server = (err, req, res, next) => {
  res.status(500).render('error', {
    layout: 'error',
    statusCode: 500,
    imageMessage: 'https://cdn.dribbble.com/users/890487/screenshots/3355813/500-error-.jpg',
  });
};
