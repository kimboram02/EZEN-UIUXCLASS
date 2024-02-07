$("nav a").click(function (e) {
  $.scrollTo(this.hash || 0, 1500);
  e.preventDefault(); /*a 기본적인 속성값을 방지*/
});
