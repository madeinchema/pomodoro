import {TimerComponent} from '../Timer';
import El from './Elements';

/**
 * Timer settings
 */
class TimerSettings {
  constructor() {
  }

  // Settings menu - Modal window
  toggleSettings() {
    El.settingsModal.classList.toggle('invisible');
    El.overlay.classList.toggle('invisible');

    // Body is not scrollable when the modal is open
    (document.body.style.overflow === 'visible' || document.body.style.overflow === "")
      ? document.body.style.overflow = 'hidden'
      : document.body.style.overflow = 'visible';
  }

}

const TimerSettingsComponent = new TimerSettings();


// Apply button
El.applySettingsButton.addEventListener('click', (event) => {
  event.preventDefault();
  TimerComponent.timerController.update();
});

El.openSettings.addEventListener('click', TimerSettingsComponent.toggleSettings);
El.closeSettings.addEventListener('click', TimerSettingsComponent.toggleSettings);
El.overlay.addEventListener('click', TimerSettingsComponent.toggleSettings);
