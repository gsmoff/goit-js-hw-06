
const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value;
    console.log(output.textContent);
    if (output.textContent.length === 0) {
        output.textContent = `Anonymous`;
    }
});