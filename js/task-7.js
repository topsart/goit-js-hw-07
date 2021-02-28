const inputNode = document.querySelector('#font-size-control');
const spanNode = document.querySelector('#text');

function changeFontSize(size) {
    spanNode.style.fontSize = size+'px';
};

inputNode.addEventListener('input', ({target}) => {
    changeFontSize(target.value);
 })