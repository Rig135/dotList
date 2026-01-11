import List from "./List.js";
import renderTodo from "./renderTodo.js";
// import CreateProjects, { Project } from "./addProject.js";

export default function addTodo(Project) {
  const Modal = document.querySelector("#myDialog");
  const AddTodoButton = document.querySelector("#AddTodo");
  const form = document.querySelector("#todoForm");
  const cancelButton = document.querySelector("#cancel");

  //open modal
  AddTodoButton.addEventListener("click", () => {
    Modal.showModal();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    //reading values from form to create a toDo
    const { Title, Description, DueDate, Priority, project } = e.target.elements;

    const todo = new List(
      Title.value,
      Description.value,
      DueDate.value,
      Priority.value,
      project.value
    );

    // pushing todo into its Project array
    Project[project.value].push(todo);
    renderTodo(Project[project.value]);

    form.reset();
    Modal.close();
  });

  cancelButton.addEventListener("click", () => {
    form.reset();
    Modal.close();
  });
}
