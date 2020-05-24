'use strict';

const inputRef = document.querySelector('input');
const rendrBtn = document.querySelector('button[ data-action="render"]');
const destroyBtn = document.querySelector('button[ data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

let width = 30;
let height = 30;
let boxRef = [];

const createBox = () => {
  const divRef = document.createElement('div');
  const randomColor =
    // eslint-disable-next-line prefer-template
    Math.floor(Math.random() * 256) +
    ',' +
    Math.floor(Math.random() * 256) +
    ',' +
    Math.floor(Math.random() * 256);
  divRef.style.width = `${width}px`;
  divRef.style.height = `${height}px`;
  divRef.style.backgroundColor = `rgb(${randomColor})`;
  return divRef;
};

const createBoxes = amount => {
  for (let i = 0; i < amount; i += 1) {
    boxRef.push(createBox());
    width += 10;
    height += 10;
  }
  boxesRef.append(...boxRef);
};

rendrBtn.addEventListener('click', () => {
  createBoxes(Number(inputRef.value));
});

destroyBtn.addEventListener('click', () => {
  while (boxesRef.firstChild) {
    boxesRef.firstChild.remove();
  }
  boxRef = [];
  width = 30;
  height = 30;
});
