const arrows = document.querySelectorAll(".arrow");
const container = document.querySelector("#container");
const pics = [
  "pic-1.jpg",
  "pic-2.jpg",
  "pic-3.jpg",
  "pic-4.jpg",
  "pic-5.jpg",
  "pic-6.jpg",
];

container.style.backgroundImage = `url(./images/${pics[0]})`;
arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    // console.log(e.target.id);
    let i = 0; //0의 값을 가진 index 부터 시작(새로고침시)
    if (e.target.id === "left") {
      i--;
      if (i < 0) {
        i = pics.length - 1; // 마지막 이미지로 돌아가도록
      }
    } else if (e.target.id === "right") {
      i++;
      if (i >= pics.length) {
        i = 0; // 첫번째 이미지로 돌아가도록
      }
    }
    container.style.backgroundImage = `url(./images/${pics[i]})`;
  });
});
