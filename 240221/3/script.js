// 사용자 키 & 몸쿠게
// (몸무게 / 키 100 나눔 => 제곱)

//1. 사용자 키와 몸무게값 정의
//2. 사용자 버튼과 출력할 공간(result) 정의
//3-1. button 이벤트 연산 작업하기
//3-2. h & w 값 활용 => 연산 => 변수명 => 할당
//4. 함수 & 조건문 연산작업
//5. result 출력하기

// const height = document.querySelector("#height");
// const Weight = document.querySelector("#Weight");
// const submit = document.querySelector("input[type = 'submit']");
// const result = document.querySelector(".result");

// submit.onclick = (e) => {
//   e.preventDefault();
//   const input = (Weight.value / (height.value / 100)) * (height.value / 100);
//   result.innerText = input;
// };

const form = document.querySelector("form");

const display = (bmi) => {
  const result = document.querySelector(".result"); // 최대한 전역스코프 만들지 말아라
  let group;
  if (bmi >= 30.0) {
    group = "중등도 비만";
  } else if (bmi >= 25.0) {
    group = "경도 비만";
  } else if (bmi >= 23.0) {
    group = "과체중";
  } else if (bmi >= 18.5) {
    group = "정상";
  } else {
    group = "저체중";
  }
  result.innerText = `${bmi}-> ${group} 입니다.`;
};
const calculate = (weight, height) => {
  return (weight / (height * height)).toFixed(1);
};

const formHandler = (e) => {
  e.preventDefault();
  const heightInput = document.querySelector("#height");
  const weightInput = document.querySelector("#Weight");
  //예외조항처리 하기 위해서 논리연산자 사용
  if (weightInput.value !== "" && heightInput.value !== "") {
    const height = heightInput.value / 100;
    const weight = weightInput.value;
    const bmi = calculate(weight, height);
    display(bmi);
    heightInput.value = "";
    weightInput.value = "";
  }
};
form.onsubmit = formHandler;
