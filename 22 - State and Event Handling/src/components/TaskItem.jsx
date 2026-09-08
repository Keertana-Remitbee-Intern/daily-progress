function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li
      className={`todo-item ${
        task.completed ? "completed" : ""
      }`}
    >
      <button
        type="button"
        className="complete-button"
        onClick={() => onToggle(task.id)}
      >
        {task.completed ? "✓" : ""}
      </button>

      <span className="task-text">
        {task.name}
      </span>

      <button
        type="button"
        className="delete-button"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;