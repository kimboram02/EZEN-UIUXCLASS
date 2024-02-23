// const newP = document.createElement("p"); //태그노드
// const textNode = document.createTextNode("Typescript"); //텍스트노드

// document.body.appendChild(newP);
// newP.appendChild(textNode);

// const orderButton = document.querySelector("#order");
// const title = document.querySelector("#container h2");
// const orderInfo = document.querySelector("#orderInfo");

// orderButton.addEventListener(
//   "click",
//   () => {
//     const newP = document.createElement("p");
//     const textNode = document.createTextNode(title.innerText); //해당변수를 객체로 받아옴
//     console.log(textNode);
//     newP.appendChild(textNode);
//     newP.style.fontSize = "1.2rem";
//     newP.style.color = "crimson";
//     orderInfo.appendChild(newP);
//   },
//   { once: true }
// );

const newImg = document.createElement("img");
const srcNode = document.createAttribute("src");
srcNode.value =
  "https://i.namu.wiki/i/R0AhIJhNi8fkU2Al72pglkrT8QenAaCJd1as-d_iY6MC8nub1iI5VzIqzJlLa-1uzZm--TkB-KHFiT-P-t7bEg.webp";
newImg.setAttributeNode(srcNode);
document.body.appendChild(newImg);
console.log(newImg);
