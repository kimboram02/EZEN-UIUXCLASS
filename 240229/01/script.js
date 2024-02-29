// function Book() {}
//생성자 함수를 익명함수 형식으로 만듦
// const Book = function (title, pages, done) {
//   this.title = title;
//   this.pages = pages;
//   this.done = done;
//   this.finish = function () {
//     this.done === false ? (str = "읽는 중") : (str = "완독");
//     return str;
//   };
// };
// const book1 = new Book("자바스크립트", 648, false);
// console.log(book1);

//생성자함수 => 프로토타입 => 인스턴스
//Object => Book(prototype) => book1(__proto__)
//자손요소인 인스턴스는 __proto__ 속성 / 자식요소인 프로토타입은 prototype 속성 사용 가능

const Book = function (title, pages, done) {
  this.title = title;
  this.pages = pages;
  this.done = done;
  // this.finish = function () {
  //   this.done === false ? (str = "읽는 중") : (str = "완독");
  //   return str;
  // };
};

Book.prototype.finish = function () {
  this.done === false ? (str = "읽는 중") : (str = "완독");
  return str;
};
//생성자 함수인 Book에 finish 함수를 넣고 싶다
const book1 = new Book("자바스크립트", 648, false);
console.log(book1.finish());
