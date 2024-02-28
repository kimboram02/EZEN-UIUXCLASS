// const book3 = {
//   title: "파이썬",
//   pages: 360,
//   buy: function () {
//     console.log("이 책을 구입했습니다");
//   },
// };
// console.log(book3.buy());
// const book3 = {
//   title: "파이썬",
//   pages: 360,
//   buy() {
//     console.log("이 책을 구입했습니다");
//   },
// };
// console.log(book3);

//this 객체
//1) addEventLinstener => 콜백함수 / 화살표 함수 => window
//2) addEventLinstener => 콜백함수 / 익명 함수 => 바로 위에 상위요소
//3) 객체 메서드 함수를 생성할 때 / 익명 함수 => this 바로 위에 상위요소
//4) 객체 메서드 함수를 생성할 때 / 화살표 함수 => window

const book4 = {
  title: "html5 + css3",
  papes: 500,
  author: "peter",
  done: false,
  finish: function () {
    this.done === false ? console.log("읽는 중") : console.log("완독");
  }, //this = book4
};
book4.finish();

//숫자, 문자, 논리 => 원시타입 : primitve
//객체, 배열 =>참조타입 : reference
// 원본 데이터 자료 & 사본 데이터 자료
