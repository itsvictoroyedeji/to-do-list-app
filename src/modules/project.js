export default class Project {
  constructor({name, todos}) {
    this.name = name;
    this.todos = todos; // new Todos object
  }

  addTodo(todo) {
    this.todos.createTodo(todo); 
  }

  get getTodos() {
    return this.todos.todosList;
  }
  
}
