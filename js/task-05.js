const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.oninput = function () {
    outputName.innerHTML = inputName.value;
};

function onInputBlur() {
    if (inputName.value === '') {
        outputName.textContent = 'незнакомец';
    }
};

inputName.addEventListener('blur', onInputBlur);