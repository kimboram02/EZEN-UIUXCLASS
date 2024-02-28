//객체
//프로퍼티(속성)로 구성
//key : value 한 쌍 => 프로퍼티

//객체 만드는 2가지 방법

const book1 = {
  title: "자바스크립트",
  pages: 648,
};

//온점 표기법
console.log(book1.title);

//대괄호 표기법
console.log(book1["pages"]);

book1.pages = 50;

book1.author = "David";
console.log(book1);

new Date();
new Object();
new Array();

//프로토타입 = 붕어빵 틀
//인스턴스 = 붕어빵 틀을 활용해서 만들어진 붕어빵
const book2 = new Object(); //Object : 프로토타입(객체) , book2 : 인스턴스 => 실무에선 이렇게 객체 만들지 않음
console.log(typeof book2);
book2.title = "typescript";
book2.pages = 500;
book2.author = "alice";

delete book2.pages; //delete => 원하는 key값 삭제
console.log(book2);
