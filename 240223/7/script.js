// const itemsP = document.querySelectorAll("p");
// const icons = document.querySelectorAll("span");

// for (let itemP of itemsP) {
//   itemP.addEventListener("click", () => {
//     itemP.parentNode.removeChild(itemP);
//   });
// }

const buttons = document.querySelectorAll("p span");

for (let button of buttons) {
  button.addEventListener("click", function () {
    this.parentNode.remove(this);
  });
}
