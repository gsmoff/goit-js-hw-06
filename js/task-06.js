
const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (event) => {
    const { value, dataset } = event.currentTarget;
    if (value.length === Number(dataset.length)) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
        return;
    }
        event.currentTarget.classList.add('invalid');
        event.currentTarget.classList.remove('valid');
});