/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Timer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Timer__WEBPACK_IMPORTED_MODULE_0__);



/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * @type {HTMLElement}
 */

const overlay = document.getElementById('overlay');

// Page title
const pageTitleElement = document.getElementById('page-title');
const pageTitle = 'Pomodoro App';

// Favicon
const faviconElement = document.getElementById('favicon');

// Task title
const taskTitleInput = document.getElementById('task-title-input');

// Timer element and buttons
const timerElement = document.getElementById('timer');
const sessionStatus = document.getElementById('session-status');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

// Timer settings button and values
const openSettings = document.getElementById('openSettings');
const closeSettings = document.getElementById('closeSettings');
const applySettingsButton = document.getElementById('timer-settings-apply');
const workTime = document.getElementById('work-time');
const shortBreak = document.getElementById('short-break');
const longBreak = document.getElementById('long-break');
const longBreakInterval = document.getElementById('long-break-interval');
const settingsModal = document.getElementById('settings-container');

// Audio controls
const audioEndSession = document.getElementById('end-session');
const audioEndBreak = document.getElementById('end-break');
const muteButton = document.getElementById('mute');
const volumeSlider = document.getElementById('volume-slider');

/**
 * Default timer values
 */
const defaultTimerValues = {
  'workTime': 25,
  'shortBreak': 5,
  'longBreak': 15,
  'longBreakInterval': 4,
};

/**
 * Timer
 * @constructor
 */
