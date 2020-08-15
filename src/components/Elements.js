// /**
//  * @type {HTMLElement}
//  */
//
// const overlay = document.getElementById('overlay');
//
// // Page title
// const pageTitleElement = document.getElementById('page-title');
// const pageTitle = 'Pomodoro App';
//
// // Favicon
// const faviconElement = document.getElementById('favicon');
//
// // Task title
// const taskTitleInput = document.getElementById('task-title-input');
//
// // Timer element and buttons
// const timerElement = document.getElementById('timer');
// const sessionStatus = document.getElementById('session-status');
// const startButton = document.getElementById('start');
// const stopButton = document.getElementById('stop');
//
// // Timer settings button and values
// const openSettings = document.getElementById('openSettings');
// const closeSettings = document.getElementById('closeSettings');
// const applySettingsButton = document.getElementById('timer-settings-apply');
// const workTime = document.getElementById('work-time');
// const shortBreak = document.getElementById('short-break');
// const longBreak = document.getElementById('long-break');
// const longBreakInterval = document.getElementById('long-break-interval');
// const settingsModal = document.getElementById('settings-container');


//////////////

export default {
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
  workTime: document.getElementById('work-time'),
  shortBreak: document.getElementById('short-break'),
  longBreak: document.getElementById('long-break'),
  longBreakInterval: document.getElementById('long-break-interval'),
  settingsModal: document.getElementById('settings-container'),

  // Audio controls
  muteButton: document.getElementById('mute'),
  volumeSlider: document.getElementById('volume-slider'),

  // Audio assets
  audioEndSession: document.getElementById('end-session'),
  audioEndBreak: document.getElementById('end-break'),

}

