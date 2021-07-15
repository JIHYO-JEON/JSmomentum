const bg = document.getElementById("background");
const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const chosenImage = images[Math.floor(Math.random() * images.length)]; // 0~2
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bg.appendChild(bgImage);
// append: last
// prepend: first