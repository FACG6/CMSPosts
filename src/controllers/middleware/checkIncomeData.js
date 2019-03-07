exports.checkInsert = (req, res, next) => {
  const {
    firstName, lastName, email, image, password,
  } = req.body;
  const fName = firstName.trim();
  const lName = lastName.trim();
  const emailTrim = email.trim();
  const imgUrlTrim = image.trim();
  if (!fName || !lName || !password || !emailTrim || !imgUrlTrim) {
    res.send(JSON.stringify({ error: 'Please Fill All Field' }));
  } else if (!(/^[a-zA-Z]+$/.test(fName)) || !(/^[a-zA-Z]+$/.test(lName)) || !(/^[\w.-_%+]+@[\w.-]+\.[a-zA-Z]{2,4}$/.test(emailTrim)) || !(/^https?:\/\/([\w]||[-_.])+\.[a-z]{2,4}(\/||[\w-_])*\.(png|jpe?g||gif)$/.test(imgUrlTrim))) {
    res.send(JSON.stringify({ error: 'Please Enter Valid Pattern' }));
  } else {
    next();
  }
};

exports.checkLogin = (req, res, next) => {
  const {
    email, password,
  } = req.body;
  const emailTrim = email.trim();
  if (!password || !emailTrim) {
    res.send(JSON.stringify({ error: 'Please Fill All Field' }));
  } else if (!(/^[\w.-_%+]+@[\w.-]+\.[a-zA-Z]{2,4}$/.test(emailTrim))) {
    res.send(JSON.stringify({ error: 'Please Enter Valid Pattern' }));
  } else {
    next();
  }
};

exports.checkPost = (req, res, next) => {
  const {
    content, privacy,
  } = req.body;
  if (!content || !privacy) {
    res.send(JSON.stringify({ error: 'Please Fill All Field' }));
  } else if (content.search(/<[^>]*script/) !== -1 || !(/^[0-1]{1}$/.test(privacy))) {
    res.send(JSON.stringify({ error: 'Please Don\'t Try To Hack My Application :(' }));
  } else {
    next();
  }
};

exports.checkDelete = (req, res, next) => {
  const { postId } = req.body;
  if (!postId) {
    res.send(JSON.stringify({ error: 'The Post Id Is Empty' }));
  } else if (!(/^[0-9]+$/.test(postId))) {
    res.send(JSON.stringify({ error: 'Not Valid Pattern' }));
  } else {
    next();
  }
};

exports.checkUpdate = (req, res, next) => {
  const { postId, content } = req.body;
  if (!postId.trim() || !content.trim()) {
    res.send(JSON.stringify({ error: 'Plese fill The field' }));
  } else if (!(/^[0-9]+$/.test(postId)) || !(/^([\w]||[\s])+$/.test(content))) {
    res.send(JSON.stringify({ error: 'Not Valid Pattern' }));
  } else {
    next();
  }
};
