'use strict';

const valueRef = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let counterValue = Number(valueRef.textContent);

function onClickIncrement() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}

function onClickDecrement() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}

incrementBtn.addEventListener('click', onClickIncrement);
decrementBtn.addEventListener('click', onClickDecrement);
