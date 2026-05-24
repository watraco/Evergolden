const input = document.getElementById("amountInput");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");

const step = 5;
const minAmount = 0;

/* Extract number from "$ 70" */
function getAmount() {
  const num = parseInt(input.value.replace(/[^0-9]/g, ""), 10);
  return Math.max(minAmount, isNaN(num) ? 0 : num);
}

/* Set formatted value */
function setAmount(value) {
  input.value = `$ ${value}`;
}

/* Plus button */
plusBtn.addEventListener("click", () => {
  setAmount(getAmount() + step);
});

/* Minus button */
minusBtn.addEventListener("click", () => {
  setAmount(Math.max(minAmount, getAmount() - step));
});

/* Typing validation */
input.addEventListener("input", () => {
  const amount = getAmount();
  setAmount(amount);
});

/* Optional: prevent typing letters */
input.addEventListener("keydown", (e) => {
  if (
    !/[0-9]/.test(e.key) &&
    !["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key)
  ) {
    e.preventDefault();
  }
});
