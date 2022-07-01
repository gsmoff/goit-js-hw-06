let counterValue = 0;
const valueRef = document.querySelector("#value");
// console.log(valueRef);
const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
// console.log(decrementBtnRef);
const incrementBtnRef = document.querySelector('button[data-action="increment"]');
// console.log(incrementBtnRef);
decrementBtnRef.addEventListener('click', () => {
    console.log('btn decrement');
    counterValue -= 1;
    // console.log(counterValue);
    valueRef.textContent = counterValue;
})
incrementBtnRef.addEventListener('click', () => {
    console.log('btn increment'); 
    counterValue += 1;
    // console.log(counterValue);
    valueRef.textContent = counterValue;
})

