interface Task {
  id: number;
  name: string;
  dueDate: string;
  completed: boolean;
}

let tasks: Task[] = [];

const taskForm = document.getElementById("taskForm") as HTMLFormElement;
const taskNameInput = document.getElementById("taskName") as HTMLInputElement;
const dueDateInput = document.getElementById("dueDate") as HTMLInputElement;
const taskList = document.getElementById("taskList") as HTMLUListElement;

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask(taskNameInput.value, dueDateInput.value);
  taskForm.reset();
});

function addTask(name: string, dueDate: string): void {
  const newTask: Task = {
    id: Date.now(),
    name,
    dueDate,
    completed: false,
  };
  tasks.push(newTask);
  saveTasks();
  renderTasks();
}

function toggleTask(id: number): void {
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  saveTasks();
  renderTasks();
}

function deleteTask(id: number): void {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks();
  renderTasks();
}

function saveTasks(): void {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks(): void {
  const data = localStorage.getItem("tasks");
  tasks = data ? JSON.parse(data) : [];
}

function renderTasks(): void {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    if (task.completed) li.classList.add("completed");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => toggleTask(task.id));

    const span = document.createElement("span");
    span.textContent = `${task.name} (Due: ${task.dueDate})`;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => deleteTask(task.id));

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}

loadTasks();
renderTasks();
