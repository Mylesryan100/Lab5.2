// Grabbing DOM elements 
const form = document.getElementById("registrationForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
// error message spans
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const successMessage = document.getElementById("successMessage");
// loads the saved username from localstorage
window.addEventListener("DOMContentLoaded", () => {
  const savedUsername = localStorage.getItem("username");
  if (savedUsername) {
    username.value = savedUsername;
    console.log("Loaded saved username:", savedUsername);
  }
});
// shows error message for the input
function showError(input, errorElement, message) {
  errorElement.textContent = message;
  input.classList.add("invalid");
  console.log(`Error on ${input.id}: ${message}`);
}

function clearError(input, errorElement) {
  if (errorElement.textContent) {
    console.log(`Cleared error for ${input.id}`);
  }
  errorElement.textContent = "";
  input.classList.remove("invalid");
}
// username input field
username.addEventListener("input", () => {
  if (username.validity.valueMissing) {
    showError(username, usernameError, "Username is required.");
  } else if (username.validity.tooShort) {
    showError(username, usernameError, "Username must be at least 3 characters.");
  } else {
    clearError(username, usernameError);
  }
});
// email input field
email.addEventListener("input", () => {
  if (email.validity.valueMissing) {
    showError(email, emailError, "Email is required.");
  } else if (email.validity.typeMismatch) {
    showError(email, emailError, "Please enter a valid email (e.g., user@example.com).");
  } else {
    clearError(email, emailError);
  }
});
// password input field
password.addEventListener("input", () => {
  if (password.validity.valueMissing) {
    showError(password, passwordError, "Password is required.");
  } else if (password.validity.tooShort) {
    showError(password, passwordError, "Password must be at least 8 characters.");
  } else if (password.validity.patternMismatch) {
    showError(
      password,
      passwordError,
      "Password must include uppercase, lowercase, and a number."
    );
  } else {
    clearError(password, passwordError);
  }
});
// confirmPassword input field
confirmPassword.addEventListener("input", () => {
  if (confirmPassword.value !== password.value) {
    showError(confirmPassword, confirmPasswordError, "Passwords do not match.");
  } else {
    clearError(confirmPassword, confirmPasswordError);
  }
});
// This is the form submission handler
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form submission triggered.");
// triggers validation to re-check all fields
  username.dispatchEvent(new Event("input"));
  email.dispatchEvent(new Event("input"));
  password.dispatchEvent(new Event("input"));
  confirmPassword.dispatchEvent(new Event("input"));
// checks to see if all error messages are empty
  if (
    !usernameError.textContent &&
    !emailError.textContent &&
    !passwordError.textContent &&
    !confirmPasswordError.textContent
  ) {
    successMessage.textContent = "🎉 Registration Successful";
    localStorage.setItem("username", username.value);
    console.log("Registration successful. Username saved:", username.value);

    form.reset();
  } else {
    successMessage.textContent = "";
    console.log("Registration failed. Errors still present.");
    //focuses on thhe first invalid field so the user knows where to look to fix it
    const firstInvalid = document.querySelector(".invalid");
    if (firstInvalid) {
      console.log("Focusing on invalid field:", firstInvalid.id);
      firstInvalid.focus();
    }
  }
});