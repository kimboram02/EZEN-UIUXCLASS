// const h1 = document.querySelector("h1");
// const profile = document.querySelector("#profile");
// const img = document.querySelector("#profile img"); //이미지가 여러개일 경우, 후손선택자
// const users = document.querySelectorAll(".user"); // 타입 : 배열
// const address = users[1];

// console.log(h1);
// console.log(profile);
// console.log(img);
// console.log(users);
// console.log(address);

// const h1 = document.getElementsByTagName("h1");
// const profile = document.getElementById("profile"); // #(해쉬) 사용x
// const users = document.getElementsByClassName("user"); // .(온점) 사용x
// console.log(h1);
// console.log(profile);
// console.log(users);

// const desc = document.querySelector("#desc");
// // desc.innerText = "이름 : 홍길동"; //돔에서 찾아온 요소에 어떠한 텍스트를 넣고자 할 때 : 속성
// const descName = desc.innerText; //웹브라우저에 출력된 값만 찾아옴
// console.log(descName);
// const descHtml = desc.innerHTML; // html 태그까지 주고자 하는 목적이 있을 때
// console.log(descHtml);
// const descContext = desc.textContent; //웹브라우저에 출력된 값 외의 모든 값 찾아옴 / display : none 등이 되었을 때 innerText와 확연한 차이 발생
// console.log(descContext);

// const desc = document.querySelector("#desc"); //하나에 displat:none 적용하면 innerText 와 textContent 차이 확연히 보임
// console.log(desc.innerText);
// console.log(desc.innerHTML);
// console.log(desc.textContent);

// 이벤트 핸들러 = > 이벤트 작동 실행
// const title = document.querySelector("h1");
// // title.onclick = function () {
// //   title.innerText = "마이 프로필";
// // };
// //on 전치사가 왔다면 이벤트 핸들러!!!!!!!!
// title.onclick = () => (title.innerText = "마이 프로필");
// const userName = document.querySelector("#desc p");
// console.log(userName);
// userName.onclick = () => (userName.innerHTML = "이름 : <b>영심이</b>");
// const pfImg = document.querySelector("#profile img");
// console.log(pfImg);
// pfImg.onclick = () => pfImg.src = "./img/pf2.png"

// const title = document.querySelector("h1"); //title : 전역스코프이므로 함수 안에서도 사용 가능
// const userName = document.querySelectorAll(".user")[0]; //title : 전역스코프이므로 함수 안에서도 사용 가능

// title.onclick = () => {
//   title.style.backgroundColor = "#000";
//   title.style.color = "#fff";
// };
// const classGroup = userName.classList; //해당 요소의 클래스값 확인하는 역할

// userName.onclick = () => {
//   userName.classList.add("clicked"); //클래스 리스트에 추가해주고 싶은 가상클래스값 반영
// };

// const clickedTure = userName.classList.contains("clicked"); // 찾아온 클래스 리스트 중 특정 클래스값이 있는지 여부 확인 => contains("특정 클래스값")
// console.log(clickedTure);// true 와 false로 출력

// userName.onclick = () => {
//   if (!userName.classList.contains("clicked")) {
//     userName.classList.add("clicked");
//   } else {
//     userName.classList.remove("clicked");
//   }
// };
//userName.classList.contains("clicked") => false 이므로(why? html에서 class값 아무에게도 안 줌) 부정의 부정을 사용하기

// userName.onclick = () => {
//   userName.classList.toggle("clicked");
// };
//add / remove / contains => 한방에 toggle 함수 사용
