const refs = {
  input: document.querySelector("#name-input"),
  nameTitle: document.querySelector("#name-output"),
};
refs.input.addEventListener("input", outputChange);
function outputChange(event) {
  refs.nameTitle.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    refs.nameTitle.textContent = "Anonymous";
  }
}
