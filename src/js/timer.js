import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const dateTimePicker = document.getElementById('datetime-picker');

const refs = {
  btnTimerStart: document.querySelector('[data-start]'),
  timerFieldDays: document.querySelector('[data-days]'),
  timerFieldHours: document.querySelector('[data-hours]'),
  timerFieldMinutes: document.querySelector('[data-minutes]'),
  timerFieldSeconds: document.querySelector('[data-seconds]'),
};

let countdownInterval;
let targetDate;

refs.btnTimerStart.disabled = true;

function updateTimer() {
  const currentDate = new Date().getTime();
  const timeLeft = targetDate - currentDate;

  if (timeLeft <= 0) {
    clearInterval(countdownInterval);
    timerFields.forEach(field => field.textContent = '00');
    refs.btnTimerStart.disabled = true;
    Notiflix.Notify.success("Time's up!");
  } else {
    const { days, hours, minutes, seconds } = convertMs(timeLeft);

    refs.timerFieldDays.textContent = addLeadingZero(days);
    refs.timerFieldHours.textContent = addLeadingZero(hours);
    refs.timerFieldMinutes.textContent = addLeadingZero(minutes);
    refs.timerFieldSeconds.textContent = addLeadingZero(seconds);
  }
}

function validateDate(selectedDate) {
  const currentDate = new Date();
  if (selectedDate <= currentDate) {
    Notiflix.Notify.failure("Please choose a date in the future");
    refs.btnTimerStart.disabled = true;
  } else {
    refs.btnTimerStart.disabled = false;
    targetDate = selectedDate.getTime();
  }
}

refs.btnTimerStart.addEventListener('click', () => {
  countdownInterval = setInterval(updateTimer, 1000);
  refs.btnTimerStart.disabled = true;
});

flatpickr(dateTimePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (!countdownInterval) {
      const selectedDate = selectedDates[0];
      validateDate(selectedDate);
    }
  },
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}