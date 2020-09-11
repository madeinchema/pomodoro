/**
 * @type {HTMLElement}
 */
export const overlay = document.getElementById('overlay');

// Page title
export const pageTitleElement = document.getElementById('page-title');
export const pageTitle = 'Pomodoro App';

// Favicon
export const faviconElement = document.getElementById('favicon');

// Task title
export const taskTitleInput = document.getElementById('task-title-input');

// Timer element and buttons
export const timerElement = document.getElementById('timer');
export const sessionStatus = document.getElementById('session-status');
export const startButton = document.getElementById('start');
export const stopButton = document.getElementById('stop');

// Timer settings button and values
export const openSettings = document.getElementById('openSettings');
export const closeSettings = document.getElementById('closeSettings');
export const applySettingsButton = document.getElementById(
  'timer-settings-apply'
);
export const settingsModal = document.getElementById('settings-container');
export const workTime = document.getElementById('work-time');
export const shortBreak = document.getElementById('short-break');
export const longBreak = document.getElementById('long-break');
export const longBreakInterval = document.getElementById('long-break-interval');

// Audio controls
export const muteButton = document.getElementById('mute');
export const volumeSlider = document.getElementById('volume-slider');

// Audio public
export const audioEndSession = document.getElementById('end-session');
export const audioEndBreak = document.getElementById('end-break');
