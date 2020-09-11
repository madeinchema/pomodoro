import { TimerComponent } from './Timer';
import {
  appRoot,
  settingsModal,
  overlay,
  applySettingsButton,
  openSettings,
  closeSettings,
  switchTheme,
} from './Elements';

/**
 * Timer settings
 */
class TimerSettings {
  constructor() {
    // Theming initialization
    if (localStorage.getItem('theme')) {
      appRoot.classList.add(localStorage.getItem('theme'));
      switchTheme.textContent = 'Light';
    } else {
      localStorage.setItem('theme', 'dark-theme');
      appRoot.classList.add(localStorage.getItem('theme'));
      switchTheme.textContent = 'Dark';
    }
  }

  // Settings menu - Modal window
  toggleSettings() {
    settingsModal.classList.toggle('invisible');
    overlay.classList.toggle('invisible');
    document.body.style.overflow === 'visible'
      ? (document.body.style.overflow = 'visible')
      : (document.body.style.overflow = 'hidden');
  }
}

// Initialize component
export const TimerSettingsComponent = new TimerSettings();

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
