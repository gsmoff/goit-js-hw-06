

const slider = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

slider.addEventListener('input', function () {
    const size = slider.value;
    span.style.fontSize = size + "px";
    // console.log(size + "px");
});