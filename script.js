function onSubmit() {
    alert ("Form submitted successfully");
    
};

//function welcomeMsg(name) {
    //name = "Yma";
    //alert ("Hello" + name + "!" + " Welcome to our website!");

//}

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
menuBtn.addEventListener("click", () => {
     mobileMenu.classList.toggle("hidden");
    });

    const loginButt = document.getElementById("login-butt")
    const signupButt = document.getElementById("signup-butt")
    const loginForm = document.getElementById("login-form")
    const signupForm = document.getElementById("signup-form")
    const switchToSignup = document.getElementById("switch-to-signup")
    const switchToLogin = document.getElementById("switch-to-login")
    const login = document.getElementById("login")
    
    loginButt.addEventListener("click", () => {
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
    loginButt.classList.add("text-blue-600", "border-blue-600");
    signupButt.classList.remove("text-blue-600", "border-blue-600");
    });
    signupButt.addEventListener("click", () => {
        signupForm.classList.remove("hidden");
        loginForm.classList.add("hidden");
        signupButt.classList.add("text-blue-600", "border-blue-600");
        loginButt.classList.remove("text-blue-600", "border-blue-600");
    })
    switchToSignup.addEventListener("click", () => signupButt.click());
    switchToLogin.addEventListener("click", () => loginButt.click());
