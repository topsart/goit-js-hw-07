const ulNodeRef = document.querySelector('#categories');
const ulChildCountRef = ulNodeRef.childElementCount;
console.log(`В списке ${ulChildCountRef} категории.`);

const nodeList = ulNodeRef.children;
const nodeListArray = Array.from(nodeList);
nodeListArray.forEach(elem => {
    const title = elem.querySelector('h2').innerText;
    const liNodeCount = elem.querySelectorAll('li').length;
    console.group(title);
    console.log('Категория:', title);    
    console.log('Количество элементов:', liNodeCount);
    console.groupEnd();
 })

