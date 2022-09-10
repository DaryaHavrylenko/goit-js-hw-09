import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let selectedDate = null;
const currentDate = date.now();

const input = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  dateFormat: 'Y-m-d H:i',
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr(input, options);

const timer = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }

    const startTime = Date.now();
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const { days, hours, minutes, seconds } = convertMs(deltaTime);
      console.log(`${days}::${hours}:${minutes}:${seconds}`);
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  },
};
function updateClockFace({ days, hours, minutes, seconds }) {
  days.textContent = `${days}`;
  hours.textContent = `${hours}`;
  minutes.textContent = `${minutes}`;
  seconds.textContent = `${seconds}`;
}
// timer.start();
buttonStart.addEventListener('click', () => {
  timer.start();
});
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));

  const hours = addLeadingZero(Math.floor((ms % day) / hour));

  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));

  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

// console.log(convertMs());
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
