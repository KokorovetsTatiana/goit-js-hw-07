const categoriesEl = document.querySelector('ul');
console.log(`В списке ${categoriesEl.children.length} категории.`);


const items = document.querySelectorAll('.item');
items.forEach(item =>
    console.log(`Категория: ${item.firstElementChild.textContent}. 
Количество элементов: ${item.lastElementChild.childElementCount}.`)   
)