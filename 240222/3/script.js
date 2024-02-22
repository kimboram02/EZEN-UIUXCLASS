document.body.addEventListener("keydown", (e) => {
  const result = document.querySelector(".result");
  result.innerText = `
code: ${e.code},
key: ${e.key}
`;
});
//keydown은 전체를 찾아오고자 하는 목적이 아닌 매칭 등을 알고자 할 떼 => 전체는 value 씀
