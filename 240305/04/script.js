// //react = > 구조 분해 할당

// const fruits = ["사과", "복숭아"];
// // const apple = fruits[0];
// // const peach = fruits[1];

// const [apple, peach] = fruits;

// console.log(apple, peach);

// const [teacher, ...students] = ["park", "kim", "choi", "lee"];

// console.log(teacher, students);

// const member = {
//   name: "kim",
//   age: 25,
// };

// const { name: userName, age } = member;

// console.log(userName, age);

//객체의 구조분해할당 시, 반드시 유의사항
//구조분해할당 값을 전달받을 변수의 이름 = 객체의 key명과 동일
//값을 가져온 후 key값 변경 가능

const student = {
  name: "슛돌이",
  scroe: {
    history: 85,
    science: 94,
  },
  friends: ["kim", "lee", "park"],
};

const {
  name,
  score: { history, science },
  friends: [f1, f2, f3],
} = student;

console.log(history, f2);
