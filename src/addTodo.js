import List from './List.js';
import renderTodo from './renderTodo.js';

export default function addTodo(todos){
    const Modal = document.querySelector('#myDialog');
    const AddTodoButton = document.querySelector('#AddTodo');
    const form = document.querySelector('#todoForm');
    const cancelButton = document.querySelector('#cancel');

    //open modal
    AddTodoButton.addEventListener('click',()=>{
        Modal.showModal();
    })

    form.addEventListener('submit',(e)=>{
        e.preventDefault();

        if(!form.checkValidity()){
            form.reportValidity();
            return;
        }

        //reading values from form to create a toDo
        const {Title , Description, DueDate, Priority} = e.target.elements;

        const todo = new List(Title.value , Description.value, DueDate.value, Priority.value);

        todos.push(todo);
        renderTodo(todos);

        form.reset();
        Modal.close();
        
    })
    
    cancelButton.addEventListener('click',()=>{
        form.reset();
        Modal.close();
    })

}