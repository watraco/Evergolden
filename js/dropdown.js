document.addEventListener("DOMContentLoaded", () => {

  const dropdown = document.querySelector(".select-bank-dropdown");
  const input = document.getElementById("select-bank-dropdownInput");
  const menu = document.getElementById("dropdownMenu");
  const selectedValue = document.getElementById("selectedValue");

  // ❌ If dropdown doesn't exist on this page → STOP everything safely
  if (!dropdown || !input || !menu || !selectedValue) return;

  // OPEN / CLOSE DROPDOWN
  input.addEventListener("click", () => {
    dropdown.classList.toggle("open");
  });

  // SELECT OPTION
  menu.querySelectorAll("li").forEach(item => {
    item.addEventListener("click", () => {
      selectedValue.textContent = item.dataset.value;
      selectedValue.style.color = "#111";
      dropdown.classList.remove("open");
    });
  });

  // CLOSE WHEN CLICKING OUTSIDE
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("open");
    }
  });

});