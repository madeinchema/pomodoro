const timerElement = document.querySelector('.timer time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const audioEndSession = document.getElementById('end-session');
const audioEndBreak = document.getElementById('end-break');
const muteButton = document.getElementById('mute');
const volumeSlider = document.getElementById('volume-slider');


function Timer(sessionLength = 25, shortBreakLength = 5, longBreakLength = 15, sessionsToLongBreak = 4) {

  // Timer initial state
  this.timerState = 'stopped';
  this.currentSession = 'session';
  this.sessionCounter = {
    session: 0,
    shortBreak: 0,
    longBreak: 0,
  };

  // Initial countdown time (expressed in seconds)
  this.time = sessionLength * 60;

  // Mute button initial state
  let muted = false;
  muteButton.innerText = 'Mute';

  /**
   * Session handler
   * Manages sessions and breaks, altering the currentSession and time variables.
   */
  this.sessionHandler = (option) => {
    // Stop resets the timer without changing the session's state.
    if (option === 'stop') {
      if (this.currentSession === 'session') {
        return this.time = sessionLength * 60;
      } else if (this.currentSession === 'shortBreak') {
        return this.time = shortBreakLength * 60;
      } else if (this.currentSession === 'longBreak') {
        return this.time = longBreakLength * 60;
      }
    }

    // Main session state handler
    if (this.currentSession === 'session') {
      this.sessionCounter.session++;
      console.log(this.sessionCounter.session);
      console.log(sessionsToLongBreak);
      if (this.sessionCounter.session % sessionsToLongBreak === 0) {
        this.currentSession = 'longBreak';
        this.time = longBreakLength * 60;
      } else {
        this.currentSession = 'shortBreak';
        this.time = shortBreakLength * 60;
      }
    } else if (this.currentSession === 'shortBreak') {
      this.sessionCounter.shortBreak++;
      this.currentSession = 'session';
      this.time = sessionLength * 60;
    } else if (this.currentSession === 'longBreak') {
      this.sessionCounter.longBreak++;
      this.currentSession = 'session';
      this.time = sessionLength * 60;
    }

  }

  /**
   * Time display handler
   * Updates timerElement using the format MM:SS
   */
  this.timerHandler = () => {
    if (this.time % 60 < 10) {
      timerElement.innerHTML = Math.floor(this.time / 60) + ':0' + this.time % 60;
    } else {
      timerElement.innerHTML = Math.floor(this.time / 60) + ':' + this.time % 60;
    }
  };

  /**
   * Countdown handler
   * Runs the timer, keeps the timerElement updated, and handles its completion.
   */
  let countdownInterval;
  this.countdown = () => {
    countdownInterval = setInterval(() => {
      this.time--;
      this.timerHandler();

      if (this.time === 0) {
        this.stop();
      }
    }, 1000); // TODO
  };

  /**
   * Start method
   * Handles the play/pause behavior of the startButton on the countdown based on timerState
   */
  this.start = () => {
    if (this.timerState === 'stopped' || this.timerState === 'paused') {
      this.countdown();
      this.elementStateHandler('active');
    } else {
      this.pause();
      this.elementStateHandler('paused');
    }
  };

  /**
   * Pause method
   * Stops the timer and changes the state to 'paused'
   */
  this.pause = () => {
    clearInterval(countdownInterval);
    this.elementStateHandler('paused');
  };

  /**
   * Stop method
   * Stops the timer, changes the state to 'stopped', and resets the timer using the timeHandler option
   */
  this.stop = (option) => {
    if (option === 'button') {
      this.sessionHandler('stop');
    } else {
      this.notify();
      this.sessionHandler();
    }
    clearInterval(countdownInterval);
    this.elementStateHandler('stopped');
    this.timerHandler();
  };

  /**
   * Element State Handler
   * Changes start/pause/resume button texts' and handles timerState accordingly
   */
  this.elementStateHandler = (newState) => {
    if (newState === 'active') {
      this.timerState = 'active';
      startButton.innerText = 'Pause';
    } else if (newState === 'paused') {
      this.timerState = 'paused';
      startButton.innerText = 'Resume';
    } else if (newState === 'stopped') {
      this.timerState = 'stopped';
      startButton.innerText = 'Start';
    }
  };

  /**
   * Notification handler
   */
  this.notify = () => {


    // Alert with setTimeout in order to fix the 00:01 issue
    setTimeout(() => {
      alert('Session ended!');
    }, 10)

    if (this.currentSession === 'session') {
      audioEndSession.play();
    } else if (this.currentSession === 'shortBreak' || this.currentSession === 'longBreak') {
      audioEndBreak.play();
    }

  }

  /**
   * Audio handler method
   */
  this.audioHandler = () => {
    if (muted === true) {
      muted = false;
      audioEndSession.muted = false;
      audioEndBreak.muted = false;
      muteButton.innerText = 'Mute';
    } else {
      muted = true;
      audioEndSession.muted = true;
      audioEndBreak.muted = true;
      muteButton.innerText = 'Unmute';
    }
  }

}

// Timer creation passing settings as parameters
const timer = new Timer(0.05, 2, 3, 4);
timer.timerHandler(); // Set initial state of the timerElement

// Timer controls
startButton.addEventListener('click', timer.start);
stopButton.addEventListener('click', () => timer.stop('button'));

// Audio controls
muteButton.addEventListener('click', () => timer.audioHandler());
volumeSlider.addEventListener('click', (event) => {
  let volume = event.target.value / 100;
  audioEndSession.volume = volume;
  audioEndBreak.volume = volume;
});
