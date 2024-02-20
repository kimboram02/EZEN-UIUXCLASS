const body = document.querySelector("body");
const button = document.querySelector("#toggle-box button");
console.log(button);
console.log(body);

button.onclick = () => {
  // body.classList.toggle("dark"); => 텍스트도 바꿔야하므로 if조건문이 나음
  if (!body.classList.contains("dark")) {
    body.classList.add("dark");
    button.innerText = "라이트모드로 바꾸기";
  } else {
    body.classList.remove("dark");
    button.innerText = "다크모드로 바꾸기";
  }
};
