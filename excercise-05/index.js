'use strict';

const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

function onInputText(event) {
  outputRef.textContent = event.target.value;
}

inputRef.addEventListener('input', onInputText);
