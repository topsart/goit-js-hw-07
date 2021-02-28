const state = {
  boxWidth: 30,
  boxHeight: 30,
  boxesHtml: '',
};

const nodes = {
  input: document.querySelector('#controls input'),
  boxes: document.querySelector('#boxes'),
};

const buttons = {
  render: document.querySelector('button[data-action="render"]'),
  destroy: document.querySelector('button[data-action="destroy"]'),
};

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    state.boxesHtml += `<div class="inserted" style="${getInlineCssString()}"></div>`;
    state.boxWidth += 10;
    state.boxHeight += 10;
  }
}

function destroyBoxes() {
  state.boxesHtml = '';
  nodes.boxes.innerHTML = state.boxesHtml;
  state.boxWidth = 30;
  state.boxHeight = 30;
}

const getInlineCssString = () => `
  background: ${getRandomRgbString()}; 
  width: ${state.boxWidth}px; height: ${state.boxHeight}px`;

const getRandomNumber = () => Math.floor(Math.random() * 255);

const getRandomRgbString = () =>
  `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;

const render = () =>
  nodes.boxes.insertAdjacentHTML('beforeend', state.boxesHtml);

buttons.render.addEventListener('click', () => {
  createBoxes(nodes.input.value);
  render();
});

buttons.destroy.addEventListener('click', () => {
  destroyBoxes();
  render();
});
