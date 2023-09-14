 export  default class List {
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

//module.exports = List;
// const listinha = new List();

// listinha.addTodoItem("Banho e tosa");
// listinha.addTodoItem("Banho e tosa");
// listinha.addTodoItem("Banho e tosa");
// listinha.addTodoItem("Banho e tosa");

// listinha.getTodoItems();

// listinha.removeTodoItem("Banho e tosa");
// listinha.removeTodoItem("Banho e tosa");
// listinha.removeTodoItem("Banho e tosa");
// listinha.removeTodoItem("Banho e tosa");
