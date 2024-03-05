//배열에 사용할 수 있는 메서드
// concat( ) : 두 개 이상의 배열을 추가해서 하나의 배열로 만들고자 할 때

// const vegitable = ["양상추", "토마토", "피클"];
// const meat = ["불고기"];
// const cheese = ["모짜렐라", "슈레드"];

// const meatBurger = vegitable.concat(meat, "빵");
// const meatBurger = meat.concat(vegitable, "빵");
// console.log(meatBurger);

// 전개연산자 미사용 시 => 배열 안에 배열 : 중첩배열 -> 전개연산자 사용
// const cheeseBurger = [...vegitable, ...cheese];
// console.log(cheeseBurger);

//배열 정렬
// const numbers = [6, 9, 3, 21, 18];
// numbers.reverse(); // 정반대의 값 하나씩 찾아오고자 할 때
// console.log(numbers);

const values = [5, 20, 3, 11, 4, 15];
// values.sort();
// console.log(values);

// sort함수는 기본 default값 => 작은 숫자를 좌측정렬 속성

// values.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
//   if (a === b) return 0;
// });

// sort 오름차순 정렬
values.sort((a, b) => {
  return a - b;
});

// sort 내림차순 정렬
values.sort((a, b) => {
  return b - a;
});
console.log(values);

// 배열안에 아이템을 추가 및 삭제하는 메서드
const animals = ["lion", "bear", "bird"];
//to do list
console.log(animals);

animals.pop(); // 뒤에 제거
console.log(animals);

animals.push("tigger"); // 뒤에 추가
console.log(animals);

const fruits = ["apple", "pear", "banana", "orange", "fineapple"];

console.log(fruits);

fruits.shift(); // 앞에 제거
console.log(fruits);
fruits.unshift("cherry"); // 뒤에 추가
console.log(fruits);

// split(구분자) : 문자열 => 배열
// slice(인덱스) : 문자열 내 특정 인덱스 값부터 문자열

// splice( )
const subjects = ["html", "css", "javascript", "react", "typescript"];
// subjects.splice(2); //2번 인덱스부터 잘라내기
// console.log(subjects);
subjects.splice(2, 4, "vue", "node"); //2번~4번 잘라내고 그 뒤에 추가
console.log(subjects);

//slice( )
fruits.slice(1);
console.log(fruits);
console.log(fruits.slice(1, 3));
console.log(fruits);

// splice 함수 && slice 함수 => 매개변수를 1개만 받았을 경우, 해당 매개변수의 인덱스 값부터 끝까지의 값을 추출해온다 : 공통점
//splice함수 : 원본 배열 데이터에도 영향을 미친다
//slice함수 : 원본 배열 데이터에는 영향을 미치지 않는다

//map( ) / reduce( )
// map( ) :원본 배열을 그대로 둔 상태에서 특정 연산 작업을 한 결과값을 새로운 배열로 만들고 싶을 때

// const numbers = [1, 2, 3, 4, 5];
// // const newNumbers = numbers.map((nember) => {
// //   return number * 2;
// // });
// // console.log(newNumbers);
// // console.log(numbers);

// const newNumbers02 = numbers.map((number, index) => {
//   return index + number * 3;
// });
// // const newNumbers02 = numbers.map((number, index) => index + number * 3);
// console.log(newNumbers02);

// 실행문 && 표현식문
// js 다중패러다임 언어 (*)

const scores = [90, 35, 64, 88, 45, 92];
// const highScores = scores.filter((score) => {
//   return score >= 85;
// });
// console.log(highScores)

// const highScores2 = scores.filter((score, index) => {
//   if (score >= 85) {
//     console.log(`index : ${index}, score : ${score}`);
//   }
//   return score;
// });

//reduce : 누산기 : 매개변수 2개
// 누적계산기

const numbers = [1, 2, 3, 4, 5];
// const result = numbers.reduce((total, current) => {
//   return total + current;
// }, 0);
const result = numbers.reduce((total, current) => total + current, 0);

console.log(result);
