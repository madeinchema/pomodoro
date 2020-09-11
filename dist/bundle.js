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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./src/components/Elements.js
var Elements_namespaceObject = {};
__webpack_require__.r(Elements_namespaceObject);
__webpack_require__.d(Elements_namespaceObject, "appRoot", function() { return appRoot; });
__webpack_require__.d(Elements_namespaceObject, "overlay", function() { return overlay; });
__webpack_require__.d(Elements_namespaceObject, "pageTitleElement", function() { return pageTitleElement; });
__webpack_require__.d(Elements_namespaceObject, "pageTitle", function() { return pageTitle; });
__webpack_require__.d(Elements_namespaceObject, "faviconElement", function() { return faviconElement; });
__webpack_require__.d(Elements_namespaceObject, "taskTitleInput", function() { return taskTitleInput; });
__webpack_require__.d(Elements_namespaceObject, "timerElement", function() { return timerElement; });
__webpack_require__.d(Elements_namespaceObject, "sessionStatus", function() { return sessionStatus; });
__webpack_require__.d(Elements_namespaceObject, "startButton", function() { return startButton; });
__webpack_require__.d(Elements_namespaceObject, "stopButton", function() { return stopButton; });
__webpack_require__.d(Elements_namespaceObject, "openSettings", function() { return openSettings; });
__webpack_require__.d(Elements_namespaceObject, "closeSettings", function() { return closeSettings; });
__webpack_require__.d(Elements_namespaceObject, "applySettingsButton", function() { return applySettingsButton; });
__webpack_require__.d(Elements_namespaceObject, "settingsModal", function() { return settingsModal; });
__webpack_require__.d(Elements_namespaceObject, "workTime", function() { return workTime; });
__webpack_require__.d(Elements_namespaceObject, "shortBreak", function() { return shortBreak; });
__webpack_require__.d(Elements_namespaceObject, "longBreak", function() { return longBreak; });
__webpack_require__.d(Elements_namespaceObject, "longBreakInterval", function() { return longBreakInterval; });
__webpack_require__.d(Elements_namespaceObject, "switchTheme", function() { return switchTheme; });
__webpack_require__.d(Elements_namespaceObject, "muteButton", function() { return muteButton; });
__webpack_require__.d(Elements_namespaceObject, "volumeSlider", function() { return volumeSlider; });
__webpack_require__.d(Elements_namespaceObject, "audioEndSession", function() { return audioEndSession; });
__webpack_require__.d(Elements_namespaceObject, "audioEndBreak", function() { return audioEndBreak; });

// EXTERNAL MODULE: ./src/styles/app.scss
var app = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/Elements.js
/**
 * @type {HTMLElement}
 */
var appRoot = document.getElementById('app-root');
var overlay = document.getElementById('overlay'); // Page title

var pageTitleElement = document.getElementById('page-title');
var pageTitle = 'Pomodoro App'; // Favicon

var faviconElement = document.getElementById('favicon'); // Task title

var taskTitleInput = document.getElementById('task-title-input'); // Timer element and buttons

var timerElement = document.getElementById('timer');
var sessionStatus = document.getElementById('session-status');
var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop'); // Timer settings button and values

var openSettings = document.getElementById('openSettings');
var closeSettings = document.getElementById('closeSettings');
var applySettingsButton = document.getElementById('timer-settings-apply');
var settingsModal = document.getElementById('settings-container');
var workTime = document.getElementById('work-time');
var shortBreak = document.getElementById('short-break');
var longBreak = document.getElementById('long-break');
var longBreakInterval = document.getElementById('long-break-interval');
var switchTheme = document.getElementById('switchTheme'); // Audio controls

var muteButton = document.getElementById('mute');
var volumeSlider = document.getElementById('volume-slider'); // Audio public

var audioEndSession = document.getElementById('end-session');
var audioEndBreak = document.getElementById('end-break');
// CONCATENATED MODULE: ./src/components/Timer.js


/**
 * Timer
 * @constructor
 */

