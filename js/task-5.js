const inputNode = document.querySelector('#name-input');
const outputNode = document.querySelector('#name-output');
const defaultFalue = 'Незнакомец';

inputNode.addEventListener('input', event => {
  outputNode.innerText = event.target.value ? event.target.value : defaultFalue;
})
 
