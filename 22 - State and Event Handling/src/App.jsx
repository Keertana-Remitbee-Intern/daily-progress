import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TaskList from "./components/TaskList";
import EmptyState from "./components/EmptyState";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  // Add a new task
  const handleSubmit = (event) => {
    event.preventDefault();
    const taskName = input.trim();

    if (taskName === "") {
      setInputMessage("Please enter a task.");
      return;
    }

    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false
    };

    setTasks((prevTasks) => [
      ...prevTasks,
      newTask
    ]);

    setInput("");
    setInputMessage("");
  };

  // Handle input changes
  const handleInputChange = (event) => {
    setInput(event.target.value);

    if (event.target.value.trim() !== "") {
      setInputMessage("");
    }
  };

  // Complete / uncomplete a task
  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed
            }
          : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter(
        (task) => task.id !== id
      )
    );
  };

  // Calculate remaining tasks
  const remainingTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  return (
    <main className="todo-app">

      <div className="app-header">
        <p className="small-title">
          TASK MANAGER
        </p>

        <h1>My Tasks</h1>

        <p className="subtitle">
          Stay organized and get things done.
        </p>
      </div>

      <TodoForm
        input={input}
        inputMessage={inputMessage}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />

      <div className="task-info">
        <h2>Today's Tasks</h2>

        <span>
          {remainingTasks}{" "}
          {remainingTasks === 1 ? "task" : "tasks"} remaining
        </span>
      </div>

      {tasks.length === 0 && <EmptyState />}

      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />

    </main>
  );
}

export default App;