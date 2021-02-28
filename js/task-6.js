const inputNode = document.querySelector('#validation-input');
const classValid = 'valid';
const classInvalid = 'invalid';

function makeValid() {
    inputNode.classList.remove(classInvalid);
    inputNode.classList.add(classValid);
 };
function makeInvalid() {
    inputNode.classList.remove(classValid);
    inputNode.classList.add(classInvalid);
 };

function makeDefault() {
    inputNode.classList.remove(classInvalid);
    inputNode.classList.remove(classValid);
 }

inputNode.addEventListener('focusout', ({ target }) => {
    if (target.value.length === 6) {
        makeValid();
    } else if (target.value.length === 0) {
        makeDefault();
    } else {
        makeInvalid();
     }
 })