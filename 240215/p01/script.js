// if(조건식이 참이어야){
//  실행문 실행됨
// }

//if문 : X = 식별자
// let x = 10;
// if (x > 5) {
//   console.log("x는 5보다 큽니다");
// }

//if else문
// const userInput = prompt("당신의 이름을 입력하세요");

// if (userInput === null) {
//   alert("취소하셨습니다");
//   //유효하지 않은 값: 값입력 없이 취소버튼을 눌렀을 때
// } else {
//   alert(`${userInput} 님 환영합니다`);
// }

//else if문
// const score = Number(prompt("프로그램 점수 : "));

// //예외조항 처리 : 대전체!!!
// //중첨사용이 가능 = 반복해서 사용할 수 있음
// if (score != null) {
//   if (score >= 90) {
//     alert("A학점");
//   } else if (score >= 80) {
//     alert("B학점");
//   } else {
//     alert("C학점");
//   }
// }

//조건문을 활용해서 사용자에게 어떤 숫자를 받아서 그 숫자가 짝수인지 홀수인지를 확인한 이후 알림창을 활용해서 사용자에게 짝수 혹은 홀수입니다. 라는 메세지를 출력해주세요
//가장 좋은 변수명 = 식별자는 명시적 & 직관적
//1)예약어 : 이미 js & window 사용중인 고유명사 : document, window
//2)변수명 작명 가장 앞에 사용할 수 있는 것들 : $, _, 영문자 가능 (*숫자 / 특수문자 사용불가능)
//3)변수명 반드시 대,소문자 구분
// camel표기법 : userPickNum
//sneak표기법 : user_picknum
//헝가리언표기법 : Userpicknum

// const userNum = prompt("숫자를 입력하세요"); //number 함수 줬더니 불리언값도 숫자로 바꾸므로 if 조건문 안에서 사용

// // if (userNum != null) {
// //   const resetNum = Number(userNum);
// //   if (resetNum % 2 === 0) {
// //     alert("당신이 선택한 숫자는 짝수입니다");
// //   } else {
// //     alert("당신이 선택한 숫자는 홀수입니다");
// //   }
// // } else {
// //   alert("취소하셨습니다");
// // }

// if (userNum != null) {
//   const resetNum = Number(userNum);
//   resetNum % 2 === 0 ? alert("짝수입니다") : alert("홀수입니다");
// } else {
//   alert("취소하셨습니다");
// }

//사용자에게 1~12까지의 숫자 중 하나를 받으세요. 그리고 전달받은 숫자에 따라 다음과 같은 알림메세지가 출력되게 해주세요
//사용자가 입력한 숫자 : 9~11 => 독서의 계절 가을이네요
//사용자가 입력한 숫자 : 6~8 => 여행하기 좋은 여름이네요
//사용자가 입력한 숫자 : 3~5 => 햇살 가득한 봄이네요
//사용자가 입력한 숫자 : 12~2 => 스키의 계절 겨울이네요

// let month = prompt("현재는 몇 월 인가요?", "ex. 2");

// if (month != null) {
//   month = Number(month);
//   if (month >= 9 && month <= 11) {
//     alert("독서의 계절 가을이네요");
//   } else if (month >= 6 && month <= 8) {
//     alert("여행하기 좋은 여름이네요");
//   } else if (month >= 3 && month <= 5) {
//     alert("햇살 가득한 봄이네요");
//   } else if (month >= 13) {
//     alert("존재하지 않는 월입니다");
//   } else {
//     alert("스키의 계절 겨울이네요");
//   }
// } else {
//   alert("취소하셨습니다");
// }

//사용자에게 id 와 pw값을 받으세요 그리고 해당 id 와 pw값이 다음과 같다면, "반간습니다 어서오세요" 라는 알림 메세지를 출력해주세요
//id : ezenit / pw : 1234
//그런데, 만약 id만 일치하고, pw가 틀렸을 경우에는 "비밀번호를 확인해주세요" 라는 알림 메세지를 출력해주시고 만약 id 와 pw 둘 다 틀렸을 경우에는 "아이디를 확인해주세요" 라는 알림 메세지를 출력해주세요

//실습예제(보람)
// const id = prompt("아이디를 입력해주세요");
// const pw = prompt("비밀번호를 입력해주세요");

// if (id != null || pw != null) {
//   if (id === "ezenit" && pw === "1234") {
//     alert("반간습니다 어서오세요");
//   } else if (id === "ezenit" && pw != "1234") {
//     alert("비밀번호를 확인해주세요");
//   } else if (id != "ezenit" && pw === "1234") {
//     alert("아이디를 확인해주세요");
//   } else {
//     alert("아이디와 비밀번호를 확인해주세요");
//   }
// } else {
//   alert("취소하셨습니다");
// }

// const id = "ezenit";
// const pw = 1234;
// const userId = prompt("당신의 아이디는?");

// if (userId === id) {
//   const userPw = Number(prompt("당신의 비밀번호는?"));
//   if (userPw === pw) {
//     alert(`${userId} 님 반갑습니다`);
//   } else {
//     alert(`비밀번호가 일치하지 않습니다`);
//     location.reload();
//   }
// } else {
//   alert("아이디가 일치하지 않습니다");
//   location.reload(); //반복적으로 창이 뜨도록 window.location.reload(); window 생략 가능
// }

// switch(조건식 => 참) {
//   case 값(1) : 실행문
//   break;
//   case 값(2) : 실행문
//   break;
//   case 값(3) : 실행문
//   break;
// }

// const subject = prompt("신청할 과목을 선택하세요", "1-HTML, 2-CSS, 3-JS");

// if (subject !== null) {
//   switch (subject) {
//     case "1":
//       alert("HTML을 신청하셨습니다");
//       break;
//     case "2":
//       alert("CSS를 신청하셨습니다");
//       break;
//     case "3":
//       alert("JS를 신청하셨습니다");
//       break;
//     default:
//       alert("잘못입력하셨습니다");
//       location.reload();
//   }
// } else {
//   alert("취소하셨습니다");
// }

//사용자에게 즐겨찾는 쇼핑몰을 물어보시고 이에 대한 답을 받아주세요
//쇼핑몰 후보 : 쿠팡, G마켓. 11ST, 마켓컬리
//사용자가 선택한 쇼핑몰이 후보군 안에 존재한다면 prompt 창에 "확인"버튼을 클릭하는 순간, 해당 쇼핑몰로 바로 이동하게 만들어주세요
//window 객체 안에 location 객체는 어딘가로 이동하도록 해주는 객체
//location 객체 안에 href 속성 = 경로를 지정해주는 속성
//쿠팡을 사용자가 선택했다면 location.href = "https://www.coupang.com" 결과값을 설정하면 쿠팡사이트로 이동할 수 있음

const userShop = prompt(
  "즐겨찾는 쇼핑몰을 입력하세요",
  "쿠팡, G마켓, 11ST, 마켓컬리"
);
if (userShop != null) {
  switch (userShop) {
    case "쿠팡":
      location.href = "https://www.coupang.com";
      break;
    case "G마켓":
      location.href = "https://www.gmarket.co.kr";
      break;
    case "11ST":
      location.href = "https://www.11st.co.kr";
      break;
    case "마켓컬리":
      location.href = "https://www.kurly.com/main";
      break;
    default:
      alert("잘못입력하셨습니다");
  }
} else {
  alert("취소하셨습니다");
}
