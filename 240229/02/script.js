function Book(title, price) {
  this.title = title;
  this.price = price;
}
Book.prototype.buy = function () {
  console.log(`${this.title}를 ${this.price}에 구매하였습니다`);
};

const book1 = new Book("abcde", 10000);
book1.buy();

//위에서 만든 생성자함수와 비슷하면서 조금 기능이 추가된 생성자 함수를 또 만들고 싶다면?

function Textbook(title, price, major) {
  Book.call(this, title, price); //앞에 객체에서 상속 받아오고 싶은 요소 call,this 필수
  this.major = major;
}
Textbook.prototype.buyTextBook = function () {
  console.log(`${this.major} 전공 서적, ${this.title}을 구매했습니다`);
};

//상속받고자하는 요소, 상속주고자하는 요소 : 매개변수 => 정상적인 상속을 위한 연결고리
Object.setPrototypeOf(Textbook.prototype, Book.prototype);
const book2 = new Textbook("타입스크립트", 5000, "컴퓨터공학");
book2.buyTextBook();
book2.buy(); //상속을 받았기 때문에 위에서 정의한 함수 사용 가능
