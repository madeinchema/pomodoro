// Audio controls
const audioEndSession = document.getElementById('end-session');
const audioEndBreak = document.getElementById('end-break');
const muteButton = document.getElementById('mute');
const volumeSlider = document.getElementById('volume-slider');


/**
 * Audio controls:
 * Initial default states, handler functions, invocations at start, and button eventListeners
 */

export default class AudioControls {
  constructor() {
    this.muted = false;
    this.volume = 50;

    muteButton.addEventListener('click', this.muteButtonHandler);
    volumeSlider.addEventListener('change', (event) => this.volumeHandler(event));
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

  /**
   * Volume slider
   */
  volumeHandler(event, option) {
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

}
