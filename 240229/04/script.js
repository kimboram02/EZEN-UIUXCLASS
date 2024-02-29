// const str = "hello";
// const greeting = "안녕하세요!";
// const str01 = "Good Morning";
// console.log(str.length);
// console.log(greeting.length);
// console.log(str01.charAt(0)); //0 : 문자 첫글자 배열값의 인덱스값 찾듯이 사용 가능

//예 : 반복적인 문자열 못쓰게 할 때
const string = prompt("문자열을 입력하세요");
const letter = prompt("어떤 문자를 체크하겠습니까?");
const counting = (str, ch) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ch) {
      count += 1;
    }
  }
  return count;
};
const result = counting(string, letter);
document.write(`${string}에는 ${letter}가 ${result}번 사용되었습니다`);
