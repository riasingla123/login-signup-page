// Email regex for validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Signup form validation
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const error = document.getElementById('signupError');

    if (!emailRegex.test(email)) {
      error.textContent = "Invalid email format.";
    } else if (password.length < 6) {
      error.textContent = "Password must be at least 6 characters.";
    } else if (password !== confirmPassword) {
      error.textContent = "Passwords do not match.";
    } else {
      error.textContent = "";
      alert("Signup successful!");
      signupForm.reset();
    }
  });
}

// Login form validation
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const error = document.getElementById('loginError');

    if (!emailRegex.test(email)) {
      error.textContent = "Invalid email format.";
    } else if (password.length < 6) {
      error.textContent = "Password must be at least 6 characters.";
    } else {
      error.textContent = "";
      alert("Login successful!");
      loginForm.reset();
    }
  });
}
