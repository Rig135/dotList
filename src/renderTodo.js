export default function renderTodo(array,projectName) {
  const container = document.querySelector("#displayTodo");
  container.innerHTML = "";
  const para = document.createElement('p');
  para.textContent = `${projectName}`;
  para.classList.add('projectName');
  container.appendChild(para);

  for (let item of array) {

    console.log(item);
    
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
    div.appendChild(checkBox);

    //todo title and description
    const todoContent = document.createElement('div');
    const todoTitle = document.createElement('p');
    todoTitle.style.fontSize = '20px';
    todoTitle.textContent = item.title;

    todoContent.classList.add('TodoContent');
    todoContent.appendChild(todoTitle);

    const todoDesc = document.createElement('p');
    todoDesc.textContent = item.description;
    todoContent.appendChild(todoDesc);

    div.appendChild(todoContent);

    //due Date element
    const due = document.createElement('div');
    due.textContent = `📅 Due: ${item.dueDate}`;
    due.classList.add('dueDate');

    div.appendChild(due);

    // priority element
    const priority = document.createElement('div');
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
    
    container.appendChild(div);
  }
}
