Kanban Task Board
Why the code is split into render/storage/dragdrop modules
render.js → Handles only DOM rendering. Keeps the UI logic separate so updates to the interface don’t affect data handling.
storage.js → Manages task data (create, delete, load, save). This separation ensures that data logic is clean, testable, and independent of the UI.
dragdrop.js → Encapsulates drag-and-drop behavior. By isolating this feature, the code becomes easier to debug and extend without touching unrelated logic.

This modular approach makes the project easier to maintain, test, and scale.

How DOM updates avoid full re-renders
Instead of re-rendering the entire board, only the affected column is updated: When a task is added → only the “To Do” column is re-rendered.
When a task moves between columns → only the source and target columns are re-rendered.
When a task is deleted → only that column is updated.

This ensures faster updates and a smoother user experience compared to clearing and rebuilding the whole board every time.

Next Feature Proposal
Task Editing (Inline Updates)
Currently, tasks can only be created, dragged, or deleted. The next logical improvement is allowing inline editing of task titles and priorities.

How to implement:
Make task titles contenteditable (or show an edit button).
On blur (or Enter key), save changes back to storage.js.
Re-render only that column to reflect the updated task data.

This would make the board more dynamic and reduce the need to delete + recreate tasks just to fix small mistakes.
