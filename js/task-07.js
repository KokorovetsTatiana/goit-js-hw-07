const textEl = document.querySelector('#text');
const slider = document.querySelector('#font-size-control');

slider.addEventListener('input', (event) => {
    textEl.style.fontSize = `${Number(event.currentTarget.value)}px`;
});