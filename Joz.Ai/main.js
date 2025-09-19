import { createTask, addTask } from "./storage.js";
import { renderBoard } from "./render.js";
import { setupDragDrop } from "./dragdrop.js";

const form = document.getElementById("taskForm");
const input = document.getElementById("taskTitle");
const select = document.getElementById("taskPriority");

form.onsubmit = e => {
  e.preventDefault();
  const task = createTask(input.value, select.value);
  addTask(task);
  input.value = "";
  renderBoard();
};

renderBoard();
setupDragDrop();