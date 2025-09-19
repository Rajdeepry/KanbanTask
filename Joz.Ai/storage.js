let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

export function createTask(title, priority) {
  return {
    id: crypto.randomUUID(),   
    title,
    priority,
    status: "todo"
  };
}

export function addTask(task) {
  tasks.push(task);
  save();
}

export function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id); 
  save();
}

export function updateTaskStatus(id, newStatus) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.status = newStatus;
    save();
  }
}

export function getTasks() {
  return [...tasks];
}

function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}