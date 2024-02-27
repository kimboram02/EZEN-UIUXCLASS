// 오늘 옆에 있는 친구들과 점심을 먹기로 함
// 메뉴 후보: 짜장면, 돈가스, 부대찌개, 회덮밥, 마라탕
// 상기 메뉴 중 랜덤으로 1개 메뉴를 선택해서 웹 브라우저에 출력될 수 있도록 코드 작성

const menu = ["짜장면", "돈가스", "부대찌개", "회덮밥", "마라탕"];
const menuNum = Math.floor(Math.random(menu) * menu.length);
const result = menu[menuNum];
document.write(result);
