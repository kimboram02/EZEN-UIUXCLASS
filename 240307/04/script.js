const xhr = new XMLHttpRequest();

xhr.open("GET", "student.json", true); //동기처리 => true
xhr.send(); //요청하기
console.log(xhr);

const rendeHTML = (students) => {
  let output = "";
  students.forEach((student) => {
    output += `<h2>${student.name}</h2><ul><li> 전공 : ${student.major}</li><li> 학년 : ${student.grade}</li></ul> <hr/>`;
  });
  document.querySelector("#result").innerHTML = output;
};

xhr.onreadystatechange = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const students = JSON.parse(xhr.responseText);
    rendeHTML(students);
  }
};
