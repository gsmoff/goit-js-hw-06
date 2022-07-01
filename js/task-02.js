const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients');
// console.log(listRef);
const liEl = document.createElement('li');

let newLeEl = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const liEl = document.createElement('li');
  liEl.textContent = ingredients[i];
  // console.log(liEl);
  newLeEl.push(liEl)
  // console.log(newLeEl);
}

listRef.append(...newLeEl); 
console.log(listRef);

