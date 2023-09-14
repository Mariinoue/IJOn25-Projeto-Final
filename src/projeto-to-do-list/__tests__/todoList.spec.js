import  List  from "../src/todoList.js";

describe('List', () => {
  let todoList;

  beforeEach(() => {
    todoList = new List();
  });

  it('should add an item to the list', () => {
    todoList.addTodoItem('Fazer o Projeto final');
    expect(todoList.getTodoItems()).toEqual(['Fazer o Projeto final']);
  });

  it('should remove an item from the list', () => {
    todoList.addTodoItem('Fazer o Projeto final');
    todoList.removeTodoItem('Fazer o Projeto final');
    expect(todoList.getTodoItems()).toEqual([]);
  });

  it('should return the list of items', () => {
    todoList.addTodoItem('Fazer o Projeto final');
    todoList.addTodoItem('Clean the house');
    expect(todoList.getTodoItems()).toEqual(['Fazer o Projeto final', 'Clean the house']);
  });
});




