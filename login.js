// login.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login-form");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // prevent actual form submission
      const email = form.elements[0].value;
      const password = form.elements[1].value;
  
      // Simulate login logic
      if (email && password) {
        localStorage.setItem("loggedInUser", email);
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to homepage
      } else {
        alert("Please fill in all fields.");
      }
    });   
  });
  