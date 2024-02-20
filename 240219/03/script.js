const imgTag = document.querySelector("img");
let num = 1;

const gallery = (direct) => {
  if (direct) {
    if (num === 9) return;
    num++;
  } else {
    if (num === 1) return;
    num--;
  }
  //0 : false / 1 : true
  imgTag.setAttribute("src", `./images/pic_${num}.jpg`);
};
