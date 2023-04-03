const btnStart = document.querySelector('button[data-start]')
const btnStop = document.querySelector('button[data-stop]')
const bodyColor = document.querySelector('body')
let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

btnStop.setAttribute('disabled', '');


btnStart.addEventListener('click', element => {
     element.target.setAttribute('disabled', true);
     btnStop.removeAttribute('disabled');

timerId = setInterval(() => {
    bodyColor.style.backgroundColor = getRandomHexColor();
    }, 1000);    
});


btnStop.addEventListener('click', element => {
  element.target.setAttribute('disabled', true);
  btnStart.removeAttribute('disabled');

  clearInterval(timerId);
});