function Timer() {

  /**
   * Timer initial state
   */
  let countdownInterval;
  this.timerState = 'stopped';
  this.currentSession = 'workTime';
  this.sessionCounter = {
    session: 0,
    shortBreak: 0,
    longBreak: 0,
  };
  this.time = parseInt(localStorage.workTime) * 60; // Initial countdown time (expressed in seconds)

  /**
   * Timer Element Controller
   */
  this.timerController = {
    // Countdown handler:
    // Runs the timer, keeps the timerElement updated, and handles its completion.
    countdown: () => {
      countdownInterval = setInterval(() => {
        this.time--;
        this.timeHandler.format();

        if (this.time === 0) {
          this.timerController.stop();
        }
      }, 1000); // TODO Remember to change this value for production
    },

    // Start method:
    // Handles the play/pause behavior of the startButton on the countdown based on timerState.
    start: () => {
      if (this.timerState === 'stopped' || this.timerState === 'paused') {
        this.timerController.countdown();
        this.timerController.setState('active');
      } else {
        this.timerController.pause();
        this.timerController.setState('paused');
      }
    },

    // Pause method:
    // Stops the timer and changes the state to 'paused'
    pause: () => {
      clearInterval(countdownInterval);
      this.timerController.setState('paused');
    },

    // Stop method:
    // Stops the timer, changes the state to 'stopped', and resets the timer using the timeHandler option.
    stop: (option) => {
      let priorState = this.timerState;
      // Stop button: If timer wasn't started, ask confirmation and handle accordingly.
      if (option === 'button') {
        if (priorState !== 'stopped') {
          let stopConfirmation = confirm('Are you sure you want to stop the timer?');
          if (stopConfirmation) {
            this.sessionHandler.stop();
          } else {
            return this.timerController.setState('paused');
          }
        }
      } else {
        // Otherwise trigger alert notification and switch to next session
        setTimeout(() => {
          let session = this.currentSession === 'workTime' ? 'Break' : 'Session';
          alert(`${session} completed!`)
        }, 50) // Alert notification and "00:01 issue" fix
        this.currentSession === 'workTime' ? audioEndSession.play() : audioEndBreak.play(); // Audio notification
        this.sessionHandler.next();
      }
      // Reset timer, update startButton's text and update timer's time.
      clearInterval(countdownInterval);
      this.timerController.setState('stopped');
      this.timeHandler.format();
    },


    // Element State Handler:
    setState: (newState) => {
      // Changes start/pause/resume button texts' and handles timerState accordingly
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
      // Changes favicon depending on currentSession and timerState
      faviconElement.setAttribute('href', `assets/img/icons/${this.currentSession}-${this.timerState}.png`);
    },


    // Update method:
    // Updates the timer with new settings from localStorage
    update: (option) => {
      const sessionNames = Object.keys(defaultTimerValues);
      const defaultValues = Object.values(defaultTimerValues);

      if (option === 'start') {
        // Local storage with default values from start for new sessions
        for (let i = 0; i < sessionNames.length; i++) {
          !localStorage.getItem(sessionNames[i]) &&
          localStorage.setItem(sessionNames[i], defaultValues[i].toString());
        }
        // Starts the user session with the timer using values from localStorage
        sessionNames.forEach(item => eval(item).value = parseInt(localStorage.getItem(item)));
      }

      // Update localStorage values to match those of the settings and update timer with them
      sessionNames.forEach(item => localStorage.setItem(item, eval(item).value.toString()));
      setTimeout(() => this.timeHandler.format(), 25); // TODO use an asynchronous solution
      this.timeHandler.update();
    }

  }

  /**
   * Session handler
   */
  this.sessionHandler = {
    // Resets the current timer iteration without changing the session's state.
    stop: () => {
      this.currentSession === 'workTime' && this.timeHandler.set('workTime');
      this.currentSession === 'shortBreak' && this.timeHandler.set('shortBreak');
      this.currentSession === 'longBreak' && this.timeHandler.set('longBreak');
      this.timeHandler.update();
    },

    // Sets the current session to whichever comes next
    next: () => {
      if (this.currentSession === 'workTime') {
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
      this.timeHandler.update();
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
      this.timeHandler.update();
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

    // Updates the timerElement and sessionStatus element based on the currentSession
    update: () => {
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

    // Update the timer element and page title to reflect the correct format
    format: () => {
      let formattedTime = () => {
        return Math.floor(this.time / 60)
          + (this.time % 60 < 10 ? ':0' : ':')
          + this.time % 60;
      };
      // Update the timer element
      timerElement.innerHTML = formattedTime();
      // Update the page title
      pageTitleElement.innerHTML = formattedTime() + ' ' + pageTitle;
    }
  }

}


/**
 * Creates and Starts a new Timer
 * @type {Timer}
 */
const timer = new Timer();
timer.timerController.update('start'); // Set values for the timer
timer.timeHandler.update(); // Set initial state of the timerElement

/**
 * Task title:
 * Uses localStorage to save and use the value when the user focuses outside the input field
 */
const taskTitleHandler = (event, option) => {

  if (option === 'start') {
    return !localStorage.getItem('title') ? localStorage.setItem('title', taskTitleInput.innerText) : ''; // Sets <br> to fix the non-centered cursor
  }

  event.target.innerText.length > 60
    ? taskTitleInput.style.fontSize = "1.5em"
    : taskTitleInput.style.fontSize = "1.8em";
  setTimeout(() => localStorage.setItem('title', taskTitleInput.innerText), 25);

}
taskTitleInput.addEventListener('keydown', (event) => taskTitleHandler(event));
taskTitleHandler(null, 'start');
taskTitleInput.innerText = localStorage.getItem('title'); // Get title on page load
localStorage.getItem('title') == false && taskTitleInput.focus(); // Autofocus on page load


/**
 * Timer controls
 */
startButton.addEventListener('click', timer.timerController.start);
stopButton.addEventListener('click', () => timer.timerController.stop('button'));

/**
 * Timer settings
 */
// Apply button
applySettingsButton.addEventListener('click', (event) => {
  event.preventDefault();
  timer.timerController.update();
});

// Settings menu - Modal window
const toggleSettings = () => {
  settingsModal.classList.toggle('invisible');
  overlay.classList.toggle('invisible');

  // Body is not scrollable when the modal is open
  (document.body.style.overflow === 'visible' || document.body.style.overflow === "")
    ? document.body.style.overflow = 'hidden'
    : document.body.style.overflow = 'visible';
}

openSettings.addEventListener('click', toggleSettings);
closeSettings.addEventListener('click', toggleSettings);
overlay.addEventListener('click', toggleSettings);


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

volumeSlider.addEventListener('change', (event) => volumeHandler(event));
volumeHandler(null, 'start');


/***/ })
/******/ ]);