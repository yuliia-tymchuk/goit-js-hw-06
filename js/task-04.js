let counterValue = 0;
const refs = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  valueEl: document.querySelector("#value"),
};
refs.decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  refs.valueEl.textContent = counterValue;
});
refs.incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  refs.valueEl.textContent = counterValue;
});
