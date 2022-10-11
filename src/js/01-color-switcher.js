function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
let timerId = null;
  const btnStartRef = document.querySelector('[data-start]');
  const btnStopRef=document.querySelector('[data-stop]');
  const body = document.querySelector('body');

  btnStartRef.addEventListener('click', () => {
     timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    }
    , 1000);
btnStartRef.disabled = true;
  });

btnStopRef.addEventListener('click', () => {
  clearInterval(timerId);
})