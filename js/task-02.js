const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ul = document.querySelector('ul');

const newArray = [];

ingredients.forEach(ingredient => {
    const liEl = document.createElement('li');
    liEl.textContent = ingredient;
    newArray.push(liEl);
});

ul.append(...newArray);