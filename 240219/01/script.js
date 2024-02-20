// prompt();
// alert();
// document.write();

// 함수의 생김새
// 단어(=키워드)() => 함수

// 함수가 작동하려면 무엇이 필요할까?
// 1) 함수를 구현 = 제작
// 2) 함수를 호출 = 실행

// 함수를 구현하려면 어떻게 해야할까?
// 함수를 구현하는 방법은 3가지
// 1) 클래스 함수를 구현하는 방법
// 2) 익명 함수를 구현하는 방법
// 3) 화살표 함수를 구현하는 방법

//초보 레벨 단계
// let num = 0;
// num += l;
// num += 2;
// num += 3;
// num += 4;
// num += 5;

//중급 레벨 단계 : 만약 숫자를 1~5까지가 아닌 1~100 더해라 : 재활용성이 불가능한 코드
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum += i;
// }

//고급 레벨 단계 : 함수사용 => 재활용이 가능한 코드로 업그레이드
// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(`1부터 ${n}까지 더하면 ${sum} 입니다`);
// }
//=> 함수 구현
// calcSum(20);
//=> 함수 호출
//매개변수와 인자값(=인수 : 변수)은 동일해야 함 : function calcSum(매개변수) / calcSum(인자값);

// 클래스 함수
// const userNum01 = Number(prompt("첫번째 숫자를 입력하세요"));
// const userNum02 = Number(prompt("두번째 숫자를 입력하세요"));
// function sum(a, b) {
//   const result = a + b;
//   alert(`두 수의 합은 ${result} 입니다`);
// }
// sum(userNum01, userNum02);

//익명 함수 : 함수의 이름 없애기 => 함수를 변수의 값으로 넣어주기 / 즉, 함수의 이름 = 변수명(식별자)
// const sum = function (a, b) {
//   const result = a + b;
//   alert(`두 수의 합은 ${result} 입니다`);
// };
// sum(userNum01, userNum02);

// 화살표 함수 : 사용빈도 ↑
// const sum = (a, b) => {
//   const result = a + b;
//   alert(`두 수의 합은 ${result} 입니다`);
// };

// sum(userNum01, userNum02);

// return문 : 함수가 어떤한 연산 작업을 한 이후에 연산 결과물을 밖으로 가져오고 싶을 때
// const num = Number(prompt("숫자를 몇 까지 더할까요?"));
// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// calcSum(num);
// document.write(`1부터 ${num}까지 더하면 ${calcSum(num)} 입니다`);

// const userNum01 = Number(prompt("첫번째 숫자"));
// const userNum02 = Number(prompt("두번째 숫자"));
// const userNum03 = Number(prompt("세번째 숫자"));

// function multiple(a, b, c = 10) {
//   return a + b + c;
// }
// console.log(multiple(1, 2, 3));

// function multiple(a, b, c = 10) {
//   return a + b + c;
// }
// console.log(multiple(1, 2));
//c = 10 : 기본 매개변수 / 사용자가 값을 안 넣었을 때는 10으로 반영

// function calcSum(n) {
//   let Sum = 0;
//   for (let i = 1; i <= n; i++) {
//     Sum += i;
//   }
//   console.log(`1부터 ${n}까지 더하면 ${Sum} 입니다`);
// }
// calcSum(5);
//n(calcSum 함수 안에서만 사용 가능 / 선언된 공간 안에서만 사용): 지역스코프
//i(선언된 블록 안에서만 사용) : 블록스코프

// 자바스크립트 코드를 작성하다보면 큰 이슈
// JS 엄청 큰 문제점을 발견하면 => 콘솔창을 통해서 알려줌
// 아주 사소한 문법상의 문제점은 알려주지 않음
// 오타 등등
// 코드상의 문제가 발생 => 버그 발생
// TS(*타입스크립트) => 실무
// JS X => TS
// 보다 효율적으로 버그를 찾는 방법
//검사 -> sources -> script.js -> break 포인트 선택(calcSum(5);) 후 새로고침 -> stem into next function call 확인 후 break 포인트 해제

// const hi = "hello";

// function greeting() {
//   console.log(hi);
// }
// function greeting02() {
//   console.log(hi);
// }
// greeting();
// greeting02();

// let hi = "hello"; //전역변수

// function change() {
//   hi = "bye"; //지역변수
// }

// console.log(hi);
// change();
// console.log(hi);

// const factor = 5;
// function calc() {
//   return num * factor; //num 블록변수, factior 전역변수
// }
// const num = 10;
// let result = calc();
// document.write(`result : ${result}`);

// js 권장사항
// 1) var 보다는 let, const 키워드로 변수를 선언해라
// function addSum(n) {
//   var sum = 0;
//   for (var i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// var num = 3;
// console.log(`1부터 ${num} 까지 더하면 ${addSum(num)}`); //sources 창에서 확인하면 global 쪽에 있음 오버함 / let과 const는 script 칸에 있음
// 2) 가급적이면, 전역 스코프의 변수선언은 피해라
// 3) 그래서 var, let 보다는 const에 적응해라

// function sum(a, b) {
//   const sum = a + b;
//   console.log(`함수 실행결과값 : ${sum}`);
// }
// sum(1, 2);

// 즉시 실행 함수

// (function sum(a, b) {
//   const sum = a + b;
//   console.log(`함수 실행결과값 : ${sum}`);
// })(1, 2);

