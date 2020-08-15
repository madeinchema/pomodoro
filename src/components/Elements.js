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
