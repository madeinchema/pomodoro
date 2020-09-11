import { TimerComponent } from './Timer';
import { startButton, stopButton } from './Elements';

/**
 * Timer controls
 */

// Start
startButton.addEventListener('click', TimerComponent.timerController.start);

// Stop
stopButton.addEventListener('click', () =>
  TimerComponent.timerController.stop('button')
);
