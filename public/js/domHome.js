const send = document.getElementById('send');
const form = document.querySelector('.post__form');
const container = document.querySelector('.posts__container');
const contentSelect = document.querySelector('.text');
const privacySelect = document.querySelector('.select');

const renderAdd = (res) => {
  if (res.error) {
    error.textContent = res.error;
    form.insertBefore(error, send);
  } else {
    const postDiv = createElements('div', '', container, 'posts__post');
    const postOwner = createElements('div', '', postDiv, 'posts__post-owner');
    createElements('img', '', postOwner, 'posts__post-owner-image', res.result.image);
    createElements('span', res.result.user, postOwner, 'posts__post-owner-name');
    const contentPost = createElements('p', res.result.content, postDiv, 'posts__post-content');
    contentPost.id = res.result.postId;
    const editors = createElements('div', '', postOwner, 'posts__post-owner-editor');
    const edit = createElements('button', '', editors, 'edit');
    createElements('i', '', edit, 'far fa-edit');
    edit.addEventListener('click', (event) => {
      editCB(event);
    });
    const removeItem = createElements('button', '', editors, 'delete');
    removeItem.addEventListener('click', (event) => {
      deleteCB(event);
    });
    createElements('i', '', removeItem, 'far fa-trash-alt');
    error.textContent = '';
    contentSelect.value = '';
    privacySelect.value = '0';
  }
};

send.addEventListener('click', (e) => {
  e.preventDefault();
  // remove the error message if exist
  if (error.content) {
    error.textContent = '';
  }
  // get the values from the form
  const content = contentSelect.value.trim();
  const privacy = privacySelect.value;
  // check if any field empty
  if (!content) {
    error.textContent = 'Please Fill All Field';
    form.insertBefore(error, send);
    return '';
  }
  const data = {
    content,
    privacy,
  };
  fetching('/addPost', 'POST', data, renderAdd);
});
