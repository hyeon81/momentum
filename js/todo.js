const toDoform = document.getElementById("todo-form");
const toDoInput = toDoform.querySelector("input");
//== const toDoInput = toDoform.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list"); //ul
let toDos = []; //빈배열 만들어줌.
const TODOS_KEY = "todos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  //클릭된 button의 li가 뭔지 알 수 있음!
  li.remove(); //삭제
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  //parseInt = 문자열을 숫자로 바꿔줌
  //li.id는 string 타입, toDo.id는 number 타입.
  saveToDos(); //지운 배열 저장
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span); //li는 span이라는 자식을 가지게 됨
  li.appendChild(button); //span을 먼저 추가하고 button을 추가
  toDoList.appendChild(li); //ul에 li를 추가
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //제출 전 인풋값 저장
  toDoInput.value = ""; //제출시 인풋창을 비움
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveToDos();
}

//submit eventListener
toDoform.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach((item) => paintTodo(item));
}
