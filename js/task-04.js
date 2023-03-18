const valueEl = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

incrementBtn.addEventListener("click", () => {
  counterValue++;
  valueEl.textContent = counterValue;
});

decrementBtn.addEventListener("click", () => {
  counterValue--;
  valueEl.textContent = counterValue;
});
