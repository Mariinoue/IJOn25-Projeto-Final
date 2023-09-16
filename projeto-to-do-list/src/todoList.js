 export  default class List {
  todoItems;
  constructor() {
    this.todoItems = [];
  }

  addTodoItem(todoItem) {
    this.todoItems.push(todoItem);
    console.table("todoItem populando array", this.todoItems);
  }

  removeTodoItem(todoItem) {
    this.todoItems = this.todoItems.filter((word) => word !== todoItem);
  }

  getTodoItems() {
    console.table("getTodoItems", this.todoItems);
    return this.todoItems;
  }
}


const listinha = new List();

listinha.addTodoItem("Banho e tosa");
listinha.addTodoItem("Banho e tosa");
listinha.addTodoItem("Banho e tosa");
listinha.addTodoItem("Banho e tosa");

listinha.getTodoItems();

listinha.removeTodoItem("Banho e tosa");
listinha.removeTodoItem("Banho e tosa");
listinha.removeTodoItem("Banho e tosa");
listinha.removeTodoItem("Banho e tosa");
