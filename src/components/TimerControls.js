import { TimerComponent } from './Timer';
import El from './Elements';

/**
 * Timer controls
 */

// Start
El.startButton.addEventListener('click', TimerComponent.timerController.start);

// Stop
El.stopButton.addEventListener('click', () =>
  TimerComponent.timerController.stop('button')
);
