export default function renderTodo(todos) {
  const container = document.querySelector("h2");
  container.innerHTML = "";

  for (let todo of todos) {
    const li = document.createElement("li");
    li.innerHTML = `${todo.title}  <br>  ${todo.description}`;
    container.appendChild(li);
  }
}
