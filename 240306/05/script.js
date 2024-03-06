const button = document.querySelector("button");
const result = document.querySelector("#result");

//로또 규칙
//한 번 추첨 시 : 6개의 숫자 (*반드시 중복불가)

//각각의 6개의 숫자 : 최대 45까지 가능
//1~45까지의 구간 숫자, 랜덤 => 수학객체 random() * 45

//반복문 필요 * 6번

//절대 중복불가 => Set() : 인스턴스 객체화

//result 출력

const luckyNum = {
  digitCount: 6,
  maxNumber: 45,
};

const lottoPlay = () => {
  const { digitCount, maxNumber } = luckyNum;
  const myNumber = new Set();
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1); //0이 나올 수 없음
  }
  if (myNumber.size !== digitCount) {
    for (let i = 0; i < digitCount; i++) {
      myNumber.add(Math.floor(Math.random() * maxNumber) + 1); //0이 나올 수 없음
    }
  } else {
    result.innerText = `${[...myNumber]}`;
    //set 객체 그대로 웹 브라우저 출력불가 : 배열로 만들기
  }
  console.log(myNumber);
};

button.addEventListener("click", lottoPlay);
