const input = document.querySelector("#name-input");

input.addEventListener("input", () => document.querySelector("#name-output").textContent = input.value.trim());