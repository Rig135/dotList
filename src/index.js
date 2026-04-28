import addTodo from "./addTodo.js";
import renderProjects from "./renderProjects.js";
import { Project, CreateProjects } from "./addProject.js";
// const todos = [];

//Adding Project Dialog Box DOM
const addProject = document.querySelector('#addProject');
const projectDialog = document.querySelector('#projectDialog');

const createProject =  document.querySelector('#createProject');
const closeDialog = document.querySelector('#cancelProject');
const projectName = document.querySelector('#projectName');

const closeProject = document.querySelector('.closeProject');
addProject.addEventListener('click',()=>{

  projectDialog.showModal();
  projectName.focus();
})

createProject.addEventListener('click',()=>{
    const input = projectName.value.trim();
    if(!input){
      alert('Please Enter a Project Name');
      return;
    }
    CreateProjects(input);
    renderProjects();
    projectDialog.close();


    projectName.value = "";
})

closeDialog.addEventListener('click',()=>{
    projectDialog.close();
})

closeProject.addEventListener('click',()=>{
  projectDialog.close();
})

//Create Todo dialog box DOM
const todoDialogClose = document.querySelector('.closeTodoDialog');
const todoDialog = document.querySelector('#myDialog');
todoDialogClose.addEventListener('click',()=>{
  todoDialog.close();
})
  

//View Todo List Dialog Box DOM
const viewDialog = document.querySelector('#viewDialog');
const closeBtns = document.querySelectorAll('.closeView');

closeBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    viewDialog.close();
  });
});

//Delete Todo list Dialog Box DOM
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

