


const BtnRef = document.querySelector('.change-color');
const span = document.querySelector('.color');
const body = document.querySelector("body");

  BtnRef.addEventListener('click', () => {
    // console.log('btn color');
    console.log(getRandomHexColor());
    const bodyColor = getRandomHexColor();
    body.style.color = bodyColor;
    span.textContent = bodyColor;
  })
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
