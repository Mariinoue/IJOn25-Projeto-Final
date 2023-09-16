class List {
  todoItems;
  constructor() {
    this.todoItems = [];
  }

  addTodoItem(todoItem) {
    this.todoItems.push(todoItem);
  }

  removeTodoItem(todoItem) {
    this.todoItems = this.todoItems.filter((word) => word !== todoItem);
  }

  getTodoItems() {
    return this.todoItems;
  }
}

const todoList = new List();

const todoListElement = document.getElementById("todo-list");
const newItemInput = document.getElementById("new-item");
const addButton = document.getElementById("add-button");

addButton.addEventListener("click", () => {
  const newItem = newItemInput.value.trim();
  if (newItem !== "") {
    todoList.addTodoItem(newItem);

    newItemInput.value = "";
    renderTodoList();
  }
});

todoListElement.addEventListener("click", (event) => {
  if (event.target.tagName === "LIXO") {
    const todoItem = event.target.previousSibling.textContent;
    todoList.removeTodoItem(todoItem);
  }
});

function renderTodoList() {
  todoListElement.innerHTML = "";
  const todoItems = todoList.getTodoItems();
  todoItems.forEach((todoItem) => {
    const li = document.createElement("li");
    li.textContent = todoItem;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "LIXO";
    li.appendChild(deleteButton);
    todoListElement.appendChild(li);
  });
}

renderTodoList();

class PomodoroTimer {
  constructor(workDuration, breakDuration) {
    this.workDuration = workDuration;
    this.breakDuration = breakDuration;
    this.interval = null;
    this.seconds = workDuration * 60;
    this.isWorking = true;
  }

  start() {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.tick();
      }, 1000);
    }
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
  }

  reset() {
    this.stop();
    this.seconds = this.isWorking
      ? this.workDuration * 60
      : this.breakDuration * 60;
    this.updateDisplay();
  }

  tick() {
    if (this.seconds > 0) {
      this.seconds--;
      this.updateDisplay();
    } else {
      this.isWorking = !this.isWorking;
      this.seconds = this.isWorking
        ? this.workDuration * 60
        : this.breakDuration * 60;
      this.updateDisplay();
    }
  }

  updateDisplay() {
    const timerDisplay = document.getElementById("timer-display");
    timerDisplay.textContent = `${
      this.isWorking ? "Foco" : "Break"
    } Time: ${this.formatTime(this.seconds)}`;
  }

  formatTime(seconds) {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const remainingSeconds = (seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${remainingSeconds}`;
  }
}
