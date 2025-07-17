
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");

  li.innerHTML = `
    <span onclick="toggleComplete(this)">${taskText}</span>
    <button onclick="removeTask(this)">Delete</button>
  `;

  taskList.appendChild(li);
  taskInput.value = "";
  saveTasks();
}


function toggleComplete(span) {
  span.parentElement.classList.toggle("completed");
  saveTasks();
}


function removeTask(button) {
  button.parentElement.remove();
  saveTasks();
}


function saveTasks() {
  const tasks = document.getElementById("taskList").innerHTML;
  localStorage.setItem("tasks", tasks);
}


window.onload = function () {
  const tasks = localStorage.getItem("tasks");
  if (tasks) {
    document.getElementById("taskList").innerHTML = tasks;
  }
};
