document.addEventListener("DOMContentLoaded", () => {

  if (typeof protectPage === "function") {
    protectPage();
  }

  const user = getLoggedInUser();
  if (!user || !user.deposits) {
    console.error("No user or deposits found");
    return;
  }

  const canvas = document.getElementById("chart");
  if (!canvas) {
    console.error("Canvas not found");
    return;
  }

  const ctx = canvas.getContext("2d");

  // ✅ GENERATE savingsByMonth FROM deposits
  const savingsByMonth = {};
  let total = 0;

  user.deposits.forEach(d => {
    total += d.amount;
    savingsByMonth[d.month] = total;
  });

  // ✅ extract for chart
  const months = Object.keys(savingsByMonth);
  const amounts = Object.values(savingsByMonth);

  // 🎯 CREATE CHART
  new Chart(ctx, {
    type: "line",
    data: {
      labels: months,
      datasets: [{
        label: `${user.name}'s Savings`,
        data: amounts,
        borderColor: "gold",
        backgroundColor: "rgba(255, 215, 0, 0.35)",
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "#fff",
        pointBorderColor: "gold",
        pointHoverRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: user.savingprogress?.goal || 20000
        }
      }
    }
  });

});