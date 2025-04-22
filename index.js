document.addEventListener("DOMContentLoaded", function () {
    const bookingBtn = document.getElementById("go-to-booking");
    
    if (bookingBtn) {
        bookingBtn.addEventListener("click", function (e) {
            // Optional - you can track the event or animate, etc.
            console.log("Redirecting to booking form...");
        });
    }

    // Menu toggle for mobile
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });
    }
});

//const menuBtn = document.getElementById("menu-btn");
//const mobileMenu = document.getElementById("mobile-menu");
//menuBtn.addEventListener("click", () => {
//     mobileMenu.classList.toggle("hidden");
//    });
