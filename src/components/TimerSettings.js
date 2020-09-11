import { TimerComponent } from './Timer';
import {
  settingsModal,
  overlay,
  applySettingsButton,
  openSettings,
  closeSettings,
} from './Elements';

/**
 * Timer settings
 */
class TimerSettings {
  // Settings menu - Modal window
  toggleSettings() {
    settingsModal.classList.toggle('invisible');
    overlay.classList.toggle('invisible');

    // Body is not scrollable when the modal is open
    document.body.style.overflow === 'visible' ||
    document.body.style.overflow === ''
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'visible');
  }
}

// Initialize component
const TimerSettingsComponent = new TimerSettings();

// Apply button
applySettingsButton.addEventListener('click', (event) => {
  event.preventDefault();
  TimerComponent.timerController.update();
});

// Settings menu button
openSettings.addEventListener('click', TimerSettingsComponent.toggleSettings);

// Close settings modal button
closeSettings.addEventListener('click', TimerSettingsComponent.toggleSettings);

// Overlay close settings behavior
overlay.addEventListener('click', TimerSettingsComponent.toggleSettings);

// Theme switcher
const appRoot = document.getElementById('app-root');
const switchTheme = document.getElementById('switchTheme');

if (localStorage.getItem('theme')) {
  appRoot.classList.add(localStorage.getItem('theme'));
} else {
  localStorage.setItem('theme', 'dark-theme');
  appRoot.classList.add(localStorage.getItem('theme'));
}

function themeSwitch() {
  if (localStorage.getItem('theme') === 'dark-theme') {
    appRoot.className = '';
    localStorage.setItem('theme', 'light-theme');
    appRoot.classList.add(localStorage.getItem('theme'));
  } else if (localStorage.getItem('theme') === 'light-theme') {
    appRoot.className = '';
    localStorage.setItem('theme', 'dark-theme');
    appRoot.classList.add(localStorage.getItem('theme'));
  }
}

switchTheme.addEventListener('click', themeSwitch);
