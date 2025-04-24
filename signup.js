// signup.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signup-form");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // prevent form reload
      const name = form.elements[0].value;
      const email = form.elements[1].value;
      const password = form.elements[2].value;
  
      if (name && email && password) {
        localStorage.setItem("newUserEmail", email); // Optional mock
        alert("Signup successful! You can now log in.");
        window.location.href = "login.html"; // Redirect to login
      } else {
        alert("Please fill in all fields.");
      }
    });
  });
  