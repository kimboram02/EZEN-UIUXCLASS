const btn = document.querySelector(".toggle_btn");
const gnb = document.querySelector(".gnb");

btn.addEventListener("click", () => {
  gnb.classList.toggle("active");
  btn.classList.toggle("active");
});
