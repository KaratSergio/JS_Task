const throttle = require('lodash/throttle');

const formEl = document.querySelector('.feedback-form');
const inputEmail = formEl.querySelector('input[name="email"]');
const messageTextarea = formEl.querySelector('textarea[name="message"]');

const saveToLocalStorage = throttle(() => {
  const formData = {
    email: inputEmail.value,
    message: messageTextarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500);

inputEmail.addEventListener('input', saveToLocalStorage);
messageTextarea.addEventListener('input', saveToLocalStorage);

document.addEventListener('DOMContentLoaded', loadSavedData);

function loadSavedData() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const formData = JSON.parse(savedData);
    inputEmail.value = formData.email;
    messageTextarea.value = formData.message;
  }
}

formEl.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');

  const formData = {
    email: inputEmail.value,
    message: messageTextarea.value,
  };

  console.log(formData);

  inputEmail.value = '';
  messageTextarea.value = '';
}
