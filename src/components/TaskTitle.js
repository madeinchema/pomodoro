import El from './Elements';

/**
 * Task title:
 * Uses localStorage to save and use the value when the user focuses outside the input field
 */

class TaskTitle {
  // Handles the task title behavior
  taskTitleHandler(event, option) {
    // Sets title when initialized
    if (option === 'start') {
      // Sets <br> to fix the non-centered cursor
      return !localStorage.getItem('title') ? localStorage.setItem('title', El.taskTitleInput.innerText) : '';
    }

    // Handles font size
    event.target.innerText.length > 60
      ? El.taskTitleInput.style.fontSize = "1.5em"
      : El.taskTitleInput.style.fontSize = "1.8em";

    // Saves input value to localStorage
    setTimeout(() => localStorage.setItem('title', El.taskTitleInput.innerText), 25);
  }
}

// Initialize component
const TaskTitleComponent = new TaskTitle();
TaskTitleComponent.taskTitleHandler(null, 'start');

// Listen for keystrokes and add behavior
El.taskTitleInput.addEventListener('keydown', (event) => TaskTitleComponent.taskTitleHandler(event));

// Initialize with title from localStorage
El.taskTitleInput.innerText = localStorage.getItem('title');

// Initialize with autofocus on task title
localStorage.getItem('title') == false && El.taskTitleInput.focus();
