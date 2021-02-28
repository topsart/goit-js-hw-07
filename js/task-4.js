let counterValue = 0;
function increment() {
    counterValue++;
 }; 
function decrement() {
    counterValue--;
};
 
function render() {
    spanNode.innerText = counterValue;
};

const spanNode = document.querySelector('#value');
const incrementBtn = document.querySelector('button[data-action=increment]');
const decrementBtn = document.querySelector('button[data-action=decrement]');

incrementBtn.addEventListener('click', () => {
    increment();
    render();
});

decrementBtn.addEventListener('click', () => {
    decrement();
    render();
});
