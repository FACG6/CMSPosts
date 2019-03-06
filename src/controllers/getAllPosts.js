exports.get = (req, res) => {
  if (req.token) {
    res.render('home', {
      posts: req.rows,
      name: `${req.token.userFirstName} ${req.token.userLastName}`,
      image: req.token.userIamge,
      auth: true,
      domHome: true,
    });
  } else {
    res.render('home', { posts: req.rows, auth: false });
  }
};
