
const menuItemsByClass = document.querySelectorAll(".item");
let productCategoriesName = document.querySelectorAll('h2');
let elements = document.querySelectorAll('li.item > ul');

const listRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${listRef.length}`);
const itemsRef = listRef.forEach(item => {
    // console.log(item);
    console.log(`Category: ${item.querySelector('h2').textContent}`); 
    console.log(`Elements: ${item.querySelectorAll('li').length}`); 
})



















