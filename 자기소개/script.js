const btn = document.querySelector(".toggle_btn");
const gnb = document.querySelector(".gnb");
btn.addEventListener("click", () => {
  gnb.classList.toggle("active");
  btn.classList.toggle("active");
});

$("nav a").click(function (e) {
  $.scrollTo(this.hash || 0, 1500);
  e.preventDefault(); /*a 기본적인 속성값을 방지*/
});
