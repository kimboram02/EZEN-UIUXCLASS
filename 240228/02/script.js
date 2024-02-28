//객체 중첩

//반복문 중첩
// for (let i = 0; i < 10; i++) {
//   for (let i = 0; i < 10; i++) {}
// }
//조건문 중첩
// if (true) {
//   if (true) {
//     console.log("true");
//   }
// }
// const student = {
//   name: "David",
//   score: {
//     history: 85,
//     science: 94,
//     average: function () {
//       return (this.history + this.science) / 2; //해당객체를 감싸안고 있는 this = score , score.history로 써도 되지만 재사용성을 위해 this 사용
//     },
//   },
// };

// //메서드 = 함수
// window.document.querySelector();
// console.log(student.score.history);
// console.log(student.score.average());