function Timer() {
  var _this = this;

  /**
   * Default timer values
   */
  this.defaultTimerValues = {
    workTime: 25,
    shortBreak: 5,
    longBreak: 15,
    longBreakInterval: 4
  };
  /**
   * Timer initial state
   */

  var countdownInterval;
  this.timerState = 'stopped';
  this.currentSession = 'workTime';
  this.sessionCounter = {
    session: 0,
    shortBreak: 0,
    longBreak: 0
  };
  this.time = parseInt(localStorage.workTime, 10) * 60; // Initial countdown time (expressed in seconds)

  /**
   * Timer Element Controller
   */

  this.timerController = {
    // Countdown handler:
    // Runs the timer, keeps the timerElement updated, and handles its completion.
    countdown: function countdown() {
      countdownInterval = setInterval(function () {
        _this.time--;

        _this.timeHandler.format();

        if (_this.time === 0) {
          _this.timerController.stop();
        }
      }, 1000); // TODO Remember to change this value for production
    },
    // Start method:
    // Handles the play/pause behavior of the startButton on the countdown based on timerState.
    start: function start() {
      if (_this.timerState === 'stopped' || _this.timerState === 'paused') {
        _this.timerController.countdown();

        _this.timerController.setState('active');
      } else {
        _this.timerController.pause();

        _this.timerController.setState('paused');
      }
    },
    // Pause method:
    // Stops the timer and changes the state to 'paused'
    pause: function pause() {
      clearInterval(countdownInterval);

      _this.timerController.setState('paused');
    },
    // Stop method:
    // Stops the timer, changes the state to 'stopped', and resets the timer using the timeHandler option.
    stop: function stop(option) {
      var priorState = _this.timerState; // Stop button: If timer wasn't started, ask confirmation and handle accordingly.

      if (option === 'button') {
        if (priorState !== 'stopped') {
          var stopConfirmation = confirm('Are you sure you want to stop the timer?');

          if (stopConfirmation) {
            _this.sessionHandler.stop();
          } else {
            return _this.timerController.setState('paused');
          }
        }
      } else {
        // Otherwise trigger alert notification and switch to next session
        setTimeout(function () {
          var session = _this.currentSession === 'workTime' ? 'Break' : 'Session';
          alert("".concat(session, " completed!"));
        }, 50); // Alert notification and "00:01 issue" fix

        if (_this.currentSession === 'workTime') {
          audioEndSession.play();
        } else {
          audioEndBreak.play(); // Audio notification
        }

        _this.sessionHandler.next();
      } // Reset timer, update startButton's text and update timer's time.


      clearInterval(countdownInterval);

      _this.timerController.setState('stopped');

      _this.timeHandler.format();
    },
    // Element State Handler:
    setState: function setState(newState) {
      // Changes start/pause/resume button texts' and handles timerState accordingly
      if (newState === 'active') {
        _this.timerState = 'active';
        startButton.innerText = 'Pause';
      } else if (newState === 'paused') {
        _this.timerState = 'paused';
        startButton.innerText = 'Resume';
      } else if (newState === 'stopped') {
        _this.timerState = 'stopped';
        startButton.innerText = 'Start';
      } // Changes favicon depending on currentSession and timerState


      faviconElement.setAttribute('href', "assets/img/icons/".concat(_this.currentSession, "-").concat(_this.timerState, ".png"));
    },
    // Update method:
    // Updates the timer with new settings from localStorage
    update: function update(option) {
      var sessionNames = Object.keys(_this.defaultTimerValues);
      var defaultValues = Object.values(_this.defaultTimerValues);

      if (option === 'start') {
        // Local storage with default values from start for new sessions
        for (var i = 0; i < sessionNames.length; i += 1) {
          localStorage.setItem(sessionNames[i].toString(), defaultValues[i].toString());
        } // Starts the user session with the timer using values from localStorage


        sessionNames.forEach(function (item) {
          timerElement.value = parseInt(localStorage.getItem(item.toString()), 10);
        }); // Update the settings' inputs

        sessionNames.forEach(function (item) {
          return Elements_namespaceObject[item].value = localStorage.getItem(item.toString());
        });
      } // Update localStorage values to match those of the settings and update timer with them


      sessionNames.forEach(function (item) {
        return localStorage.setItem(item.toString(), Elements_namespaceObject[item].value.toString());
      });
      setTimeout(function () {
        return _this.timeHandler.format();
      }, 25); // TODO use an asynchronous solution

      _this.timeHandler.update();
    }
  };
  /**
   * Session handler
   */

  this.sessionHandler = {
    // Resets the current timer iteration without changing the session's state.
    stop: function stop() {
      _this.currentSession === 'workTime' && _this.timeHandler.set('workTime');
      _this.currentSession === 'shortBreak' && _this.timeHandler.set('shortBreak');
      _this.currentSession === 'longBreak' && _this.timeHandler.set('longBreak');

      _this.timeHandler.update();
    },
    // Sets the current session to whichever comes next
    // TODO improve
    next: function next() {
      if (_this.currentSession === 'workTime') {
        _this.sessionCounter.session++;
        _this.sessionCounter.session % parseInt(localStorage.longBreakInterval, 10) === 0 ? _this.sessionHandler.set('longBreak') : _this.sessionHandler.set('shortBreak');
      } else if (_this.currentSession === 'shortBreak') {
        _this.sessionCounter.shortBreak++;
        _this.currentSession = 'workTime';
      } else if (_this.currentSession === 'longBreak') {
        _this.sessionCounter.longBreak++;
        _this.currentSession = 'workTime';
      }

      _this.timeHandler.update();
    },
    // Sets the current session to that of the argument passed
    set: function set(newSessionState) {
      if (newSessionState === 'workTime') {
        _this.currentSession = 'workTime';
      } else if (newSessionState === 'shortBreak') {
        _this.currentSession = 'shortBreak';
      } else if (newSessionState === 'longBreak') {
        _this.currentSession = 'longBreak';
      }

      _this.timeHandler.update();
    }
  };
  /**
   * Time display handler
   */

  this.timeHandler = {
    // Update the timer based on the sessionState argument
    set: function set(sessionState) {
      if (sessionState === 'workTime') _this.time = parseInt(localStorage.workTime, 10) * 60;
      if (sessionState === 'shortBreak') _this.time = parseInt(localStorage.getItem('shortBreak'), 10) * 60;
      if (sessionState === 'longBreak') _this.time = parseInt(localStorage.getItem('longBreak'), 10) * 60;
      return _this.time;
    },
    // Updates the timerElement and sessionStatus element based on the currentSession
    update: function update() {
      if (_this.currentSession === 'workTime') {
        _this.timeHandler.set('workTime');

        sessionStatus.innerText = 'Work Time';
      } else if (_this.currentSession === 'shortBreak') {
        _this.timeHandler.set('shortBreak');

        sessionStatus.innerText = 'Short Break';
      } else if (_this.currentSession === 'longBreak') {
        _this.timeHandler.set('longBreak');

        sessionStatus.innerText = 'Long Break';
      }
    },
    // Update the timer element and page title to reflect the correct format
    format: function format() {
      var formattedTime = function formattedTime() {
        return Math.floor(_this.time / 60) + (_this.time % 60 < 10 ? ':0' : ':') + _this.time % 60;
      }; // Update the timer element


      timerElement.innerText = formattedTime(); // Update the page title

      pageTitleElement.innerText = "".concat(formattedTime(), " ").concat(pageTitle);
    }
  };
} // Initialize the Timer


