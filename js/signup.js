function validateEmail(email) {
  return email.includes("@gmail.com");
}

function validatePhoneNumber(phoneNumber) {
  return !isNaN(phoneNumber);
}

function passwordsMatch(password, confirmPassword) {
  return password === confirmPassword;
}

function isGenderSelected() {
  const genderInputs = document.querySelectorAll('input[name="gender"]');
  for (let i = 0; i < genderInputs.length; i++) {
      if (genderInputs[i].checked) {
          return true;
      }
  }
  return false;
}

function handleSubmit(event) {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
  }

  if (!validatePhoneNumber(phoneNumber)) {
      alert("Please enter a valid phone number.");
      return;
  }

  if (!passwordsMatch(password, confirmPassword)) {
      alert("Passwords do not match.");
      return;
  }

  if (!isGenderSelected()) {
      alert("Please select a gender.");
      return;
  }

  localStorage.setItem("fullName", fullName);
  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("phoneNumber", phoneNumber);
  localStorage.setItem("password", password);
  localStorage.setItem("gender", document.querySelector('input[name="gender"]:checked').id);

  alert("Account created successfully!");

  window.location.href = "home.html";
}

document.querySelector("form").addEventListener("submit", handleSubmit);
