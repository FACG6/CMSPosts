exports.post = (req, res) => {
  if (req.error) {
    res.send(JSON.stringify({ error: req.error.error }));
  } else {
    res.send(JSON.stringify({ done: true }));
  }
};
