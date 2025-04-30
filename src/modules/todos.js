export default class Todos {
  constructor(todosList) {
    this.todosList = todosList || this.initialTodos;
  }
  
  get initialTodos() {
    return [];
  }

  createTodo(todo) {
    this.todosList.push(todo);
  }

}
