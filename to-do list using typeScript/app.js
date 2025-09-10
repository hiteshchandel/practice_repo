var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var tasks = [];
var taskForm = document.getElementById("taskForm");
var taskNameInput = document.getElementById("taskName");
var dueDateInput = document.getElementById("dueDate");
var taskList = document.getElementById("taskList");
taskForm.addEventListener("submit", function (e) {
    e.preventDefault();
    addTask(taskNameInput.value, dueDateInput.value);
    taskForm.reset();
});
function addTask(name, dueDate) {
    var newTask = {
        id: Date.now(),
        name: name,
        dueDate: dueDate,
        completed: false,
    };
    tasks.push(newTask);
    saveTasks();
    renderTasks();
}
function toggleTask(id) {
    tasks = tasks.map(function (task) {
        return task.id === id ? __assign(__assign({}, task), { completed: !task.completed }) : task;
    });
    saveTasks();
    renderTasks();
}
function deleteTask(id) {
    tasks = tasks.filter(function (task) { return task.id !== id; });
    saveTasks();
    renderTasks();
}
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function loadTasks() {
    var data = localStorage.getItem("tasks");
    tasks = data ? JSON.parse(data) : [];
}
function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach(function (task) {
        var li = document.createElement("li");
        if (task.completed)
            li.classList.add("completed");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", function () { return toggleTask(task.id); });
        var span = document.createElement("span");
        span.textContent = "".concat(task.name, " (Due: ").concat(task.dueDate, ")");
        var delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", function () { return deleteTask(task.id); });
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(delBtn);
        taskList.appendChild(li);
    });
}
loadTasks();
renderTasks();
