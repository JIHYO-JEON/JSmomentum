const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  // JSON.stringify(nn) <- let nn be string
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //put toDos array in the local storage
}

function deleteToDo(event) {
  const li = event.target.parentElement; // find the parent(will be deleted)
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const button = document.createElement("button");
  button.innerText = "❌";
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  button.addEventListener("click", deleteToDo);
  li.appendChild(button);
  li.appendChild(span);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault(); // Prevent refresh
  const newTodo = toDoInput.value; // Copy the input value
  toDoInput.value = ""; // and empty it
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; //restore todo list
  parsedToDos.forEach(paintToDo);
}