// Select HTML elements

var form = document.getElementById("todoForm");
var input = document.getElementById("todoInput");
var todoList = document.getElementById("todoList");
var inputMessage = document.getElementById("inputMessage");
var taskCount = document.getElementById("taskCount");
var emptyState = document.getElementById("emptyState");


// Submit event

form.addEventListener("submit", function(event) {

    event.preventDefault();
    var taskName = input.value.trim();
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

input.addEventListener("input", function() {
    if (input.value.trim() !== "") {
        inputMessage.textContent = "";
    }
});


// Create a new task

function createTask(taskName) {

    // Create li

    var listItem = document.createElement("li");
    listItem.classList.add("todo-item");

    // Create complete button

    var completeButton = document.createElement("button");
    completeButton.classList.add("complete-button");
    completeButton.setAttribute("type", "button");

    // Create task text

    var taskText = document.createElement("span");
    taskText.classList.add("task-text");
    taskText.textContent = taskName;

    // Create delete button

    var deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.setAttribute("type", "button");
    deleteButton.textContent = "Delete";

    // Complete task event

    completeButton.addEventListener("click", function() {

        listItem.classList.toggle("completed");
        if (listItem.classList.contains("completed")) {
            completeButton.textContent = "✓";
        }
        else {
            completeButton.textContent = "";
        }
        updateTaskCount();
    });

    // Delete task event

    deleteButton.addEventListener("click", function() {
        listItem.remove();
        updateTaskCount();
        updateEmptyState();
    });

    // Add elements to li

    listItem.appendChild(completeButton);
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);

    // Add li to ul

    todoList.appendChild(listItem);
}

// Update number of remaining tasks

function updateTaskCount() {
    var allTasks = document.querySelectorAll(".todo-item");
    var completedTasks = document.querySelectorAll(".todo-item.completed");
    var remainingTasks = allTasks.length - completedTasks.length;

    if (remainingTasks === 1) {
        taskCount.textContent = "1 task remaining";
    }
    else {
        taskCount.textContent = remainingTasks + " tasks remaining";
    }
}

// Show or hide empty state

function updateEmptyState() {
    var allTasks = document.querySelectorAll(".todo-item");
    if (allTasks.length === 0) {
        emptyState.style.display = "block";
    }
    else {
        emptyState.style.display = "none";
    }
}