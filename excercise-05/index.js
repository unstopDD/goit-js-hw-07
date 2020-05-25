'use strict';

const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

function onInputText(event) {
  outputRef.textContent = event.target.value;
  if (event.target.value === '') {
    outputRef.textContent = 'Hезнакомец';
  }
}

inputRef.addEventListener('input', onInputText);
