'use strict';

const inputRef = document.querySelector('#validation-input');

function onInputBlur(event) {
  const dataLength = Number(inputRef.getAttribute('data-length'));
  const inputLength = event.target.value.length;
  const input = event.target;
  if (inputLength === dataLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}

inputRef.addEventListener('blur', onInputBlur);
