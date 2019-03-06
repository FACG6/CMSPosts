exports.post = (req, res) => {
  res.send({
    result: {
      content: req.post.content,
      postId: req.post.id,
      user: `${req.token.userFirstName} ${req.token.userLastName}`,
      image: req.token.userIamge,
    },
  });
};
