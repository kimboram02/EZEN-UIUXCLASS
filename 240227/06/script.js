const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

let todos = []; //객체를 배열 const
const save = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const delItem = (e) => {
  const target = e.target.parentElement;
  todos = todos.filter((todo) => todo.id != target.id); //li태그 중 id 가지고 있는 li만 삭제하고 나머지li는 todos에 재집합
  save(); //삭제된 나머지를 다시 저장해야 되니까 => todos 재할당 필요하므로 let으로 선언
  target.remove();
};
const addItem = (todo) => {
  if (todo.text !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = todo.text;
    button.innerText = "삭제";
    button.addEventListener("click", delItem);
    // li.innerText = text;
    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
    li.id = todo.id; //html li에서도 표시하기 위해
  }
};
const handler = (e) => {
  e.preventDefault();
  const todo = {
    id: Date.now(),
    text: input.value,
  };
  // addItem(input.value); => const todo 안에 객체
  todos.push(todo); //배열의 뒷쪽부터 값을 하나씩 들어가는 메소드 값

  addItem(todo);
  console.log(todos);
  save();
  input.value = "";
};
const init = () => {
  const userTodos = JSON.parse(localStorage.getItem("todos"));
  if (userTodos) {
    userTodos.forEach((todo) => {
      addItem(todo);
    });
  } else {
    handler();
  }
  todos = userTodos;
  console.log(userTodos);
};
init();

form.addEventListener("submit", handler);
//함수를 나눠서 씀 : 리팩토링이 되었음

// localStorage.setItem("Hello", "World");
// const myData = localStorage.getItem("Hello");
// console.log(myData);
