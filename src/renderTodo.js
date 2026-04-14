import { Project } from "./addProject.js";

let currentIndex = null;
let currentProject = null;

const deleteBtn = document.querySelector('.DeleteTodo');
const delTodoDialog = document.querySelector('#deleteTodoConfirm');

deleteBtn.addEventListener('click',()=>{
  if(currentIndex!=null && currentProject!=null){
    //remove todo from correct array
    Project[currentProject].splice(currentIndex,1);

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

    const d = new Date(item.dueDate);
    const formatted = d.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "2-digit",
    });

    date.textContent = formatted;
    container.appendChild(date);


    const div = document.createElement("div");
    div.classList.add("todoBox");
    
    // checkbox
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
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
