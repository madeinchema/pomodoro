/**
 * @type {HTMLElement}
 */
// Task Title
const taskTitleInput = document.getElementById('task-title-input');

// Timer element and buttons
const timerElement = document.querySelector('.timer time');
const sessionStatus = document.querySelector('#session-status p');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

// Timer settings button and values
const applySettingsButton = document.getElementById('timer-settings');
const workTime = document.getElementById('work-time');
const shortBreak = document.getElementById('short-break');
const longBreak = document.getElementById('long-break');
const longBreakInterval = document.getElementById('long-break-interval');

// Audio controls
const audioEndSession = document.getElementById('end-session');
const audioEndBreak = document.getElementById('end-break');
const muteButton = document.getElementById('mute');
const volumeSlider = document.getElementById('volume-slider');

/**
 * Default timer values
 */
const defaultSessionLength = 25;
const defaultShortBreakLength = 5;
const defaultLongBreakLength = 15;
const defaultLongBreakInterval = 4;

/**
 * Timer
 * @constructor
 */
function Timer() {

  // Timer initial state
  this.timerState = 'stopped';
  this.currentSession = 'workTime';
  this.sessionCounter = {
    session: 0,
    shortBreak: 0,
    longBreak: 0,
  };

  // Initial countdown time (expressed in seconds)
  this.time = parseInt(localStorage.workTime) * 60;


  /**
   * Session handler
   */
  this.sessionHandler = {
    // Resets the current timer iteration without changing the session's state.
    stop: () => {
      this.currentSession === 'workTime' && this.timeHandler.set('workTime');
      this.currentSession === 'shortBreak' && this.timeHandler.set('shortBreak');
      this.currentSession === 'longBreak' && this.timeHandler.set('longBreak');
      this.timeHandler.next();
    },

    // Sets the current session to whichever comes next
    next: () => {
      if (this.currentSession === 'workTimes') {
        this.sessionCounter.session++;
        this.sessionCounter.session % parseInt(localStorage.longBreakInterval) === 0
          ? this.sessionHandler.set('longBreak')
          : this.sessionHandler.set('shortBreak');
      } else if (this.currentSession === 'shortBreak') {
        this.sessionCounter.shortBreak++;
        this.currentSession = 'workTime';
      } else if (this.currentSession === 'longBreak') {
        this.sessionCounter.longBreak++;
        this.currentSession = 'workTime';
      }
      this.timeHandler.next();
    },

    // Sets the current session to that of the argument passed
    set: (newSessionState) => {
      if (newSessionState === 'workTime') {
        this.currentSession = 'workTime';
      } else if (newSessionState === 'shortBreak') {
        this.currentSession = 'shortBreak';
      } else if (newSessionState === 'longBreak') {
        this.currentSession = 'longBreak';
      }
    }
  }

  /**
   * Time display handler
   */
  this.timeHandler = {
    // Update the timer based on the sessionState argument
    set: (sessionState) => {
      if (sessionState === 'workTime') {
        this.time = parseInt(localStorage.workTime) * 60;
      } else if (sessionState === 'shortBreak') {
        return this.time = parseInt(localStorage.shortBreak) * 60;
      } else if (sessionState === 'longBreak') {
        return this.time = parseInt(localStorage.longBreak) * 60;
      }
    },

    // Change currentSession and update the timer and sessionStatus elements accordingly
    next: () => {
      if (this.currentSession === 'workTime') {
        this.timeHandler.set('workTime');
        sessionStatus.innerHTML = 'Work Time';
      } else if (this.currentSession === 'shortBreak') {
        this.timeHandler.set('shortBreak');
        sessionStatus.innerHTML = 'Short Break';
      } else if (this.currentSession === 'longBreak') {
        this.timeHandler.set('longBreak');
        sessionStatus.innerHTML = 'Long Break';
      }
    },

    // Update the timer's value to reflect the correct format
    update: () => {
      if (this.time % 60 < 10) {
        timerElement.innerHTML = Math.floor(this.time / 60) + ':0' + this.time % 60;
      } else {
        timerElement.innerHTML = Math.floor(this.time / 60) + ':' + this.time % 60;
      }
    }
  }

  /**
   * Countdown handler:
   * Runs the timer, keeps the timerElement updated, and handles its completion.
   */
  let countdownInterval;
  this.countdown = () => {
    countdownInterval = setInterval(() => {
      this.time--;
      this.timeHandler.update();

      if (this.time === 0) {
        this.stop();
      }
    }, 30); // TODO Remember to change this value for production
  };

  /**
   * Start method:
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
   * Pause method:
   * Stops the timer and changes the state to 'paused'
   */
  this.pause = () => {
    clearInterval(countdownInterval);
    this.elementStateHandler('paused');
  };

  /**
   * Stop method:
   * Stops the timer, changes the state to 'stopped', and resets the timer using the timeHandler option
   */
  this.stop = (option) => {
    if (option === 'button') {
      this.sessionHandler.stop();
    } else {
      this.notify();
      this.sessionHandler.next();
    }
    clearInterval(countdownInterval);
    this.elementStateHandler('stopped');
    this.timeHandler.update();
  };

  /**
   * Element State Handler:
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

    if (this.currentSession === 'workTime') {
      audioEndSession.play();
    } else if (this.currentSession === 'shortBreak' || this.currentSession === 'longBreak') {
      audioEndBreak.play();
    }

  }

  /**
   * Updates the timer with new settings from localStorage
   */
  this.timerUpdater = (option) => {
    if (option === 'start') {
      // Local storage with default values from start for new sessions
      !localStorage.getItem('workTime') &&
        localStorage.setItem('workTime', defaultSessionLength.toString());
      !localStorage.getItem('shortBreak') &&
        localStorage.setItem('shortBreak', defaultShortBreakLength.toString());
      !localStorage.getItem('longBreak') &&
        localStorage.setItem('longBreak', defaultLongBreakLength.toString());
      !localStorage.getItem('longBreakInterval') &&
        localStorage.setItem('longBreakInterval', defaultLongBreakInterval.toString());

      // Starts the user session with the timer using values from localStorage
      workTime.value = parseInt(localStorage.workTime);
      shortBreak.value = parseInt(localStorage.shortBreak);
      longBreak.value = parseInt(localStorage.longBreak);
      longBreakInterval.value = parseInt(localStorage.longBreakInterval);
    }

    // Update localStorage values to match those of the settings
    localStorage.setItem('workTime', workTime.value.toString());
    localStorage.setItem('shortBreak', shortBreak.value.toString());
    localStorage.setItem('longBreak', longBreak.value.toString());
    localStorage.setItem('longBreakInterval', longBreakInterval.value.toString());

    this.timeHandler.next();
  }

}

