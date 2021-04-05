const counterRef = document.querySelector('#value');
const decrementRef = document.querySelector('[data-action="decrement"]');
const incrementRef = document.querySelector('[data-action="increment"]');

decrementRef.addEventListener('click', onDecrementCounter);
incrementRef.addEventListener('click', onIncrementCounter);

function onDecrementCounter() {
    let number = Number(counterRef.textContent);
    if (number > 0) {
        number -= 1;
        counterRef.textContent = number;
    }
};

function onIncrementCounter() {
    let number = Number(counterRef.textContent);
    number += 1;
    counterRef.textContent = number;
};