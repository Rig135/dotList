import { Project } from "./addProject.js";
import { saveProjects } from "./storage.js";

let currentIndex = null;
let currentProject = null;

const deleteBtn = document.querySelector('.DeleteTodo');
const delTodoDialog = document.querySelector('#deleteTodoConfirm');

deleteBtn.addEventListener('click',()=>{
  if(currentIndex!=null && currentProject!=null){
    //remove todo from correct array
    Project[currentProject].splice(currentIndex,1);
    saveProjects();

    renderTodo(Project[currentProject],currentProject);

    //reset
    currentIndex = null;
    currentProject=null;

    delTodoDialog.close();

  }
})

export default function renderTodo(array,projectName) {
  const container = document.querySelector("#displayTodo");
  container.innerHTML = "";
  const para = document.createElement('p');
  para.textContent = `${projectName}`;
  para.classList.add('projectName');
  container.appendChild(para);

  array.forEach((item,index)=>{

    // console.log(item);
    
    const date = document.createElement("p");
    date.classList.add('todoDate');

    const d = new Date(item.dueDate);
    const formatted = d.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "2-digit",
    });

    date.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg> ${formatted}`;
    container.appendChild(date);


    const div = document.createElement("div");
    div.classList.add("todoBox");
    
    // checkbox
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.classList.add('checkBox');
    const todoContent = document.createElement('div');
    const todoTitle = document.createElement('p');
    const todoDesc = document.createElement('p');
    const due = document.createElement('div');
    const priority = document.createElement('div');
    const view = document.createElement('div');

    if (item.completed) {
      checkBox.checked = true;

      todoContent.classList.add('completed');
      todoContent.classList.add('completedOpacity');
      due.classList.add('completedOpacity');
      view.classList.add('completedOpacity');
      priority.classList.add('completedOpacity');
    }


    checkBox.addEventListener('change',()=>{
      item.completed = checkBox.checked;
      saveProjects();
      
      if(item.completed){

        todoContent.classList.add('completed');
        todoContent.classList.add('completedOpacity');
        due.classList.add('completedOpacity');
        view.classList.add('completedOpacity');
        priority.classList.add('completedOpacity');
      }
      else{
        todoContent.classList.remove('completed');
        due.classList.remove('completedOpacity');
        priority.classList.remove('completedOpacity');
        todoContent.classList.remove('completedOpacity');
        view.classList.remove('completedOpacity');
      }
    })
    
    div.appendChild(checkBox);

    //todo title and description
    
    todoTitle.style.fontSize = '20px';
    todoTitle.textContent = item.title;

    todoContent.classList.add('TodoContent');
    todoContent.appendChild(todoTitle);

    
    todoDesc.textContent = item.description;
    todoContent.appendChild(todoDesc);

    div.appendChild(todoContent);


    

    //due Date element
    
    due.textContent = `📅 Due: ${item.dueDate}`;
    due.classList.add('dueDate');

    div.appendChild(due);

    // priority element
    
    priority.textContent = item.priority;
    
    if(item.priority == "High"){
      priority.classList.add('High');
    }
    else if(item.priority == 'Medium'){
      priority.classList.add('Medium');
    }
    else {
      priority.classList.add('Low');
    }

    div.appendChild(priority);

    // view todo
    
    view.textContent = '👁️';
    view.classList.add('view');

    view.addEventListener('click',()=>{
      const dialog = document.querySelector('#viewDialog');

      document.querySelector('#viewTitle').textContent = item.title;
      document.querySelector('#viewDesc').textContent = item.description;
      document.querySelector('#viewProject').textContent = item.project;
      document.querySelector('#viewPriority').textContent = item.priority;
      document.querySelector('#viewDueDate').textContent = item.dueDate;
      const status = document.querySelector('#viewStatus');

    
      if(item.completed == false){
        status.textContent = 'Pending';
      }
      else{
        status.textContent = 'Completed';
      }



      dialog.showModal();

    })

    div.appendChild(view);
    
    //delete Todo
    const deleteTodo = document.createElement('div');
    deleteTodo.textContent = '✕';
    deleteTodo.classList.add('deleteTodo');

    deleteTodo.addEventListener('click',()=>{
      const delTodoDialog = document.querySelector('#deleteTodoConfirm');

      // storing which todo to delete
      currentIndex = index;
      currentProject = projectName;

      delTodoDialog.showModal();
    })

    div.appendChild(deleteTodo);





    container.appendChild(div);
  })
}
