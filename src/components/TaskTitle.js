import El from './Elements';

/**
 * Task title:
 * Uses localStorage to save and use the value when the user focuses outside the input field
 */
class TaskTitle {
  constructor() {
  }

  taskTitleHandler(event, option) {
    if (option === 'start') {
      return !localStorage.getItem('title') ? localStorage.setItem('title', El.taskTitleInput.innerText) : ''; // Sets <br> to fix the non-centered cursor
    }

    event.target.innerText.length > 60
      ? El.taskTitleInput.style.fontSize = "1.5em"
      : El.taskTitleInput.style.fontSize = "1.8em";
    setTimeout(() => localStorage.setItem('title', El.taskTitleInput.innerText), 25);
  }
}

// Initialize component
const TaskTitleComponent = new TaskTitle();

El.taskTitleInput.addEventListener('keydown', (event) => TaskTitleComponent.taskTitleHandler(event));
TaskTitleComponent.taskTitleHandler(null, 'start');

El.taskTitleInput.innerText = localStorage.getItem('title'); // Get title on page load
localStorage.getItem('title') == false && El.taskTitleInput.focus(); // Autofocus on page load

