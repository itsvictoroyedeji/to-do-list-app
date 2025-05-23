import "./styles.css";
import User from "./modules/user.js";
import Project from "./modules/project.js";
import Todos from "./modules/todos.js";
import TodoFactory from "./modules/todo-factory.js";
// import ProjectsHomeList from "./pages/projects.js"

// ProjectsHomeList();

// 1. Get logic template right
// 2. Link elements to index.js (which is the main controller)

// const user1 = new User({
//   name: "Victor",
//   projects: [
//     new Project({
//       todos: new Todos(),
//     }),
//   ],
// });

// user1.addNewProject(
//   new Project({
//     name: "2nd project",
//     todos: new Todos(),
//   })
// );

// user1.addNewProject(
//   new Project({
//     name: "3rd project",
//     todos: new Todos(),
//   })
// );

// user1.projects[0].addTodo(
//   TodoFactory({
//     title: "First one",
//     description: "First description",
//   })
// );

// user1.projects[0].addTodo(
//   TodoFactory({
//     title: "Second one",
//     description: "Second description",
//     notes: "This is a note!",
//   })
// );

// // console.log(user1);
// // Remove a todo
// user1.deleteProject(1);
// // user1.projects[0].deleteTodo(0);

// console.log(user1);
// console.log(user1.projects[0].getTodos);

