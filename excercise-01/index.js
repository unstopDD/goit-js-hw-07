'use strict';

const listRef = document.querySelector('#categories');

console.log(`В списке ${listRef.children.length} категории`);

const itemRef = document.querySelectorAll('.item');

itemRef.forEach(item =>
  console.log(
    `Категория: ${item.children[0].textContent} 
    Количество элементов: ${item.children[1].children.length}`,
  ),
);
