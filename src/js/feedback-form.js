const throttle = require('lodash/throttle');

const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";

let formData = {};

const saveToLocalStorage = throttle((e) => {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}, 500);

formEl.addEventListener("input",saveToLocalStorage);
formEl.addEventListener("submit",handleSubmit);
document.addEventListener('DOMContentLoaded', loadSavedData);

function loadSavedData() {
  try {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return; 
    formData = JSON.parse(data);
    Object.entries(formData).forEach(([key, val]) => {
      formEl.elements[key].value = val;
    });
  } catch (error) {
    console.log(error.message);
}
}

function handleSubmit(event) {
  event.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
  formData = {};
  event.target.reset();
}


