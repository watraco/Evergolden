const user = getLoggedInUser();

if (user && user.savingprogress) {
  const saved = user.savingprogress.saved;
  const goal = user.savingprogress.goal;

  const percent = Math.min((saved / goal) * 100, 100).toFixed(0);

  document.getElementById("progressFill").style.width = percent + "%";
  document.getElementById("percentText").textContent = percent + "%";
  document.getElementById("progressText").textContent =
    `$${saved.toLocaleString()} of $${goal.toLocaleString()}`;

  // User name
  document.querySelector(".user-name").textContent = user.name;
}

