const editElements = document.querySelectorAll('.edit');
// const edit = document.querySelector('.btn_edit');

const editCB = (event) => {
  const postParent = event.target.parentElement.parentElement.parentElement.parentElement;
  let errorEdit;
  const content = postParent.children[1];
  content.setAttribute('contenteditable', 'true');
  content.style.background = '#dbe6e6';
  const edit = createElements('button', 'done', postParent, 'btn_edit');
  edit.addEventListener('click', () => {
    if (errorEdit) errorEdit.remove();
    const data = { postId: content.id, content: content.textContent };
    if(!data.content){
      errorEdit = createElements('p', 'Please fill the field', postParent, 'error');
      return ''; 
    }else if(data.content.search(/<[^>]*script/) !== -1){
      errorEdit = createElements('p', 'Please Don\'t Try To Hack My Application :(', postParent, 'error');
      return '';
    }
    fetching('/updatePost', 'PUT', data, (res) => {
      if (res.result) {
        content.removeAttribute('contenteditable');
        content.style.background = 'white';
        edit.remove();
      } else {
        errorEdit = createElements('p', res.error, postParent, 'error');
      }
    });
  });
};

/* add events for all edit icon */
editElements.forEach((element) => {
  element.addEventListener('click', editCB);
});
