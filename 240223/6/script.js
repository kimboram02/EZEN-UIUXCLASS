// const tsNode = document.createElement("p");
// const tsTextNode = document.createTextNode("Typescript");
// tsNode.appendChild(tsTextNode);

// const basisNode = document.querySelectorAll("p")[0];
// console.log(basisNode);
// document.body.insertBefore(tsNode, basisNode); //특정노드앞에 넣겠다 무한슬라이드 사용시 필요!!!!!!!

// const heading = document.querySelector("h1");
// const parentH1 = heading.parentNode; //선택한 요소의 객체의 부모요소를 찾아라
// console.log(parentH1);

// heading.addEventListener("click", () => {
//   heading.remove();
// });

//this객체
//단,조건 => 현재 선택한 li 태그를 this 객체로 대체해서 사용할 수 있음, 단, 클래스 함수를 사용할 때에만 가능 => 화살표 함수를 사용할 때에는 this 객체가 이벤트를 실행시키는 당사자 = 주체가 되는 것이 아니라 window 객체가 this가 된다

// const items = document.querySelectorAll("li");
// for (let item of items) {
//   item.addEventListener("click", () => {
//     item.parentNode.removeChild(item);
//   });
// }

//위의 코드를 this로 변경 : 동일한 코드
const items = document.querySelectorAll("li");
for (let item of items) {
  item.addEventListener("click", function () {
    this.parentNode.removeChild(this);
  });
}
