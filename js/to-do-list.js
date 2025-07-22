let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
  var list = document.getElementById("taskList");
  list.innerHTML = "";

  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    var listItem = document.createElement("li");
    if (task.completed === true) {
      listItem.className = "completed";
    }
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.onclick = (function(index) {
      return function() {
        toggleTask(index);
      };
    })(i);
    var taskText = document.createElement("span");
    taskText.textContent = task.text;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.onclick = (function(index) {
      return function() {
        deleteTask(index);
      };
    })(i);

    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
  }
}
function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  if (taskText === '') return;

  var newTask = {text: taskText,completed: false};
  tasks.push(newTask);
  input.value = '';
  saveTasks();
  renderTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

renderTasks();
