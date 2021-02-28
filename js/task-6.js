const inputNode = document.querySelector('#validation-input');
const classValid = 'valid';
const classInvalid = 'invalid';

function classManipulation(add, remove) {
  inputNode.classList.remove(remove);
  inputNode.classList.add(add);
}

function makeValid() {
  classManipulation(classValid, classInvalid);
}

function makeInvalid() {
  classManipulation(classInvalid, classValid);
}

function makeDefault() {
  inputNode.classList.remove(classInvalid);
  inputNode.classList.remove(classValid);
}

inputNode.addEventListener('focusout', ({ target }) => {
  if (target.value.length === parseInt(inputNode.getAttribute('data-length'))) {
    makeValid();
  } else if (target.value.length === 0) {
    makeDefault();
  } else {
    makeInvalid();
  }
});
