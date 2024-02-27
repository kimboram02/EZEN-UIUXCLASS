//수학객체
//Math

let num = 2.5234;
let maxNum = Math.max(10, 5, 8, 30);
console.log(maxNum);
let minNum = Math.min(10, 5, 8, 30);
console.log(minNum);

let roundNum = Math.round(num); // 매개변수가 실수일 때, 첫째소수점자리 반올림(5이상)
console.log(roundNum);

let floorNum = Math.floor(num); // 매개변수가 실수일 때, 첫째소수점자리(5미만이여도) 무조건 버림
console.log(floorNum);
let ceilNum = Math.ceil(num);
console.log(ceilNum); // 매개변수가 실수일 때, 첫째소수점자리 무조건 올림
let rndNum = Math.random();
console.log(rndNum); // 1미만의 실수형태로 램덤값으로 반환 => 매개변수 중요x : 로또번호 생성원리
let piNum = Math.PI;
console.log(piNum); //원주율 3.14
