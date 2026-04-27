"use strict";

console.log("Практична 4 запущена");

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.querySelector("#addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", addTask);

function addTask() {
    const text = taskInput.value.trim();

    if (!text) {
        console.log("Порожнє поле");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = text;

    const actions = document.createElement("div");
    actions.className = "task-actions";

    const doneButton = document.createElement("button");
    doneButton.textContent = "✓";
    doneButton.className = "done-btn";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑";
    deleteButton.className = "delete-btn";

    actions.appendChild(doneButton);
    actions.appendChild(deleteButton);

    li.appendChild(span);
    li.appendChild(actions);

    taskList.appendChild(li);

    console.log("Додано завдання:", text);

    taskInput.value = "";
}

taskList.addEventListener("click", function(event) {
    const clickedElement = event.target;

    if (clickedElement.classList.contains("done-btn")) {
        const taskItem = clickedElement.closest("li");
        taskItem.classList.toggle("completed");
        console.log("Змінено статус завдання:", taskItem.textContent);
    }

    if (clickedElement.classList.contains("delete-btn")) {
        const taskItem = clickedElement.closest("li");
        console.log("Видалено завдання:", taskItem.textContent);
        taskItem.remove();
    }
});

taskList.addEventListener("click", function(event) {
    console.log("Фаза захоплення:", event.target);
}, true);