var TimerComponent = new Timer(); // Set values for the timer

TimerComponent.timerController.update('start'); // Set initial state of the timerElement

TimerComponent.timeHandler.update();
// CONCATENATED MODULE: ./src/components/TimerControls.js


/**
 * Timer controls
 */
// Start

startButton.addEventListener('click', TimerComponent.timerController.start); // Stop

stopButton.addEventListener('click', function () {
  return TimerComponent.timerController.stop('button');
});
// CONCATENATED MODULE: ./src/components/TaskTitle.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * Task title:
 * Uses localStorage to save and use the value when the user focuses outside the input field
 */

var TaskTitle_TaskTitle = /*#__PURE__*/function () {
  function TaskTitle() {
    _classCallCheck(this, TaskTitle);
  }

  _createClass(TaskTitle, [{
    key: "taskTitleHandler",
    // Handles the task title behavior
    value: function taskTitleHandler(event, option) {
      // Sets title when initialized
      if (option === 'start') {
        // Sets <br> to fix the non-centered cursor
        return !localStorage.getItem('title') ? localStorage.setItem('title', taskTitleInput.innerText) : '';
      } // Handles font size


      event.target.innerText.length > 60 ? taskTitleInput.style.fontSize = '1.5em' : taskTitleInput.style.fontSize = '1.8em'; // Saves input value to localStorage

      setTimeout(function () {
        return localStorage.setItem('title', taskTitleInput.innerText);
      }, 25);
    }
  }]);

  return TaskTitle;
}(); // Initialize component


var TaskTitleComponent = new TaskTitle_TaskTitle();
TaskTitleComponent.taskTitleHandler(null, 'start'); // Listen for keystrokes and add behavior

taskTitleInput.addEventListener('keydown', function (event) {
  return TaskTitleComponent.taskTitleHandler(event);
}); // Initialize with title from localStorage

taskTitleInput.innerText = localStorage.getItem('title'); // Initialize with autofocus on task title

localStorage.getItem('title') == false && taskTitleInput.focus();
// CONCATENATED MODULE: ./src/components/TimerSettings.js
function TimerSettings_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TimerSettings_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TimerSettings_createClass(Constructor, protoProps, staticProps) { if (protoProps) TimerSettings_defineProperties(Constructor.prototype, protoProps); if (staticProps) TimerSettings_defineProperties(Constructor, staticProps); return Constructor; }



/**
 * Timer settings
 */

