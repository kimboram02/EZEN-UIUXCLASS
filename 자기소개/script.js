const btn = document.querySelector(".toggle_btn");
const gnb = document.querySelector(".gnb");
const header = document.querySelector("header");
const scrollToTop = document.querySelector(".scrollToTop");

btn.addEventListener("click", () => {
  gnb.classList.toggle("active");
  btn.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    scrollToTop.classList.add("active");
  } else {
    scrollToTop.classList.remove("active");
  }
});

//scrollTo
$("nav a, .scrollToTop").click(function (e) {
  $.scrollTo(this.hash || 0, 1000);
  e.preventDefault();
});
