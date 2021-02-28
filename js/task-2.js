const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const tempNode = document.createDocumentFragment();
ingredients.forEach(ingredient => {
  const liElemNode = document.createElement('li');
  liElemNode.innerText = ingredient;
  tempNode.appendChild(liElemNode);
});
 
const ulNode = document.querySelector('#ingredients');
ulNode.appendChild(tempNode);