const inputEl = document.querySelector("#validation-input");

const validatorLengthValue = () => {
    if (inputEl.value.trim().length == inputEl.dataset.length) {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
        return;
    }
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
    return;
}

inputEl.addEventListener("blur", validatorLengthValue );