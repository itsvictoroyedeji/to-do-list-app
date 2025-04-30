import "./styles.css";
import User from "./modules/user.js"
import Project from "./modules/project.js";
import Todos from "./modules/todos.js";
import TodoFactory from "./modules/todo-factory.js";

const user1 = new User({
  name: "Victor",
  projects: [
    new Project({
      todos: new Todos()
    })
  ]
})

console.log(user1);

user1.addNewProject(
   new Project({
     name: "2nd project",
     todos: new Todos()
   })
);
console.log(user1);

user1.projects[0].addTodo(
  TodoFactory({
        title: "First one", 
        description: "First description"
      })
)

user1.projects[0].addTodo(
  TodoFactory({
        title: "Second one", 
        description: "Second description",
        notes: "This is a note!"
      })
)

console.log(user1);
console.log(user1.getListOfProjects[0].getTodos);
