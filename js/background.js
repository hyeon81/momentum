const images = [
  "aurora-gbb590dde7_1920.jpg",
  "forest-g80ba3281f_1920.jpg",
  "road-g76afe9804_1920.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
// img 태그를 body에 추가
document.body.appendChild(bgImage);