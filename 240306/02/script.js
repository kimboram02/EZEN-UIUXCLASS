const member1 = ["HTML", "CSS"];
const member2 = ["CSS", "Javascript", "React"];
const member3 = ["Javascript", "Typescript"];

const subjects = [...member1, ...member2, ...member3]; //데이터 중복 문제

const resultList = new Set(); //set 객체
subjects.forEach((subject) => {
  resultList.add(subject);
});

const result = document.querySelector("#result");
result.innerHTML = `
<ul>
${[...resultList].map((subject) => `<li>${subject}</li>`).join("")} 
</ul>`;
// 원본데이터 복사 : 사본 수정 : map 함수는 배열에서 사용 : join=>문자열 변환
//1)배열의 값을 복제하는 전개연산자 구문 (*원본데이터 값을 유지)
//2)map() : 새로운 배열을 만들고자 할 때 사용
//3)join(구분자) : 배열의 데이터를 문자열로 변환
