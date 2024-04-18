const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value === "") return;
  const li = document.createElement("li");
  li.innerHTML = `<span>${input.value}</span><button class="remove">Remove</button>`;
  list.appendChild(li);
  input.value = "";
  saveTodos();
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    e.target.parentElement.remove();
    saveTodos();
  }
});

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(list.children));
}

function loadTodos() {
  const todos = JSON.parse(localStorage.getItem("todos"));
  if (!todos) return;
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.innerHTML = todo.innerHTML;
    list.appendChild(li);
  });
}

loadTodos();