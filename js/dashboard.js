document.addEventListener("DOMContentLoaded", () => {

if (typeof protectPage === "function") {
  protectPage();
}

const user = getLoggedInUser();

if (!user) {
  console.error("No logged in user");
}
// Name
document.querySelectorAll(".user-name").forEach(el => {
  el.innerText = user.name;
});

// UserName
document.querySelectorAll(".username").forEach(el => {
  el.innerText = user.username;
});

// RETIREMENT NEXT OF KIN
document.querySelectorAll(".NOK").forEach(el => {
  el.innerText = user.nok;
});

// Profile image
const imgEl = document.getElementById("userImage");
if (imgEl && user.userImage) {
  imgEl.src = user.userImage;
}

// Balances
document.querySelectorAll(".btc-balance").forEach(el => {
  el.innerText = "$" + user.balances.btc.toLocaleString();
});
document.querySelectorAll(".eth-balance").forEach(el => {
  el.innerText = "$" + user.balances.eth.toLocaleString();
});
document.querySelectorAll(".visa-balance").forEach(el => {
  el.innerText = "$" + user.balances.visa.toLocaleString();
});

// Personal Details
document.querySelectorAll(".age").forEach(el => {
  el.innerText = user.personalDetails.age.toLocaleString();
});
document.querySelectorAll(".gender").forEach(el => {
  el.innerText = user.personalDetails.gender.toLocaleString();
});
document.querySelectorAll(".nationality").forEach(el => {
  el.innerText = user.personalDetails.nationality.toLocaleString();
});
document.querySelectorAll(".address").forEach(el => {
  el.innerText = user.personalDetails.address.toLocaleString();
});

// Amount Currency
document.querySelectorAll(".left-money-name").forEach(el => {
  el.innerText = user.amountType.left.toLocaleString();
});
document.querySelectorAll(".middle-money-name").forEach(el => {
  el.innerText = user.amountType.middle.toLocaleString();
});
document.querySelectorAll(".right-money-name").forEach(el => {
  el.innerText = user.amountType.right.toLocaleString();
});


console.log("USER:", user);
console.log("DEPOSITS:", user.deposits);

const depositContainer = document.getElementById("depositList");

if (depositContainer && user.deposits) {

  // keep the add button
  const addBtn = depositContainer.querySelector(".badger");

  // clear everything
  depositContainer.innerHTML = "";

  // put back the add button first
  if (addBtn) {
    depositContainer.appendChild(addBtn);
  }

  // now add deposits
  user.deposits.forEach(deposit => {
    const div = document.createElement("div");
    div.className = "badger";

    div.innerHTML = `
      <span class="bg-primary"></span>
      <div>
        <h5>${deposit.month}</h5>
        <h4>+$${deposit.amount}</h4>
      </div>
    `;

    depositContainer.appendChild(div);
  });

}


// ================================
// CURRENCY LOGOS (CLEAN VERSION)
// ================================
const currencyRight = document.getElementById("currencyright");
if (currencyRight && user.image.right) {
  currencyRight.src = user.image.right;
}

const currencyMiddle = document.getElementById("currencymiddle");
if (currencyMiddle && user.image.middle) {
  currencyMiddle.src = user.image.middle;
}

const currencyLeft = document.getElementById("currencyleft");
if (currencyLeft && user.image.left) {
  currencyLeft.src = user.image.left;
}


// ================================
// PLAN LOGO (CLEAN VERSION)
// ================================
document.querySelectorAll(".plan-logo").forEach(img => {
  if (user.userPlanlogo) img.src = user.userPlanlogo;
});


// plan Name
document.querySelectorAll(".planname").forEach(el => {
  el.innerText = user.userPlanName.toLocaleString();
});

// Saving Type/  Risk Level/ Expected Returns
document.querySelectorAll(".period").forEach(el => {
  el.innerText = user.planDetails.period.toLocaleString();
});
document.querySelectorAll(".risk").forEach(el => {
  el.innerText = user.planDetails.risk.toLocaleString();
});
document.querySelectorAll(".returns").forEach(el => {
  el.innerText = user.planDetails.return.toLocaleString();
});





  const retirementForm = document.getElementById("retirementForm");
  const childForm = document.getElementById("childForm");

  if (retirementForm && childForm) {

    retirementForm.classList.add("hidden");
    childForm.classList.add("hidden");

    console.log("Plan:", user.plan);

    if (user.plan === "retirement") {
      retirementForm.classList.remove("hidden");
    }

    if (user.plan === "childMarriage") {
      childForm.classList.remove("hidden");
    }

  }







    const overlay = document.getElementById("nokOverlay");
  const closeBtn = document.getElementById("closeOverlay");

  if (!user) return;

  // Only for retirement plan
  if (user.plan !== "retirement") return;

  const formKey = `nokFormCompleted_${user.username}`;
  const formCompleted = localStorage.getItem(formKey);

  // ✅ ONLY condition that matters
  if (!formCompleted) {
    overlay.style.display = "flex";
  }

  // ❌ This now ONLY hides temporarily (no saving)
  closeBtn.addEventListener("click", function () {
    overlay.style.display = "none";
  });

  // Optional: click outside to close temporarily
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) {
      overlay.style.display = "none";
    }
  });




  });





