const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");

const body = document.body;
let intervalId;

const toggleUI = (startDisabled, stopDisabled, backgroundColor) => {
    startBtn.disabled = startDisabled;
    stopBtn.disabled = stopDisabled;
    body.style.backgroundColor = backgroundColor;
  };
  
  startBtn.addEventListener('click', () => {
    toggleUI(true, false, getRandomHexColor());
    intervalId = setInterval(() => {
      toggleUI(true, false, getRandomHexColor());
    }, 1000);
  });
  
  stopBtn.addEventListener('click', () => {
    toggleUI(false, true, '');
    clearInterval(intervalId);
  });

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }