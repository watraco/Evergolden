// Get logged-in user from localStorage
function getLoggedInUser() {
  const user = localStorage.getItem("loggedInUser");
  return user ? JSON.parse(user) : null;
}

// Protect page: redirect if no user
function protectPage() {
  const user = getLoggedInUser();
  if (!user) {
    // Only redirect if user not logged in
    window.location.href = "login.html";
  }
}

// Logout function (works globally)
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}


