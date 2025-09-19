import { updateTaskStatus } from "./storage.js";
import { renderColumn } from "./render.js";

export function setupDragDrop() {
  document.querySelectorAll(".dropzone").forEach(zone => {
    zone.addEventListener("dragover", e => e.preventDefault());

    zone.addEventListener("drop", e => {
      e.preventDefault();
      const id = e.dataTransfer.getData("text/plain");
      if (!id) return;

      updateTaskStatus(id, zone.id);
      renderColumn(zone.id);
    });
  });

  document.addEventListener("dragstart", e => {
    if (e.target.classList.contains("task")) {
      e.dataTransfer.setData("text/plain", e.target.dataset.id);
      e.target.classList.add("dragging");
    }
  });

  document.addEventListener("dragend", e => {
    if (e.target.classList.contains("task")) {
      e.target.classList.remove("dragging");
    }
  });
}