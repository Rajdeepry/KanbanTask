import { deleteTask, getTasks } from "./storage.js";

const priorityOrder = { High: 1, Medium: 2, Low: 3 };

export function renderColumn(status) {
  const zone = document.getElementById(status);
  zone.innerHTML = "";

  let columnTasks = getTasks()
    .filter(t => t.status === status)
    .sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  columnTasks.forEach(task => {
    const div = document.createElement("div");
    div.className = "task";
    div.textContent = `${task.title} (${task.priority})`;
    div.draggable = true;
    div.dataset.id = task.id;

    const btn = document.createElement("button");
    btn.textContent = "x";
    btn.onclick = () => {
      deleteTask(task.id);
      renderColumn(status);
    };
    div.appendChild(btn);

    zone.appendChild(div);
  });
}

export function renderBoard() {
  ["todo", "inprogress", "done"].forEach(renderColumn);
}