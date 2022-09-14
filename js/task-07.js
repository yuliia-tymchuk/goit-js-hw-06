const refs = {
  input: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};
refs.text.style.fontSize = `${refs.input.value}px`;

const changeText = (event) => {
  refs.text.style.fontSize = `${event.currentTarget.value}px`;
};

refs.input.addEventListener("input", changeText);
