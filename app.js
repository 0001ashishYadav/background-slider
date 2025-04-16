const mainEl = document.querySelector(".main");
const imgEl = document.querySelector(".img-con img");

const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

const imgArr = [
  "./assets/img-1.jpg",
  "./assets/img-2.jpg",
  "./assets/img-3.jpeg",
  "./assets/img-4.jpg",
  "./assets/img-5.jpg",
  "./assets/img-6.jpg",
  "./assets/img-7.jpeg",
];

let i = 0;

nextBtn.addEventListener("click", () => {
  i++;
  setImg();
});
prevBtn.addEventListener("click", () => {
  i--;
  setImg();
});

function setImg() {
  if (i < 0) {
    i = imgArr.length - 1;
  }

  if (i > imgArr.length - 1) {
    i = 0;
  }

  imgEl.src = imgArr[i];
  mainEl.style.backgroundImage = `linear-gradient( rgba(0,0,0,0.775), rgba(0,0,0,0.775),rgba(0,0,0,0.775)), url(${imgArr[i]})`;
}
