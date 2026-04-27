import addTodo from "./addTodo.js";
import renderProjects from "./renderProjects.js";
import { Project, CreateProjects } from "./addProject.js";
// const todos = [];


const addProject = document.querySelector('#addProject');
const projectDialog = document.querySelector('#projectDialog');

const createProject =  document.querySelector('#createProject');
const closeDialog = document.querySelector('#cancelProject');
const projectName = document.querySelector('#projectName');
addProject.addEventListener('click',()=>{

  projectDialog.showModal();
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

