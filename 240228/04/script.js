//숫자, 문자, 논리 => 원시타입 : primitve
//객체, 배열 =>참조타입 : reference
// 원본 데이터 자료 & 사본 데이터 자료

// const book1 = {
//   title: "인구와 투자의 미래",
//   pages: 500,
//   publish: "2024-02-28",
//   price: 30000,
// };

//커스터마이징 된 객체를 생성
//생성자 "함수" => 다른 일반적인 함수와는 기능 상이
//함수이름 첫글자 => 대문자 입력
//생성자 함수 = 붕어빵 틀
//만들어질 객체 = 붕어빵

function Book(title, pages, done = false) {
  this.title = title;
  this.pages = pages;
  this.done = done;
  this.finish = function () {
    let str = "";
    this.done === false ? (str = "읽는 중") : (str = "완독");
  };
}
const book1 = new Book("자바스크립트", 648, false);
const book2 = new Book("파이썬", 360, true);
console.log(book1);
console.log(book2);

//class
//블랙홀의저주
class Book2 {
  constructor(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
  }
  finish() {
    let str = "";
    this.done === false ? (str = "읽는 중") : (str = "완독");
  }
}
const book4 = new Book2("html5", 380, true);
console.log(book4);
