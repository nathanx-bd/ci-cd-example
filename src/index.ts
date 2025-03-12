import { sum } from "./sum";

const clickMeButton = document.getElementById(
  "click-me-btn"
) as HTMLButtonElement;
const clickCountSpan = document.getElementById(
  "click-count"
) as HTMLSpanElement;

const image = document.getElementById("centered-image") as HTMLImageElement;

let count = 0;
const images = ["images/shou.jpg", "images/trump.jpg", "images/dong.jpg"];

clickMeButton.addEventListener("click", () => {
  setImage(count);
  count = sum(count, 1);
  clickCountSpan.innerHTML = count.toString();
});

function setImage(index: number) {
  image.src = images[index % images.length];
}
