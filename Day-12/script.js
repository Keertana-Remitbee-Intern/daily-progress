// Select HTML elements

const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const inputMessage = document.getElementById("inputMessage");
const taskCount = document.getElementById("taskCount");
const emptyState = document.getElementById("emptyState");

// Submit event

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskName = input.value.trim();
    if (taskName === "") {
        inputMessage.textContent = "Please enter a task.";
        return;
    }
    createTask(taskName);
    input.value = "";
    inputMessage.textContent = "";
    updateTaskCount();
    updateEmptyState();
});

// Input event

input.addEventListener("input", () => {
    if (input.value.trim() !== "") {
        inputMessage.textContent = "";
    }
});

// Create a new task

const createTask = (taskName, completed = false) => {

    // Create li
    const listItem = document.createElement("li");
    listItem.classList.add("todo-item");
    if (completed) {
        listItem.classList.add("completed");
    }

    // Create complete button
    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-button");
    completeButton.setAttribute("type", "button");

    // Create task text
    const taskText = document.createElement("span");
    taskText.classList.add("task-text");
    taskText.textContent = taskName;

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.setAttribute("type", "button");
    deleteButton.textContent = "Delete";

    // Complete task event
    completeButton.addEventListener("click", () => {
        listItem.classList.toggle("completed");
        completeButton.textContent =
            listItem.classList.contains("completed") ? "✓" : "";
        updateTaskCount();
    });

    // Delete task event
    deleteButton.addEventListener("click", () => {
        listItem.remove();
        updateTaskCount();
        updateEmptyState();
    });

    // Add elements to li
    listItem.append(
        completeButton,
        taskText,
        deleteButton
    );

    // Add li to ul
    todoList.appendChild(listItem);
};

// Update number of remaining tasks

const updateTaskCount = () => {
    const allTasks = document.querySelectorAll(".todo-item");
    const completedTasks =
        document.querySelectorAll(".todo-item.completed");
    const remainingTasks =
        allTasks.length - completedTasks.length;
    taskCount.textContent =
        `${remainingTasks} ${remainingTasks === 1 ? "task" : "tasks"} remaining`;
};

// Show or hide empty state

const updateEmptyState = () => {
    const allTasks = document.querySelectorAll(".todo-item");
    emptyState.style.display =
        allTasks.length === 0 ? "block" : "none";
};


