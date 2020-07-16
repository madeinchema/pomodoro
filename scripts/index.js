const timerElement = document.querySelector('.timer time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

function Timer(sessionLength = 25, shortBreakLength = 5, longBreakLength = 15, sessionsToLongBreak = 4) {

  // Initial state
  this.state = 'stopped';

  // Initial countdown time
  this.seconds = sessionLength * 60;

  /**
   * Time display handler
   */
  this.timerHandler = (option) => {

    // Reset the timer if the stop button is used
    if (option === 'stop') {
      this.seconds = sessionLength * 60;
      timerElement.innerHTML = this.timerHandler();
    }

    // Returns time in format MM:SS
    if (this.seconds % 60 < 10) {
      return Math.floor(this.seconds / 60) + ':0' + this.seconds % 60;
    } else {
      return Math.floor(this.seconds / 60) + ':' + this.seconds % 60;
    }

  };

  /**
   * Countdown handler
   * Updates the timerElement using the timeHandler's returned value
   */
  let countdownInterval;
  this.countdown = () => {
    countdownInterval = setInterval(() => {
      this.seconds--;
      timerElement.innerHTML = this.timerHandler();
    }, 1000);
  };

  /**
   * Start handler
   * Acts as both play/pause depending on the state
   */
  this.start = () => {
    if (this.state === 'stopped' || this.state === 'paused') {
      this.countdown();
      this.stateHandler('active');
    } else {
      this.pause();
      this.stateHandler('paused');
    }
  };

  /**
   * State handler
   * Handles state and button texts changes
   */
  this.stateHandler = (newState) => {
    if (newState === 'active') {
      this.state = 'active';
      startButton.innerText = 'Pause';
    } else if (newState === 'paused') {
      this.state = 'paused';
      startButton.innerText = 'Resume';
    } else if (newState === 'stopped') {
      this.state = 'stopped';
      startButton.innerText = 'Start';
    }
  };

  /**
   * Pause method
   * Stops the timer and changes the state to 'paused'
   */
  this.pause = () => {
    clearInterval(countdownInterval);
    this.stateHandler('paused');
  };

  /**
   * Stop method
   * Stops the timer, changes the state to 'stopped', and resets the timer using the timeHandler option
   */
  this.stop = () => {
    this.timerHandler('stop');
    clearInterval(countdownInterval);
    this.stateHandler('stopped');
  };

}

const timer = new Timer;

startButton.addEventListener('click', timer.start);
stopButton.addEventListener('click', timer.stop);
