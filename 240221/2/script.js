//1. 사용자가 입력하는 값을 찾아오기 위해 입력창 정의
//2. 사용자가 클릭할 버튼 정의
//3. 버튼을 클릭했을 때 이벤트에 대한 기능 정의
//4. li 태그 DOM에서 생성 => 입력창을 통해서 전달받은 값을 li태그 삽입 => ul 태그 자식 요소
//5. 사용자가 입력한 값을 출력할 공간에 대한 정의

const input = document.querySelector("form input[type= 'text']");
const form = document.querySelector("form");
const ul = document.querySelector("ul");

//이벤트 핸들러
// 이벤트 작동 = > 이벤트 객체 생성 => 이벤트 객체 무력화 시킴
//value 값은 이벤트가 작동되어야지만 사용자가 입력한 값을 찾아올 수 있음 => 전역변수로 만들지 말아라 / 이벤트 함수 안에 넣기
const formFnc = (e) => {
  e.preventDefault();
  if (input.value !== "") {
    const li = document.createElement("li");
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = "";
  }// 아무것도 작성하지 않았을 때는 미등록되도록 하기
};
form.onsubmit = formFnc;
