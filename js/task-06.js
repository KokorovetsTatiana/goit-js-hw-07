const inputText = document.querySelector('#validation-input');

inputText.addEventListener('change', onInputChange);

function onInputChange(event) {
    const textLength = event.currentTarget.value.length;
    if (textLength === Number(inputText.getAttribute('data-length'))) {
        inputText.classList.remove('invalid');
        inputText.classList.add('valid');
    } else
        inputText.classList.add('invalid');
}