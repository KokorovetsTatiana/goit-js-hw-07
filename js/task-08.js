const renderEl = document.querySelector('[data-action="render"]');
const destroyEl = document.querySelector('[data-action="destroy"]');
const amountEl = document.querySelector('input');
const placeToInsert = document.querySelector('#boxes');

renderEl.addEventListener('click', createBoxes);
destroyEl.addEventListener('click', destroyBoxes);
amountEl.addEventListener('input', destroyBoxes);

function createBoxes() {
    const boxAmount = amountEl.value;
    let width = 20;
    for (let i = 1; i <= boxAmount; i += 1) {
        function getRandomColor(max) {
        return Math.floor(Math.random() * Math.floor(max));
        };
        let red = getRandomColor(255);
        let green = getRandomColor(255);
        let blue = getRandomColor(255);
        
        const box = document.createElement('div');
        box.classList.add('newClass');
        width += 10;
        box.style.width = `${width}px`;
        box.style.height = `${width}px`;
        box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

        placeToInsert.appendChild(box);
    }; 
};

function destroyBoxes() {
    const elToRemove = document.getElementsByClassName('newClass');
    while (elToRemove[0]) {
        elToRemove[0].remove();
    };
};