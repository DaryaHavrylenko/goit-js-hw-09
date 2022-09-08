const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');


const timer = {
    intervalId: null,
    isActive: false,
    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
       this.intervalId = setInterval(() => {
          let color = getRandomHexColor();
  document.body.style.background = color;
console.log(getRandomHexColor());
  }, 1000);
        },
stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
        }
    }

btnStart.addEventListener('click', () => {
    timer.start();
})
   
btnStop.addEventListener("click", () => {
    timer.stop();

});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
