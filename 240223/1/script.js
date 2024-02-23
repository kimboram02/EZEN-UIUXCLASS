const icons = document.querySelectorAll(".sns a"); //nodelist => 배열 아니지만 이해하기 싶게 배열이라고 말씀하심
console.log(icons);
//e를 준 이유? 이벤트 발생하면 다섯개중에 어디인지를 모르니까
//target 주면 망함 => 이벤트 전파로 인해
for (let icon of icons) {
  icon.addEventListener("mouseover", (e) => {
    e.currentTarget.querySelector(".fa-brands").classList.add("active");
  });
  icon.addEventListener("mouseleave", (e) => {
    e.currentTarget.querySelector(".fa-brands").classList.remove("active");
  });
}