// (function (a, b) {
//   const sum = a + b;
//   console.log(`함수 실행결과값 : ${sum}`);
// })(1, 2);

// example();
// function example() {
//   console.log("hello");
// }
//선언도 안했는데 호출이 가능함 => 클래스 함수의 문제

//hoisting 기법
//무언가를 끌어올리다
//class 함수는 hoistion 가능 / 화살표 & 익명 함수는 hoistion 불가능
// example();
// const example = function () {
//   console.log("hello");
// };
// const example = () => {
//   console.log("hello");
// };
//그래서 익명함수, 화살표함수 사용해라

// const example01 = function () {
//   console.log("hello");
// };

// 화살표 함수에서는 매개변수가 존재하지 않는 경우에는 실행문을 보호하는 중괄호 & 값을 반환시켜주는 return문을 생략해도 문제없이 작동가능함
// let hi = () => {
//   return `안녕하세요`;
// };
// let hi = () => `안녕하세요`;
// console.log(hi());

// let sum = function (a, b) {
//   return a + b;
// };

// let sum = (a, b) => a + b;

// 화살표 함수 탄생한 이유 : (ES6문법)
// 1) 반복적으로 사용되는 function & 함수명을 생략
// 2) js 근본없는 구현 & 호출부의 순서를 명확하게 정의하기 위함
// 3) 함수의 실행문에서 굳이 중괄호 & return문을 사용하지 않아도 구현할 수 있도록 해주기 위한 목적

//변수 선언 시, let , const , var 사용하지 않으면 무조건 전역변수화
// function greeting() {
//   hi = "hello";
// } //undifined

// // const hi = "hello";
// // function greeting() {}

// greeting(); //키워드x => 전역변수화 시켰다면 먼저 함수 호출 필요
// console.log(hi);

//콜백함수
//함수 안에 또다른 함수를 호출할 때 부르는 용어
// const btn = document.querySelector("button");
// const display = () => {
//   alert("오늘도 화이팅입니다");
// };
// btn.addEventListener("click", display);

// const display = btn.addEventListener("click", () => {
//   alert("오늘도 화이팅입니다");
// });

// const showData = (name, age) => {
//   alert(`안녕하세요! ${name} 님 나이가 ${age}살 이군요`);
// };

// const getData = (callback) => {
//   const userName = prompt("이름을 입력하세요");
//   const ueserAge = prompt("나이를 입력하세요");
//   callback(userName, ueserAge);
// };

// getData(showData);

// java / python /c 등등 기타 프로그래밍 언어 함수
// js 함수 => 1급 시민
// 모든 프로그래밍 언어에서 1급 시민이 되려면 다음과 같은 조건 부합 필요
// 1) 함수를 변수에 값으로 할당할 수 있어야 한다 : 익명함수 & 화살표함수
// 2) 함수가 또다른 함수의 매개변수 혹은 인자값으로 사용될 수 있어야 한다 : 즉, 콜백함수
// 3) 함수가 또다른 함수의 return 안에 반환값으로 들어올 수 있어야 한다 => 고차함수

// const init = () => {
//   return function (a, b) {
//     return a - b > 0 ? a - b : b - a;
//   };
// };
// console.log(`init(30,20): ${init(30, 20)}`);

// const addNum = (a, b) => {
//   return a + b;
// };
// const addNum = (a, b) => a + b;
// console.log(addNum(1, 3)); //4
// console.log(addNum(1, 3, 5, 7)); //4
// 좌측으로부터 계산

//스프레드(전개) 연산자 : 안에 있는 인자값 개수에 상관없이 받아라 numbers(아무명이나 사용가능) : 배열 / 스프레드 연산자 뒤의 값 : 배열형태만 사용
// const addNum = (...numbers) => {
//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// };
// console.log(addNum(1, 3)); //4
// console.log(addNum(1, 3, 5, 7)); //6

// const displayFavorites = (first, second, ...favor) => {
//   const str = `가장 좋아하는 과일은 ${first}`;
//   const str01 = `두번재로 좋아하는 과일은 ${second}`;
//   // return str;
//   return str01;
// };
// console.log(displayFavorites("사과", "포도", "토마토"));

// window 운영체제 => 내장함수 사용
// js => 싱글스레드로 작동하는 객체지향 프로그래밍 언어
// 싱글 => 1 / 스레드 => 길 => 1차선 통행
// 1차선 => 사고
// <-> 멀티스레드 : 복수차선
// 동시성 불가 / 비동기 처리 불가
// 로딩 스피너

// setInterval() : 일정 시간마다 반복해서 무언가를 처리하는 함수

// const greeting = () => {
//   console.log("안녕하세요");
// };

// 1000밀리초 = 1초
// setInterval(greeting, 2000);
// setInterval(() => {
//   console.log("안녕하세요");
// }, 2000);

// clearInterval :  특정 조건에 따라서 반복실행 함수를 멈추게 하는 함수
//단락회로평가

// let counter = 0;

// let timer = setInterval(() => {
//   console.log("안녕하세요");
//   counter++;
//   if (counter === 5) {
//     clearInterval(timer); //재귀함수
//   }
// }, 2000);

// setTimeout() : 특정 시간이 경과한 이후에 작동하게 만드는 함수
// heap / callstack / Que

// setTimeout(() => {
//   console.log("안녕하세요");
// }, 3000);
