const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = [];

const createElement = (element, text, classForElement) => {
    const createdEl = document.createElement(element);
    createdEl.classList.add(classForElement);
    createdEl.textContent = text;

  
    return createdEl;

}

ingredients.forEach(ingridient => ingredientsEl.push(createElement("li", ingridient, "item")));

document.querySelector("#ingredients").prepend(...ingredientsEl);