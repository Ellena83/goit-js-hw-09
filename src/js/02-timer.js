
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputRef = document.querySelector('#datetime-picker');
const btnStartRef = document.querySelector('[data-start]');
const daysSpan = document.querySelector('[data-days]');
const hoursSpan = document.querySelector('[data-hours]');
const minutesSpan = document.querySelector('[data-minutes]');
const secondsSpan = document.querySelector('[data-seconds]');


btnStartRef.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        // проверяем валидность выбранной даты
        if (options.defaultDate > selectedDates[0]) {
            window.alert("Please choose a date in the future");
           //inputRef.value = this.defaultDate;
        }
        else {
            btnStartRef.disabled = false;
            const date = new Date(selectedDates[0]);
            return (inputRef.value = date);
        }
    },
  }

//применяем библиотеку flatpickr для заполнения даты из календаря
flatpickr(inputRef, options);

 //конвертируем дату из милисекунд в дни,часы,минуты,секунды
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

//действия при нажатии на кнопку Start
btnStartRef.addEventListener('click', () => {
  timerId = setInterval(timerUpdate, 1000);
})

function timerUpdate() {
  const currentTime = new Date();
  const endTime = Date.parse(inputRef.value);
  const delta = endTime - currentTime;

const t = convertMs(delta)
if (delta <= 0)    {
  clearInterval(timerId)
  t.days = 0;
  t.hours = 0;
  t.minutes = 0;
  t.seconds = 0;
 }
daysSpan.textContent = `${addLeadingZero(t.days)}`;
hoursSpan.textContent = `${addLeadingZero(t.hours)}`;
minutesSpan.textContent = `${addLeadingZero(t.minutes)}`;
secondsSpan.textContent = `${addLeadingZero(t.seconds)}`;
}

function addLeadingZero(value) {
  if (value >= 0 && value < 10) {
    return `${value}`.padStart(2, '0');
  }
   else {
     return value;
   }
  }
