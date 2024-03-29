import products from "./products.js";

// const button = document.querySelector("button");
// console.log(button);

// const importData = () => {
//   products.data.map((product) => {
//     const ul = document.querySelector("ul");
//     const li = document.createElement("li");
//     const h3 = document.createElement("h3");
//     li.id = product.id;
//     if (!document.getElementById(product.id)) {
//       h3.innerText = product.name;
//       li.appendChild(h3);
//       ul.appendChild(li);
//     }
//   });
// };
// button.addEventListener("click", importData);

const button = document.querySelector("button");
console.log(button);

const createItem = (product) => {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const span = document.createElement("span");
  const div = document.createElement("div");

  const img = document.createElement("img");
  li.id = product.id;
  const attr = document.createAttribute("src");
  attr.value = product.img;
  img.setAttributeNode(attr);
  h3.innerText = product.name;
  h3.className = "name";
  const price = new Intl.NumberFormat("ko-kr", {
    style: "currency",
    currency: "KRW",
  }).format(product.price);
  span.className = "price";
  span.innerText = product.price;
  div.append(h3, span);
  li.append(div, img);
  ul.appendChild(li);
};

const importData = () => {
  products.data.map((product) => {
    if (!document.getElementById(product.id)) {
      createItem(product);
    }
  });
};
button.addEventListener("click", importData);
