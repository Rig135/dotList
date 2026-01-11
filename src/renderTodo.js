export default function renderTodo(array) {
  const container = document.querySelector("#displayTodo");
  container.innerHTML = "";

  for (let item of array) {
    const para = document.createElement("para");
    para.innerHTML = `${item.title}  <br>  ${item.description}`;
    container.appendChild(para);
  }
}
