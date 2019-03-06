const posts = document.querySelector('.posts');
const dialog = document.querySelector('.posts__delete');
const ok = document.getElementById('ok');
const cancle = document.getElementById('cancle');
const errorDialog = document.querySelector('.error_dialog');
const error = document.querySelector('.error');
const deleteElements = document.querySelectorAll('.delete');

/* method to display dialog when click on delete icon  */
const deleteCB = (event) => {
  const postParent = event.target.parentElement.parentElement.parentElement.parentElement;
  const content = postParent.children[1];
  content.classList.add('selected');
  dialog.style.top = `${postParent.offsetTop - 50}px`;
  dialog.style.display = 'block';
  posts.style.opacity = 0.5;
};

/* Method to make request to the server  */
const fetching = (router, method, data, responseFunction) => {
  fetch(router, {
    method,
    credentials: 'same-origin',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(res => res.json())
    .then((res) => {
      responseFunction(res);
    })
    .catch(() => {
      error.textContent = 'Sorry Can Not This Process';
    });
};

/* to add event to all delete icone */
deleteElements.forEach((element) => {
  element.addEventListener('click', deleteCB);
});

/* to cancel the popup message */
cancle.addEventListener('click', () => {
  document.querySelector('.selected').classList.remove('selected');
  dialog.style.display = 'none';
  posts.style.opacity = 1;
});

/* function for render the result */
const render = (res) => {
  if (res.result) {
    document.querySelector('.selected').parentElement.remove();
    dialog.style.display = 'none';
    posts.style.opacity = 1;
  } else {
    errorDialog.textContent = res.error;
  }
};
/* To confirm the delete operation */
ok.addEventListener('click', () => {
  const postId = document.querySelector('.selected');
  fetching('/deletePost', 'DELETE', { postId: postId.id }, render, postId);
});
/* function for create elements */

const createElements = (tag, text, parent, className, src) => {
  const element = document.createElement(tag);
  if (src) element.src = src;
  else element.textContent = text;
  element.className = className;
  if (className === 'posts__post') {
    parent.insertBefore(element, parent.firstChild);
  } else {
    parent.appendChild(element);
  }
  return element;
};
