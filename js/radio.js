  const planRadios = document.querySelectorAll('input[name="plan"]');
const goalSection = document.getElementById('goalSection');
const legacySection = document.getElementById('legacySection');


planRadios.forEach(radio => {
  radio.addEventListener('change', () => {
    goalSection.style.display =
      radio.value === 'goal' ? 'block' : 'none';
  });
});

planRadios.forEach(radio => {
  radio.addEventListener('change', () => {
    legacySection.style.display =
      radio.value === 'legacy' ? 'block' : 'none';
  });
});
