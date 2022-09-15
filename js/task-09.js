function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  colorOfBtn: document.querySelector(".change-color"),
  color: document.querySelector(".color"),
  body: document.querySelector("body"),
};
refs.colorOfBtn.addEventListener("click", changeColor);

function changeColor() {
  const currentColor = getRandomHexColor();
  refs.color.textContent = currentColor;
  refs.body.style.backgroundColor = currentColor;
}