var TimerSettings_TimerSettings = /*#__PURE__*/function () {
  function TimerSettings() {
    TimerSettings_classCallCheck(this, TimerSettings);

    // Theming initialization
    if (localStorage.getItem('theme')) {
      appRoot.classList.add(localStorage.getItem('theme'));
      switchTheme.textContent = 'Light';
    } else {
      localStorage.setItem('theme', 'dark-theme');
      appRoot.classList.add(localStorage.getItem('theme'));
      switchTheme.textContent = 'Dark';
    }
  } // Settings menu - Modal window


  TimerSettings_createClass(TimerSettings, [{
    key: "toggleSettings",
    value: function toggleSettings() {
      settingsModal.classList.toggle('invisible');
      overlay.classList.toggle('invisible');
      document.body.style.overflow === 'visible' ? document.body.style.overflow = 'visible' : document.body.style.overflow = 'hidden';
    }
  }]);

  return TimerSettings;
}(); // Initialize component


var TimerSettingsComponent = new TimerSettings_TimerSettings(); // Apply button

applySettingsButton.addEventListener('click', function (event) {
  event.preventDefault();
  TimerComponent.timerController.update();
}); // Settings menu button

openSettings.addEventListener('click', TimerSettingsComponent.toggleSettings); // Close settings modal button

closeSettings.addEventListener('click', TimerSettingsComponent.toggleSettings); // Overlay close settings behavior

overlay.addEventListener('click', TimerSettingsComponent.toggleSettings); // Theme switcher

function themeSwitch() {
  console.log('themeSwitch');

  if (localStorage.getItem('theme') === 'dark-theme') {
    appRoot.className = '';
    localStorage.setItem('theme', 'light-theme');
    appRoot.classList.add(localStorage.getItem('theme'));
    switchTheme.textContent = 'Dark';
  } else if (localStorage.getItem('theme') === 'light-theme') {
    appRoot.className = '';
    localStorage.setItem('theme', 'dark-theme');
    appRoot.classList.add(localStorage.getItem('theme'));
    switchTheme.textContent = 'Light';
  }
}

switchTheme.addEventListener('click', themeSwitch);
// CONCATENATED MODULE: ./src/components/AudioControls.js
function AudioControls_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AudioControls_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AudioControls_createClass(Constructor, protoProps, staticProps) { if (protoProps) AudioControls_defineProperties(Constructor.prototype, protoProps); if (staticProps) AudioControls_defineProperties(Constructor, staticProps); return Constructor; }


/**
 * Audio controls:
 * Initial default states, handler functions, invocations at start, and button eventListeners
 */

var AudioControls_AudioControls = /*#__PURE__*/function () {
  function AudioControls() {
    var _this = this;

    AudioControls_classCallCheck(this, AudioControls);

    this.muted = false;
    this.volume = 50;
    muteButton.addEventListener('click', this.muteButtonHandler);
    volumeSlider.addEventListener('change', function (event) {
      return _this.volumeHandler(event);
    });
  }
  /**
   * Mute button
   */


  AudioControls_createClass(AudioControls, [{
    key: "muteButtonHandler",
    value: function muteButtonHandler(option) {
      // Applies default or localStorage value on start
      if (option === 'start') {
        !localStorage.getItem('muted') && localStorage.setItem('muted', this.muted.toString());
        localStorage.getItem('muted') === 'false' ? muteButton.innerText = 'Mute' : muteButton.innerText = 'Unmute';
        return;
      } // Handles behavior between states


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
    /**
     * Volume slider
     */

  }, {
    key: "volumeHandler",
    value: function volumeHandler(event, option) {
      // Applies volume value from localHost to audio files
      var applyVolume = function applyVolume() {
        audioEndSession.volume = +localStorage.getItem('volume') / 100;
        audioEndBreak.volume = +localStorage.getItem('volume') / 100;
      }; // Applies default or localStorage value on start


      if (option === 'start') {
        !localStorage.getItem('volume') ? localStorage.setItem('volume', this.volume.toString()) : volumeSlider.value = +localStorage.getItem('volume');
        return applyVolume();
      } // Set localStorage volume and volumeSlider value attribute. Then apply the value to the audio files.


      localStorage.setItem('volume', event.target.value);
      volumeSlider.setAttribute('value', localStorage.getItem('volume'));
      applyVolume();
    }
  }]);

  return AudioControls;
}(); // Initialize component


var AudioControlsComponent = new AudioControls_AudioControls();
/* harmony default export */ var components_AudioControls = (AudioControlsComponent); // Set mute button value during initialization

AudioControlsComponent.muteButtonHandler('start'); // Set volume value during initialization

AudioControlsComponent.volumeHandler(null, 'start');
// CONCATENATED MODULE: ./src/app.js
// Import Styles

/**
 * Timer
 */

 // Timer Controls

 // Task Title

 // Timer Settings

 // Audio Controls



/***/ })
/******/ ]);