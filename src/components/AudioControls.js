import El from './Elements';

/**
 * Audio controls:
 * Initial default states, handler functions, invocations at start, and button eventListeners
 */

class AudioControls {
  constructor() {
    this.muted = false;
    this.volume = 50;

    El.muteButton.addEventListener('click', this.muteButtonHandler);
    El.volumeSlider.addEventListener('change', (event) => this.volumeHandler(event));
  }


  /**
   * Mute button
   */
  muteButtonHandler(option) {
    // Applies default or localStorage value on start
    if (option === 'start') {
      !localStorage.getItem('muted') &&
      localStorage.setItem('muted', muted.toString());
      localStorage.getItem('muted') === 'false' ?
        El.muteButton.innerText = 'Mute':
        El.muteButton.innerText = 'Unmute';
      return;
    }

    // Handles behavior between states
    if (localStorage.getItem('muted') === 'true') {
      localStorage.setItem('muted', 'false');
      El.audioEndSession.muted = false;
      El.audioEndBreak.muted = false;
      El.muteButton.innerText = 'Mute';
    } else {
      localStorage.setItem('muted', 'true');
      El.audioEndSession.muted = true;
      El.audioEndBreak.muted = true;
      El.muteButton.innerText = 'Unmute';
    }
  }

  /**
   * Volume slider
   */
  volumeHandler(event, option) {
    // Applies volume value from localHost to audio files
    const applyVolume = () => {
      El.audioEndSession.volume = +localStorage.getItem('volume') / 100;
      El.audioEndBreak.volume = +localStorage.getItem('volume') / 100;
    }

    // Applies default or localStorage value on start
    if (option === 'start') {
      !localStorage.getItem('volume') ?
        localStorage.setItem('volume', volume.toString()) :
        El.volumeSlider.value = +localStorage.getItem('volume');
      return applyVolume();
    }

    // Set localStorage volume and volumeSlider value attribute. Then apply the value to the audio files.
    localStorage.setItem('volume', event.target.value);
    El.volumeSlider.setAttribute('value', localStorage.getItem('volume'));
    applyVolume();
  }

}

export const AudioControlsComponent = new AudioControls();
AudioControlsComponent.muteButtonHandler('start');
AudioControlsComponent.volumeHandler(null, 'start');

