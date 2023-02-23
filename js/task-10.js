function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divControls = document.querySelector("#controls");
const input = divControls.children[0];
const creater = divControls.children[1];
const destroyer = divControls.children[2];

let widthAndHeight = 30;

const create = () => {
  const divElements = [];
  
  for (let i = 0; i < Number(input.value); i += 1) {
    const div = document.createElement("div");
    div.style.width = `${widthAndHeight}px`;
    div.style.height = `${widthAndHeight}px`;
    div.style.backgroundColor = getRandomHexColor();
    divElements.push(div);

    widthAndHeight += 10;

  }
  document.querySelector("#boxes").append(...divElements);
};
const destroy = () => {
  const boxEl = document.querySelector("#boxes").children;
  const toDelite = [];
  for (let i = 0; i < boxEl.length; i += 1) {
    toDelite.push(boxEl[i]);
  }
  toDelite.forEach(element => element.remove());
  widthAndHeight = 30;
};

creater.addEventListener("click", create);
destroyer.addEventListener("click", destroy);