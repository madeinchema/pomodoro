import {TimerComponent} from '../Timer';
import El from './Elements';

/**
 * Timer controls
 */

El.startButton.addEventListener('click', TimerComponent.timerController.start);
El.stopButton.addEventListener('click', () => TimerComponent.timerController.stop('button'));
