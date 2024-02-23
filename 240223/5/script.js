const today = new Date(); //new예약어 date 함수
const hrs = today.getHours(); //시간을 가져오는 함수
console.log(hrs);

const container = document.querySelector("#container");
const newImg = document.createElement("img");
newImg.src = hrs < 12 ? "./images/morning.jpg" : "./images/afternoon.jpg";
container.appendChild(newImg);
