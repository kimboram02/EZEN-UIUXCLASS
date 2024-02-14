//자료형
//변수에 담겨질 수 있는 값의 형태를 의미
//숫자형 / 문자열 / 논리형 / 객체 / 배열 / 심벌 / 함수
//객체 => {key : value} => property(*프로퍼티 = 속성)

//객체 > 배열 : 숫자, 문자, 공란 등 가능 / 각각의 인덱스값을 부여받음
// let arr = [1, 2, 3, 4, 5];
// let arrStr = ["a", "b", "c"];
// let arr01 = [];

//index & length(함수x/속성o) : 배열의 아이템 총개수를 찾아오고자 할 때
//사람 => 값을 입력 => 0,1
//비트 => 0,1 인식
//바이트

//js = "객체 지향" 프로그래밍 언어 <-> "절차 지향" : 고차함수 이해 필요

// console.log(arr[0]);
// console.log(arrStr.length);

// 심벌 : 유일무이한 값을 저장하고 관리하고 싶은 경우 사용

// let var1 = Symbol();
// let var2 = Symbol();

//비교연산자 => 서로 다른 피연산자를 비교할 때 사용하는 연산자
// console.log(var1 === var2); 두 개의 피연산자는 false

//e-commerce = 쇼핑몰
//회원들의 개인정보 =>

//심벌 함수를 id에 할당 => 유일무이한 값
// let id = Symbol();
// const member01 = {
//   name: "Kim",
//   [id]: 12345,
// };
// console.log(member01);
// member01.id = 6789;
// console.log(member01);

// const member02 = {
//   name: "Kim",
//   id: 12345,
// };
// console.log(member02);

// let grade = Symbol("grade");
// member01[grade] = "VIP";
// console.log(member01);

// 익명함수 => 함수의 명을 변수의 명으로 대체함
// const fnc = function () {
//   console.log(test);
// };

//함수는 이렇게 작성하는 것이 기본문법
// function fnc01() {}

//prompt() : 사용자에게 어떤 값을 받아올 수 있도록 해주는 함수
//사용자가 아무리 숫자를 입력해도 => 문자열 형변환

// 문자열 "+" 숫자형 => 문자열
// "-", "/", "*" => 자동으로 형변환 없음

// let str = "20";
// let num = 10;

//Number() 함수 = 매개변수로 들어오는 값을 무조건 숫자로 형변환
// let result = Number(str) + num;
// console.log(result);

// let result01 = str - num;
// console.log(result01);

//true = 1 / false = 0
// console.log(Number(true));
// console.log(Number(false));

//일반문자로 된 것은 숫자로 형변환 되지 않으나 숫자로 된 문자열은 숫자로 형변환 가능
// console.log(Number("hi"));
// console.log(Number("20"));

//Number() vs parseInt() vs parseFloat
//number 가장 큰 개념 : 매개 변수 공간에 뭐가 들어오든 숫자로 바꿀 수 있음 / 논리형도 숫자로 변환 가능 / 대부분 Number 사용
//parseInt : 소괄호 안에 들어온 값은 무조건 다 숫자로 바꿀 수 없음 / 숫자를 정수(*소수점이 없는 값)로 바꿔주는 역활 / 논리형은 숫자로 변환 불가능
// const userAge = Number(prompt("당신의 나이를 입력하세요"));
// console.log(typeof userAge);
// console.log(Number(false));

// const userAge = parseInt(prompt("당신의 나이를 입력하세요"));
// console.log(typeof userAge);
// console.log(parseInt(false));

//소갈호 안에 들어온 값을 실수의 형태로 바꿔주는 역활
// const userHot = parseInt(prompt("당신의 체온을 입력해주세요!"));
// console.log(userHot);
//소갈호 안에 들어온 값을 실수의 형태로 바꿔주는 역활
// const userHot = parseFloat(prompt("당신의 체온을 입력해주세요!"));
// console.log(userHot);

//숫자를 문자로 바꿔주는 방법 2가지
// 1)
// let num = null;
// console.log(typeof num.toString());

//쇼핑몰 의류 => 바코드(*문자형태로 관리)

// 2)
// console.log(typeof String(null));

//null & undefined


//Boolean true & false
// console.log(Boolean("hi"));
// console.log(Boolean("null"));

//사용자에게 화씨온도를 받아서 섭씨온도로 변환시킨 후 웹브라우저 화면에 섭씨온도를 출력해주세요(단, 소수점도 출력되어야 함)
//공식 : 섭씨온도 = (화씨온도 -32) /1.8

const fah = Number(prompt("화씨온도를 입력하세요!"));
const cel = ((fah - 32) / 1.8).toFixed(1); //소숫점 첫번째까지만 고정
document.write(`화씨 ${fah}도는 섭씨 ${cel}도 입니다!`);
