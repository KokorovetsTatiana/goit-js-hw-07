const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', onInputName);

function onInputName() {
    if (inputName.value !== '') {
        outputName.textContent = inputName.value;
    } else {
        outputName.textContent = 'незнакомец';
    }
};