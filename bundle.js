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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(2);
            var content = __webpack_require__(3);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root{--primary: #20C37F;--secondary: #D93838;--gray: rgb(74, 85, 104);--gray-dark: rgb(26, 32, 44);--background-color: #131313;--background-black: #000000;--marginMobile: 24px}html{font-family:\"Montserrat\",sans-serif;color:#fff}body,p,a,ul,li{margin:0;padding:0;text-decoration:none}li{list-style-type:none}body{background:var(--background-black)}a{color:#fff}a:hover{text-decoration:underline}button{padding:8px 24px;font:inherit;font-weight:600;color:#fff;flex-grow:1;border-radius:8px;outline:none;border:solid 3px var(--gray);background:transparent;cursor:pointer}button:hover{background:rgba(74,85,104,.25)}button:active{background:rgba(74,85,104,.5)}.button-red{border:solid 3px #742a2a;background:transparent}.button-red:hover{background:rgba(116,42,42,.2)}.button-red:active{background:rgba(116,42,42,.5)}input{text-align:center;font:inherit;color:#fff;background:transparent;border-radius:8px;border:solid 3px var(--gray);justify-self:end;height:26px;max-width:64px;outline:none}input:focus{background:var(--background-black)}.w-full{width:100%}.invisible{display:none}.modal{position:fixed;z-index:1;left:0;top:0;overflow:auto;width:100%;max-width:calc(100vw - calc(var(--marginMobile) * 4 + 6px));max-height:calc(100vh - calc(var(--marginMobile) * 4 + 6px))}#overlay{position:absolute;background:#000;opacity:.5;left:0;right:0;top:0;bottom:0;z-index:1;height:100vh}header{padding:16px var(--marginMobile);display:flex;justify-content:space-between;align-items:center;background:var(--background-color)}header nav{font-weight:600;font-size:1.2em}header nav ul{text-decoration:none}#logo h1{margin:0;font-size:1.8em;user-select:none}main{background-color:var(--background-black);padding:var(--marginMobile)}section{background:var(--background-color);border-radius:12px;padding:var(--marginMobile)}.element-title{padding:var(--marginMobile) auto 6px}.element-title h4{text-align:center;margin:0}#task-title{text-align:center;margin:12px 0 24px}#task-title p{padding:12px 6px;font-size:1.8em;font-weight:600;color:#fff;background:var(--background-color);border-radius:12px;border:solid 3px transparent;resize:none;outline:none;width:100%;box-sizing:border-box}#task-title p:focus::placeholder{color:transparent}#task-title p:focus{border:solid 3px rgba(255,255,255,.1)}#timer-container{text-align:center}#timer{font-size:5em;font-weight:500}#session-status{margin:0 auto 6px}#buttons{margin-top:12px;display:grid;grid-gap:12px}#settings-container{background-color:var(--background-color);border:solid 3px var(--gray);margin:var(--marginMobile);padding:var(--marginMobile)}#settings-container h2{text-align:center;margin:0}.settings{margin-bottom:24px}.settings h3{margin:32px 0 16px}.settings-list{display:grid;grid-template-columns:minmax(0, 2fr) minmax(0, 1fr);align-items:center;grid-gap:12px 24px}.settings-list label{width:100%}#timer-settings-apply{margin-top:24px}#mute{max-width:128px;padding:8px 12px;justify-self:end}#volume-slider{justify-self:end;width:100%;max-width:128px}footer{display:flex;flex-direction:column;justify-content:space-between;align-items:center}footer h4{margin:0 0 6px 0}footer p{margin:0;font-size:.8em}@media screen and (min-width: 900px){main div:first-child,main section{max-width:800px;margin:0 auto}#task-title{margin:12px auto 24px;max-width:calc(800px + var(--marginMobile) * 2)}#settings-container{margin:0 auto auto -300px}.modal{position:fixed;width:600px;top:5%;left:50%}}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/styles/app.scss
var app = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/Elements.js
/* harmony default export */ var Elements = ({
  /**
   * @type {HTMLElement}
   */
  overlay: document.getElementById('overlay'),
  // Page title
  pageTitleElement: document.getElementById('page-title'),
  pageTitle: 'Pomodoro App',
  // Favicon
  faviconElement: document.getElementById('favicon'),
  // Task title
  taskTitleInput: document.getElementById('task-title-input'),
  // Timer element and buttons
  timerElement: document.getElementById('timer'),
  sessionStatus: document.getElementById('session-status'),
  startButton: document.getElementById('start'),
  stopButton: document.getElementById('stop'),
  // Timer settings button and values
  openSettings: document.getElementById('openSettings'),
  closeSettings: document.getElementById('closeSettings'),
  applySettingsButton: document.getElementById('timer-settings-apply'),
  settingsModal: document.getElementById('settings-container'),
  workTime: document.getElementById('work-time'),
  shortBreak: document.getElementById('short-break'),
  longBreak: document.getElementById('long-break'),
  longBreakInterval: document.getElementById('long-break-interval'),
  // Audio controls
  muteButton: document.getElementById('mute'),
  volumeSlider: document.getElementById('volume-slider'),
  // Audio public
  audioEndSession: document.getElementById('end-session'),
  audioEndBreak: document.getElementById('end-break')
});
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
  this.time = parseInt(localStorage.workTime) * 60; // Initial countdown time (expressed in seconds)

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

        _this.currentSession === 'workTime' ? Elements.audioEndSession.play() : Elements.audioEndBreak.play(); // Audio notification

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
        Elements.startButton.innerText = 'Pause';
      } else if (newState === 'paused') {
        _this.timerState = 'paused';
        Elements.startButton.innerText = 'Resume';
      } else if (newState === 'stopped') {
        _this.timerState = 'stopped';
        Elements.startButton.innerText = 'Start';
      } // Changes favicon depending on currentSession and timerState


      Elements.faviconElement.setAttribute('href', "assets/img/icons/".concat(_this.currentSession, "-").concat(_this.timerState, ".png"));
    },
    // Update method:
    // Updates the timer with new settings from localStorage
    update: function update(option) {
      var sessionNames = Object.keys(_this.defaultTimerValues);
      var defaultValues = Object.values(_this.defaultTimerValues);

      if (option === 'start') {
        // Local storage with default values from start for new sessions
        for (var i = 0; i < sessionNames.length; i++) {
          !localStorage.getItem(sessionNames[i]) && localStorage.setItem(sessionNames[i], defaultValues[i].toString());
        } // Starts the user session with the timer using values from localStorage


        sessionNames.forEach(function (item) {
          return Elements[item].value = parseInt(localStorage.getItem(item));
        });
      } // Update localStorage values to match those of the settings and update timer with them


      sessionNames.forEach(function (item) {
        return localStorage.setItem(item, Elements[item].value.toString());
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
    next: function next() {
      if (_this.currentSession === 'workTime') {
        _this.sessionCounter.session++;
        _this.sessionCounter.session % parseInt(localStorage.longBreakInterval) === 0 ? _this.sessionHandler.set('longBreak') : _this.sessionHandler.set('shortBreak');
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
      if (sessionState === 'workTime') {
        _this.time = parseInt(localStorage.workTime) * 60;
      } else if (sessionState === 'shortBreak') {
        return _this.time = parseInt(localStorage.shortBreak) * 60;
      } else if (sessionState === 'longBreak') {
        return _this.time = parseInt(localStorage.longBreak) * 60;
      }
    },
    // Updates the timerElement and sessionStatus element based on the currentSession
    update: function update() {
      if (_this.currentSession === 'workTime') {
        _this.timeHandler.set('workTime');

        Elements.sessionStatus.innerText = 'Work Time';
      } else if (_this.currentSession === 'shortBreak') {
        _this.timeHandler.set('shortBreak');

        Elements.sessionStatus.innerText = 'Short Break';
      } else if (_this.currentSession === 'longBreak') {
        _this.timeHandler.set('longBreak');

        Elements.sessionStatus.innerText = 'Long Break';
      }
    },
    // Update the timer element and page title to reflect the correct format
    format: function format() {
      var formattedTime = function formattedTime() {
        return Math.floor(_this.time / 60) + (_this.time % 60 < 10 ? ':0' : ':') + _this.time % 60;
      }; // Update the timer element


      Elements.timerElement.innerText = formattedTime(); // Update the page title

      Elements.pageTitleElement.innerText = "".concat(formattedTime(), " ").concat(Elements.pageTitle);
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

Elements.startButton.addEventListener('click', TimerComponent.timerController.start); // Stop

Elements.stopButton.addEventListener('click', function () {
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
        return !localStorage.getItem('title') ? localStorage.setItem('title', Elements.taskTitleInput.innerText) : '';
      } // Handles font size


      event.target.innerText.length > 60 ? Elements.taskTitleInput.style.fontSize = "1.5em" : Elements.taskTitleInput.style.fontSize = "1.8em"; // Saves input value to localStorage

      setTimeout(function () {
        return localStorage.setItem('title', Elements.taskTitleInput.innerText);
      }, 25);
    }
  }]);

  return TaskTitle;
}(); // Initialize component


var TaskTitleComponent = new TaskTitle_TaskTitle();
TaskTitleComponent.taskTitleHandler(null, 'start'); // Listen for keystrokes and add behavior

Elements.taskTitleInput.addEventListener('keydown', function (event) {
  return TaskTitleComponent.taskTitleHandler(event);
}); // Initialize with title from localStorage

Elements.taskTitleInput.innerText = localStorage.getItem('title'); // Initialize with autofocus on task title

localStorage.getItem('title') == false && Elements.taskTitleInput.focus();
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
  } // Settings menu - Modal window


  TimerSettings_createClass(TimerSettings, [{
    key: "toggleSettings",
    value: function toggleSettings() {
      Elements.settingsModal.classList.toggle('invisible');
      Elements.overlay.classList.toggle('invisible'); // Body is not scrollable when the modal is open

      document.body.style.overflow === 'visible' || document.body.style.overflow === '' ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible';
    }
  }]);

  return TimerSettings;
}(); // Initialize component


