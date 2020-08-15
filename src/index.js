/**
 * Timer
 */
import Timer from './Timer';

/**
 * Audio Controls initialization
 */
import AudioControls from "./components/AudioControls";
const AudioControlsElement = new AudioControls();
AudioControlsElement.muteButtonHandler('start');
AudioControlsElement.volumeHandler(null, 'start');
