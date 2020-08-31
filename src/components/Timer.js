import El from './Elements';

/**
 * Timer
 * @constructor
 */

function Timer() {
  /**
   * Default timer values
   */
  this.defaultTimerValues = {
    workTime: 25,
    shortBreak: 5,
    longBreak: 15,
    longBreakInterval: 4,
  };

  /**
   * Timer initial state
   */
  let countdownInterval;
  this.timerState = 'stopped';
  this.currentSession = 'workTime';
  this.sessionCounter = {
    session: 0,
    shortBreak: 0,
    longBreak: 0,
  };
  this.time = parseInt(localStorage.workTime) * 60; // Initial countdown time (expressed in seconds)

  /**
   * Timer Element Controller
   */
  this.timerController = {
    // Countdown handler:
    // Runs the timer, keeps the timerElement updated, and handles its completion.
    countdown: () => {
      countdownInterval = setInterval(() => {
        this.time--;
        this.timeHandler.format();

        if (this.time === 0) {
          this.timerController.stop();
        }
      }, 1000); // TODO Remember to change this value for production
    },

    // Start method:
    // Handles the play/pause behavior of the startButton on the countdown based on timerState.
    start: () => {
      if (this.timerState === 'stopped' || this.timerState === 'paused') {
        this.timerController.countdown();
        this.timerController.setState('active');
      } else {
        this.timerController.pause();
        this.timerController.setState('paused');
      }
    },

    // Pause method:
    // Stops the timer and changes the state to 'paused'
    pause: () => {
      clearInterval(countdownInterval);
      this.timerController.setState('paused');
    },

    // Stop method:
    // Stops the timer, changes the state to 'stopped', and resets the timer using the timeHandler option.
    stop: (option) => {
      const priorState = this.timerState;
      // Stop button: If timer wasn't started, ask confirmation and handle accordingly.
      if (option === 'button') {
        if (priorState !== 'stopped') {
          const stopConfirmation = confirm(
            'Are you sure you want to stop the timer?'
          );
          if (stopConfirmation) {
            this.sessionHandler.stop();
          } else {
            return this.timerController.setState('paused');
          }
        }
      } else {
        // Otherwise trigger alert notification and switch to next session
        setTimeout(() => {
          const session =
            this.currentSession === 'workTime' ? 'Break' : 'Session';
          alert(`${session} completed!`);
        }, 50); // Alert notification and "00:01 issue" fix
        this.currentSession === 'workTime'
          ? El.audioEndSession.play()
          : El.audioEndBreak.play(); // Audio notification
        this.sessionHandler.next();
      }
      // Reset timer, update startButton's text and update timer's time.
      clearInterval(countdownInterval);
      this.timerController.setState('stopped');
      this.timeHandler.format();
    },

    // Element State Handler:
    setState: (newState) => {
      // Changes start/pause/resume button texts' and handles timerState accordingly
      if (newState === 'active') {
        this.timerState = 'active';
        El.startButton.innerText = 'Pause';
      } else if (newState === 'paused') {
        this.timerState = 'paused';
        El.startButton.innerText = 'Resume';
      } else if (newState === 'stopped') {
        this.timerState = 'stopped';
        El.startButton.innerText = 'Start';
      }
      // Changes favicon depending on currentSession and timerState
      El.faviconElement.setAttribute(
        'href',
        `assets/img/icons/${this.currentSession}-${this.timerState}.png`
      );
    },

    // Update method:
    // Updates the timer with new settings from localStorage
    update: (option) => {
      const sessionNames = Object.keys(this.defaultTimerValues);
      const defaultValues = Object.values(this.defaultTimerValues);

      if (option === 'start') {
        // Local storage with default values from start for new sessions
        for (let i = 0; i < sessionNames.length; i++) {
          !localStorage.getItem(sessionNames[i]) &&
            localStorage.setItem(sessionNames[i], defaultValues[i].toString());
        }
        // Starts the user session with the timer using values from localStorage
        sessionNames.forEach(
          (item) => (El[item].value = parseInt(localStorage.getItem(item)))
        );
      }

      // Update localStorage values to match those of the settings and update timer with them
      sessionNames.forEach((item) =>
        localStorage.setItem(item, El[item].value.toString())
      );
      setTimeout(() => this.timeHandler.format(), 25); // TODO use an asynchronous solution
      this.timeHandler.update();
    },
  };

  /**
   * Session handler
   */
  this.sessionHandler = {
    // Resets the current timer iteration without changing the session's state.
    stop: () => {
      this.currentSession === 'workTime' && this.timeHandler.set('workTime');
      this.currentSession === 'shortBreak' &&
        this.timeHandler.set('shortBreak');
      this.currentSession === 'longBreak' && this.timeHandler.set('longBreak');
      this.timeHandler.update();
    },

    // Sets the current session to whichever comes next
    next: () => {
      if (this.currentSession === 'workTime') {
        this.sessionCounter.session++;
        this.sessionCounter.session %
          parseInt(localStorage.longBreakInterval) ===
        0
          ? this.sessionHandler.set('longBreak')
          : this.sessionHandler.set('shortBreak');
      } else if (this.currentSession === 'shortBreak') {
        this.sessionCounter.shortBreak++;
        this.currentSession = 'workTime';
      } else if (this.currentSession === 'longBreak') {
        this.sessionCounter.longBreak++;
        this.currentSession = 'workTime';
      }
      this.timeHandler.update();
    },

    // Sets the current session to that of the argument passed
    set: (newSessionState) => {
      if (newSessionState === 'workTime') {
        this.currentSession = 'workTime';
      } else if (newSessionState === 'shortBreak') {
        this.currentSession = 'shortBreak';
      } else if (newSessionState === 'longBreak') {
        this.currentSession = 'longBreak';
      }
      this.timeHandler.update();
    },
  };

  /**
   * Time display handler
   */
  this.timeHandler = {
    // Update the timer based on the sessionState argument
    set: (sessionState) => {
      if (sessionState === 'workTime') {
        this.time = parseInt(localStorage.workTime) * 60;
      } else if (sessionState === 'shortBreak') {
        return (this.time = parseInt(localStorage.shortBreak) * 60);
      } else if (sessionState === 'longBreak') {
        return (this.time = parseInt(localStorage.longBreak) * 60);
      }
    },

    // Updates the timerElement and sessionStatus element based on the currentSession
    update: () => {
      if (this.currentSession === 'workTime') {
        this.timeHandler.set('workTime');
        El.sessionStatus.innerText = 'Work Time';
      } else if (this.currentSession === 'shortBreak') {
        this.timeHandler.set('shortBreak');
        El.sessionStatus.innerText = 'Short Break';
      } else if (this.currentSession === 'longBreak') {
        this.timeHandler.set('longBreak');
        El.sessionStatus.innerText = 'Long Break';
      }
    },

    // Update the timer element and page title to reflect the correct format
    format: () => {
      const formattedTime = () => {
        return (
          Math.floor(this.time / 60) +
          (this.time % 60 < 10 ? ':0' : ':') +
          (this.time % 60)
        );
      };
      // Update the timer element
      El.timerElement.innerText = formattedTime();
      // Update the page title
      El.pageTitleElement.innerText = `${formattedTime()} ${El.pageTitle}`;
    },
  };
}

// Initialize the Timer
export const TimerComponent = new Timer();

// Set values for the timer
TimerComponent.timerController.update('start');

// Set initial state of the timerElement
TimerComponent.timeHandler.update();
