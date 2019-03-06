const send = document.getElementById('send');
const form = document.querySelector('.sign__form');

// eslint-disable-next-line consistent-return
send.addEventListener('click', (e) => {
  e.preventDefault();
  // remove the error message if exist
  if (document.querySelector('.error')) {
    form.removeChild(document.querySelector('.error'));
  }
  // get the values from the form
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  // create element for error message
  const error = document.createElement('p');
  error.classList.add('error');
  // check if any field empty
  if (!password || !email) {
    error.textContent = 'Please Fill All Field';
    form.insertBefore(error, send);
    return '';
  }
  // check the pattern of email
  if (!(/^[\w.-_%+]+@[\w.-]+\.[a-zA-Z]{2,4}$/.test(email))) {
    error.textContent = 'Email must match pattern like example@example.com';
    form.insertBefore(error, document.getElementById('image'));
    return '';
  }
  const data = {
    email,
    password,
  };
  fetch('/checkLogin', {
    method: 'POST',
    credentials: 'same-origin',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => res.json())
    .then((res) => {
      if (res.error) {
        error.textContent = res.error;
        form.insertBefore(error, send);
      } else {
        window.location.href = '/';
      }
    })
    .catch(() => {
      error.textContent = 'Can not Create Post';
    });
});