var TimerSettingsComponent = new TimerSettings_TimerSettings(); // Apply button

Elements.applySettingsButton.addEventListener('click', function (event) {
  event.preventDefault();
  TimerComponent.timerController.update();
}); // Settings menu button

Elements.openSettings.addEventListener('click', TimerSettingsComponent.toggleSettings); // Close settings modal button

Elements.closeSettings.addEventListener('click', TimerSettingsComponent.toggleSettings); // Overlay close settings behavior

Elements.overlay.addEventListener('click', TimerSettingsComponent.toggleSettings);
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
    Elements.muteButton.addEventListener('click', this.muteButtonHandler);
    Elements.volumeSlider.addEventListener('change', function (event) {
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
        localStorage.getItem('muted') === 'false' ? Elements.muteButton.innerText = 'Mute' : Elements.muteButton.innerText = 'Unmute';
        return;
      } // Handles behavior between states


      if (localStorage.getItem('muted') === 'true') {
        localStorage.setItem('muted', 'false');
        Elements.audioEndSession.muted = false;
        Elements.audioEndBreak.muted = false;
        Elements.muteButton.innerText = 'Mute';
      } else {
        localStorage.setItem('muted', 'true');
        Elements.audioEndSession.muted = true;
        Elements.audioEndBreak.muted = true;
        Elements.muteButton.innerText = 'Unmute';
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
        Elements.audioEndSession.volume = +localStorage.getItem('volume') / 100;
        Elements.audioEndBreak.volume = +localStorage.getItem('volume') / 100;
      }; // Applies default or localStorage value on start


      if (option === 'start') {
        !localStorage.getItem('volume') ? localStorage.setItem('volume', this.volume.toString()) : Elements.volumeSlider.value = +localStorage.getItem('volume');
        return applyVolume();
      } // Set localStorage volume and volumeSlider value attribute. Then apply the value to the audio files.


      localStorage.setItem('volume', event.target.value);
      Elements.volumeSlider.setAttribute('value', localStorage.getItem('volume'));
      applyVolume();
    }
  }]);

  return AudioControls;
}(); // Initialize component


var AudioControlsComponent = new AudioControls_AudioControls(); // Set mute button value during initialization

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