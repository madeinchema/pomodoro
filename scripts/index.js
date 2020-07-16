const timerElement = document.querySelector('.timer time');
const timerButton = document.querySelector('#start button');

function Timer(sessionLength = 25, shortBreakLength = 5, longBreakLength = 15, sessionsToLongBreak = 4) {

  // Countdown Handler
  this.seconds = sessionLength * 60;

  // Time display handler
  this.timerHandler = () => {
    if (this.seconds % 60 < 10) {
      return Math.floor(this.seconds / 60) + ':0' + this.seconds % 60;
    }
    return Math.floor(this.seconds / 60) + ':' + this.seconds % 60;

  }

  // Countdown handler
  this.countdown = () => {
    setInterval(() => {
      this.seconds--
      timerElement.innerHTML = this.timerHandler();
    }, 1000)
  }

  // Pause method

  // Resume method

  // Stop method

}

const timer = new Timer;

timerButton.addEventListener('click', timer.countdown);
