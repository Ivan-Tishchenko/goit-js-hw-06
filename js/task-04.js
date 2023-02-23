let counterValue = 0;
const decrementBtn = document.querySelector("[data-action=decrement]");
const incrementBtn = document.querySelector("[data-action=increment]");

document.querySelector("#value").textContent = counterValue;

incrementBtn.addEventListener("click", () => document.querySelector("#value").textContent = counterValue += 1);
decrementBtn.addEventListener("click", () => document.querySelector("#value").textContent = counterValue -= 1);
