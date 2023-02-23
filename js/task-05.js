const input = document.querySelector("#name-input");

input.addEventListener("input", () => input.value.trim().length === 0 ? document.querySelector("#name-output").textContent = "Anonymous" : document.querySelector("#name-output").textContent = input.value.trim());
