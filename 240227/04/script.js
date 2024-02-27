window.onload = () => {
  const bgCount = 5;
  const randomNumber = Math.ceil(Math.random() * bgCount);
  document.body.style.backgroundImage = `url(images/bg-${randomNumber}.jpg)`;
}; //랜덤으로 사진 배경
