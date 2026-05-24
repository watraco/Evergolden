const form = document.getElementById("createUserForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const data = new FormData(form);

  const newUser = {
    username: data.get("username"),
    password: data.get("password"),
    name: data.get("name"),

    balances: {
      btc: Number(data.get("btc")),
      eth: Number(data.get("eth")),
      visa: Number(data.get("visa"))
    },

    savingprogress: {
      saved: Number(data.get("saved")),
      goal: Number(data.get("goal"))
    },

    amountType: {
      right: "DOLLAR",
      middle: "BTC",
      left: "EURO"
    },

    image: {
      right: "",
      middle: "images/BTC.png",
      left: ""
    },

    userImage: data.get("userImage"),
    userPlanlogo: data.get("planLogo"),

    planDetails: {
      period: data.get("period"),
      risk: data.get("risk"),
      return: data.get("returns")
    },

    personalDetails: {
      age: Number(data.get("age")),
      gender: data.get("gender"),
      nationality: data.get("nationality"),
      address: data.get("address")
    },

    plan: data.get("plan"),
    nok: data.get("nok") || ""
  };

  console.log("NEW USER:", newUser);

  // 👉 SAVE TO LOCAL STORAGE
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  alert("User Created ✅");
  form.reset();
});