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