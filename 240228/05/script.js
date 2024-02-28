//원기둥의 부피 = 밑면적 * 높이
//밑면적 = 파이 * (지름 / 2)^2
//생성자 함수 혹은 클래스를 활용해서 코드작성

// function Cylinder(cyldiameter, cylheight) {
//   this.diameter = cyldiameter;
//   this.height = cylheight;
//   this.getVolume = function () {
//     let radius = this.diameter / 2;
//     return (Math.PI * radius * radius * this.height).toFixed(2);
//   };
// }
// const cylinder = new Cylinder(8, 10);
// console.log(`원기둥의 부피는 ${cylinder.getVolume()} 입니다`);
const button = document.querySelector("input[type='submit']");
const result = document.querySelector("#result");
const form = document.querySelector("form");
console.log(button);

class Cylinder {
  constructor(cylinerDiameter, cylinderHight) {
    this.dismeter = cylinerDiameter;
    this.height = cylinderHight;
  }
  getVolume() {
    this.radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2);
  }
}

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const diameter = document.querySelector("#cyl-diameter").value; //value 속성 요소가 이벤트 안에 있어야 함
//   const height = document.querySelector("#cyl-height").value;

//   if (diameter === "" || height === "") {
//     result.innerText = `지름값과 높이값을 입력하세요`;
//   } else {
//     // console.log(typeof diameter); //string : 형변환
//     const cylinder = new Cylinder(parseInt(diameter), parseInt(height)); //number 숫자로 변환
//     result.innerText = `원기둥의 부피는 ${cylinder.getVolume()} 입니다}`;
//   }
// });

let diameter = document.querySelector("#cyl-diameter");
let height = document.querySelector("#cyl-height");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const diameterValue = diameter.value;
  const heightValue = height.value;

  if (diameterValue === "" || heightValue === "") {
    result.innerText = `지름값과 높이값을 입력하세요`;
  } else {
    const cylinder = new Cylinder(
      parseInt(diameterValue),
      parseInt(heightValue)
    );

    result.innerText = `원기둥의 부피는 ${cylinder.getVolume()} 입니다}`;
  }
  diameter = "";
  height = "";
});
