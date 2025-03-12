import { sum } from "./sum";

const clickMeButton = document.getElementById(
  "click-me-btn"
) as HTMLButtonElement;
const clickCountSpan = document.getElementById(
  "click-count"
) as HTMLSpanElement;

const image = document.getElementById("centered-image") as HTMLImageElement;

let count = 0;
const images = ["images/shou.jpg", "images/albanese.jpg", "images/dong.jpg"];
setImage(count);

clickMeButton.addEventListener("click", () => {
  count = sum(count, 1);
  clickCountSpan.innerHTML = count.toString();
  setImage(count);
});

function setImage(index: number) {
  image.src = images[index % images.length];
}
