'use strict';

const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

function changeFontSize(event) {
  const inputValue = event.target.value;
  textRef.style.fontSize = ` ${inputValue}px`;
}
inputRef.addEventListener('change', changeFontSize);
