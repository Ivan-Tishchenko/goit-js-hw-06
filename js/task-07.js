const controlInput = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
text.style.fontSize = `${controlInput.value}px`;




controlInput.addEventListener("input", () => text.style.fontSize = `${controlInput.value}px`);