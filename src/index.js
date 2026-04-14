import addTodo from "./addTodo.js";
import renderProjects from "./renderProjects.js";
import { Project } from "./addProject.js";
// const todos = [];


const viewDialog = document.querySelector('#viewDialog');
const closeBtns = document.querySelectorAll('.closeView');

closeBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    viewDialog.close();
  });
});

const delTodo = document.querySelector('#deleteTodoConfirm')
const closeDelBtns = document.querySelectorAll('.closeDelTodo');

closeDelBtns.forEach((btn)=>{
  btn.addEventListener('click',()=>{
    delTodo.close();
  })
})

renderProjects();
addTodo(Project);

console.log(Project)

