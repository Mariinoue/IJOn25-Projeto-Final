  class List {
  todoItems;
  constructor() {
    this.todoItems = [];
  }

  addTodoItem(todoItem) {
    this.todoItems.push(todoItem);
    console.log("todoItem populando array", this.todoItems);
  }

  removeTodoItem(todoItem) {
    this.todoItems = this.todoItems.filter((word) => word !== todoItem);
    console.log("removendo todoItems");
    console.log("removendo", this.todoItems);
  }

  getTodoItems() {
    console.log("getTodoItems", this.todoItems);
    return this.todoItems;
  }
}

const todoList = new List();

const todoListElement = document.getElementById("todo-list");
const newItemInput = document.getElementById("new-item");
const addButton = document.getElementById("add-button");

addButton.addEventListener("click", () => {
  console.log("adicionado");
  const newItem = newItemInput.value.trim();
  if (newItem !== "") {
    todoList.addTodoItem(newItem);

    newItemInput.value = "";
    console.log("TodoIteminha - botao add TodoItem");
    renderTodoList();
  }
});

todoListElement.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const todoItem = event.target.previousSibling.textContent;
    todoList.removeTodoItem(todoItem);
    console.log("botao apagar TodoItem", todoItem);
  }
});

//  ------essa funçao vem da outra class
 function renderTodoList() {
  todoListElement.innerHTML = "";
  const todoItems = todoList.getTodoItems();
  todoItems.forEach((todoItem) => {
    const li = document.createElement("li");
    li.textContent = todoItem;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "BUTTON";
    li.appendChild(deleteButton);
    todoListElement.appendChild(li);
  });
}

renderTodoList();
