// window.onload = alert("안녕하세요");
// const body = document.querySelector("body"); 굳이 메모리 잡아 먹지 말고 아래 함수 안에 넣어도 됨
// const button = document.querySelector("button");

// //변수명 뒤에 소괄호를 쓰지 않은 어떤 키워드가 붙으면 = 속성 / 소괄호 함수가 붙으면 = 매서드
// const btnFnc = () => {
//   document.body.style.backgroundColor = "orange";
// };

// button.onclick = btnFnc;

// const result = document.querySelector("#result");

//(e) : 매개변수명( 이 상황에서는참조변수라고 부르기도 함) 을 아무거나 설정 가능 => event 객체를 가져와서 쓸거야
// document.body.onkeydown = (e) => {
//   result.innerText = event.key;
// };
// event 객체 안 key 속성

// document.body.onkeydown = (event) => {
//   result.innerText = `
//    code : ${event.code},
//    ket : ${event.key}
//    `;
// };

// const button = document.querySelector("button");
// button.onclick = () => {
//   document.body.style.backgroundColor = "crimson";
// };

//이벤트리너스는 함수로 콜백함수(함수 안에 또다른 함수) 가능
// button.addEventListener("click", () => {
//   document.body.style.backgroundColor = "orange";
// });

const form = document.querySelector("form");
const button = document.querySelector("input[type='submit']"); //개취 => 아이디로 줘서 찾아올 수도

// 방법 1번 => 서버에 제출할 목적이 없는데 form 사용은 과하다
// form.addEventListener("submit", () => {
// });

//방법 2번
button.addEventListener("click", (e) => {
  e.preventDefault();
  const word = document.querySelector("input[type='text']").value; //input 안에 입력된 값 찾아오는 것 : value 속성
  const result = document.querySelector(".result");
  const count = word.length;
  result.innerText = count;
  if (count >= 10) {
    
  } else {
    alert("아이디는 10자 이상이어야 합니다");
  }
});