/**
 * Creates and Starts a new Timer
 * @type {Timer}
 */
const timer = new Timer();
timer.timerUpdater('start'); // Set values for the timer
timer.timeHandler.next(); // Set initial state of the timerElement

/**
 * Task title:
 * Uses localStorage to save and use the value when the user focuses outside the input field
 */
const taskTitleHandler = (event) => {
  localStorage.setItem('title', event.target.value);
  taskTitleInput.setAttribute('value', localStorage.getItem('title'));
}
taskTitleInput.addEventListener('focusout', (event) => taskTitleHandler(event));


/**
 * Timer controls
 */
startButton.addEventListener('click', timer.start);
stopButton.addEventListener('click', () => timer.stop('button'));

/**
 * Timer settings; Apply button
 */
applySettingsButton.addEventListener('click', (event) => {
  event.preventDefault();
  timer.timerUpdater();
});

/**
 * Audio controls:
 * Initial default states, handler functions, invocations at start, and button eventListeners
 */

/**
 * Mute button
 */
let muted = false;
const muteButtonHandler = (option) => {
  // Applies default or localStorage value on start
  if (option === 'start') {
    !localStorage.getItem('muted') &&
      localStorage.setItem('muted', muted.toString());
    localStorage.getItem('muted') === 'false' ?
      muteButton.innerText = 'Mute':
      muteButton.innerText = 'Unmute';
    return;
  }

  // Handles behavior between states
  if (localStorage.getItem('muted') === 'true') {
    localStorage.setItem('muted', 'false');
    audioEndSession.muted = false;
    audioEndBreak.muted = false;
    muteButton.innerText = 'Mute';
  } else {
    localStorage.setItem('muted', 'true');
    audioEndSession.muted = true;
    audioEndBreak.muted = true;
    muteButton.innerText = 'Unmute';
  }
}
muteButton.addEventListener('click', muteButtonHandler);
muteButtonHandler('start');

/**
 * Volume slider
 */
let volume = 50;

const volumeHandler = (event, option) => {
  // Applies volume value from localHost to audio files
  const applyVolume = () => {
    audioEndSession.volume = +localStorage.getItem('volume') / 100;
    audioEndBreak.volume = +localStorage.getItem('volume') / 100;
  }

  // Applies default or localStorage value on start
  if (option === 'start') {
    !localStorage.getItem('volume') ?
      localStorage.setItem('volume', volume.toString()) :
      volumeSlider.value = +localStorage.getItem('volume');
    return applyVolume();
  }

  // Set localStorage volume and volumeSlider value attribute. Then apply the value to the audio files.
  localStorage.setItem('volume', event.target.value);
  volumeSlider.setAttribute('value', localStorage.getItem('volume'));
  applyVolume();
}

volumeSlider.addEventListener('click', (event) => volumeHandler(event));
volumeHandler(null, 'start');
