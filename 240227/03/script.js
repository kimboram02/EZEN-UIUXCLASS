const buttons = document.querySelectorAll("button");
const computerChoic = document.querySelector(".computer-choice");
const youChoic = document.querySelector(".you-choice");
const winner = document.querySelector(".result");

const result = ["가위", "바위", "보"];

const show = (user, computer, meseage) => {
  youChoic.innerText = user;
  computerChoic.innerText = computer;
  winner.innerText = meseage;
};
const game = (user, computer) => {
  if (user === computer) {
    let message = "무승부"; //블록스코프 => 밖에서 사용하므로 let 제거하고 사용
  } else {
    switch (
      user + computer //문자열은 + 사용하면 나란히
    ) {
      case "가위보":
      case "바위가위":
      case "보바위":
        message = "사용자 승리";
        break;
      case "가위바위":
      case "바위보":
      case "보가위":
        message = "컴퓨터 승리";
        break;
    }
  }
  show(user, computer, meseage);
};

const play = (e) => {
  const user = e.target.innerText;
  const randomIndex = Math.floor(Math.random() * 3);
  const computer = result[randomIndex];
  game(user, computer);
  console.log(user, computer);
};
//preventDefault => button from 태그 안에서 사용
buttons.forEach((button) => {
  button.addEventListener("click", paly);
});
