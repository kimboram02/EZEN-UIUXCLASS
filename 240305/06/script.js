const player = document.querySelector(".player");
const playButton = document.querySelector(".play-pause");
const video = document.querySelector("video");
const volumeBar = document.querySelector("input[type='range']");
const rateButtons = document.querySelectorAll(".rate");
const progressCover = document.querySelector(".progress");

const videoPoint = (e) => {
  const mouseX = e.pageX - player.offsetLeft;
  const width = progressCover.clientWidth;
  const duration = video.duration;
  const clickedTime = (mouseX / width) * duration;
  video.currentTime = clickedTime;
};

//영상재생구간 / 전체 총 영상시간 * 전체총길이
const updataProgress = () => {
  const progressBar = document.querySelector(".bar");
  const progressPointer = document.querySelector(".circle");
  const currentTime = video.currentTime;
  const duration = video.duration;
  const percent = (currentTime / duration) * 100;
  progressBar.style.width = `${percent}%`;
  const progressBarWidth = progressCover.clientWidth; //해당요소의 전체 총 width값
  const newPosition = (currentTime / duration) * progressBarWidth - 1;
  progressPointer.style.left = `${newPosition}px`;
};

const setRate = (e) => {
  const { rate } = e.target.dataset;
  // const rate = e.target.dataset.rate;
  video.playbackRate = rate;
};

const formatting = (time) => {
  const sec = Math.floor(time % 60);
  const min = Math.floor(time / 60);
  const hour = Math.floor(time / 3600); //60*60
  const fsec = sec < 10 ? `0${sec}` : sec;
  const fmin = min < 10 ? `0${min}` : min;
  const fHour = hour < 10 ? `0${hour}` : hour;
  return `${fHour}:${fmin}:${fsec}`;
};
//currentTime
//duration
const updateTime = () => {
  const current = document.querySelector(".current");
  const duration = document.querySelector(".duration");

  current.innerText = formatting(video.currentTime);
  duration.innerText = formatting(video.duration); // console.log(e) 통해서 확인 : target부터 확인하기
};

const setVolume = (e) => {
  video.volume = e.target.value;
};

const play = () => {
  playButton.innerText = "∥"; //ㄱ한자
  video.play();
};
const pause = () => {
  playButton.innerText = "▶";
  video.pause();
};

const togglePlay = () => {
  video.paused ? play() : pause();
};

playButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateTime);
video.addEventListener("timeupdate", updataProgress);
volumeBar.addEventListener("change", setVolume);
rateButtons.forEach((Button) => {
  Button.addEventListener("click", setRate);
});
progressCover.addEventListener("click", videoPoint);
