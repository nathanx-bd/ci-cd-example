const clickMeButton = document.getElementById("click-me-btn");
const clickCountSpan = document.getElementById("click-count");
const image = document.getElementById("centered-image");
let count = 0;
let images = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/TikTok_CEO_Shou_Zi_Chew.jpg/440px-TikTok_CEO_Shou_Zi_Chew.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/TrumpPortrait.jpg/1920px-TrumpPortrait.jpg",
    "dong.jpeg",
];
// setImage(count);
clickMeButton.addEventListener("click", () => {
    // setImage(count);
    count = sum(count, 1);
    clickCountSpan.innerHTML = count.toString();
});
function setImage(index) {
    image.src = images[index % images.length];
}
export function sum(a, b) {
    return a + b;
}
