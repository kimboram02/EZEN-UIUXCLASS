const str1 = "good morning, everyone/ beautiful morning.";
console.log(str1.indexOf("morning")); //5
console.log(str1.indexOf("evening")); //-1 : 존재하지 않은 단어는 -1 출력
// console.log(str1.indexOf("morning", firstIndex + 1)); //쌤 확인중

const str2 = "hello, everyone";
console.log(str2.startsWith("hello")); //해당 문자열로 문자가 시작되는지 여부 확인 true, false
console.log(str2.startsWith("Hello")); // JS 에선 소문자 대문자 구분
console.log(str2.startsWith("he"));
console.log(str2.startsWith("hello, ev"));
console.log(str2.startsWith("el", 1)); //인덱스 1에서 시작되는 문자열
console.log(str2.startsWith("o", 4));

console.log(str2.endsWith("everyone"));
console.log(str2.endsWith("everyone."));
console.log(str2.endsWith("Everyone."));
console.log(str2.endsWith("one"));
console.log(str2.endsWith("lo, everyone"));

console.log(str2.includes("every"));
console.log(str2.includes("one"));
console.log(str2.includes("One"));

const str3 = "ab cd ef";
const str_3 = " ab cd ef ";
console.log(str3);
console.log(str_3);
console.log(str_3.trim());
console.log(str_3.trimStart());
console.log(str_3.trimEnd());

//uppercase / lowercase

let str4 = "Good Morning";
console.log(str4.toUpperCase());
console.log(str4.toLowerCase());

//substring
console.log(str4.substring(5, 8)); //인덱스 5~7 찾아옴
console.log(str4.substring(5)); //인덱스 5부터 끝까지 찾아옴
console.log(str4.substring(-5, 11)); //음수값을 전혀 인식하지 못함 => 음수값이 들어오는 순간 바로 0으로 치환

//slice
console.log(str4.slice(0, 4));
console.log(str4.slice(0));
console.log(str4.slice(-5, 11)); //뒤에서부터 -1

//split
const str5 = "hello everyone";
const array1 = str5.split(" ");
const array2 = str5.split("");
console.log(array1);
console.log(array2);
