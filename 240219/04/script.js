//사용자로부터 숫자 하나를 받으시고, 해당 숫자가 양수인지, 음수인지, 0인지 판단해서 알림창을 활용해서 이에 대한 결과를 출력해주세요
//반환값이 숫자일 경우에만 함수를 실행시켜주세요
//1. 사용자에게 깂을 받는다
//2. 사용자에게 전달받은 값이 숫자인 경우를 필터링
//3. 사용자에게 받은 값이 숫자라고 한다면, 해당 숫자를 조건식에 따라서 양,음,0인지 출력해줄 수 있는 함수를 정의한다

const userNum = parseInt(prompt("숫자를 입력하세요"));
// console.log(isNaN(7)); //숫자면 false
// console.log(isNaN("hi")); //문자면 ture
const isPositive = (n) => {
  if (n > 0) {
    alert(`${n}은 양수`);
  } else if (n < 0) {
    alert(`${n}은 음수`);
  } else {
    alert(`${n}은 0`);
  }
};

if (!isNaN(userNum)) {
  isPositive(userNum);
}
