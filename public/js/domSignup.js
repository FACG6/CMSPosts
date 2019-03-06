const send = document.getElementById('send');
const form = document.querySelector('.sign__form');
const popup = document.querySelector('.sign__popup');
const cancle = document.querySelector('#cancle');

// eslint-disable-next-line consistent-return
send.addEventListener('click', (e) => {
  e.preventDefault();
  // remove the error message if exist
  if (document.querySelector('.error')) {
    form.removeChild(document.querySelector('.error'));
  }
  // get the values from the form
  const firstName = document.getElementById('first_name').value.trim();
  const lastName = document.getElementById('last_name').value.trim();
  const email = document.getElementById('email').value.trim();
  const image = document.getElementById('image').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm_password').value;
  // create element for error message
  const error = document.createElement('p');
  error.classList.add('error');
  // check if any field empty
  if (!firstName || !lastName || !password || !email || !image) {
    error.textContent = 'Please Fill All Field';
    form.insertBefore(error, send);
    return '';
  }
  // check the pattern of first name
  if (!(/^[a-zA-Z]+$/.test(firstName))) {
    error.textContent = 'First Name must contain only characters (a-z)';
    form.insertBefore(error, document.getElementById('last_name'));
    return '';
  }
  // check the pattern of last name
  if (!(/^[a-zA-Z]+$/.test(lastName))) {
    error.textContent = 'Last Name must contain only characters (a-z)';
    form.insertBefore(error, document.getElementById('email'));
    return '';
  }
  // check the pattern of email
  if (!(/^[\w.-_%+]+@[\w.-]+\.[a-zA-Z]{2,4}$/.test(email))) {
    error.textContent = 'Email must match pattern like example@example.com';
    form.insertBefore(error, document.getElementById('image'));
    return '';
  }
  // check the pattern of image url
  if (!(/^https?:\/\/([\w]||[-_.])+\.[a-z]{2,4}(\/||[\w-_])*\.(?:png|jpe?g||gif)$/.test(image))) {
    error.textContent = 'Image URL match pattern like https://example.com/example/image.png';
    form.insertBefore(error, document.getElementById('password'));
    return '';
  }
  // check the pattern of first name
  if (!(password === confirmPassword)) {
    error.textContent = 'Please Password and Confirm password must matches';
    form.insertBefore(error, send);
    return '';
  }
  const data = {
    firstName,
    lastName,
    email,
    image,
    password,
  };
  fetch('/checkSignup', {
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
        popup.style.display = 'block';
        form.style.opacity = 0.5;
        send.disabled = true;
        cancle.addEventListener('click', () => {
          popup.style.display = 'none';
          form.style.opacity = 1;
          window.location.href = '/login';
        });
      }
    })
    .catch(() => {
      error.textContent = 'Can not Create Post';
    });
});
