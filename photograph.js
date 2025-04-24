const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
menuBtn.addEventListener("click", () => {
     mobileMenu.classList.toggle("hidden");
    });
   // photographer.js

// DOM Elements
const nicheSelect = document.getElementById("filter-niche");
const locationSelect = document.getElementById("filter-location");
const applyBtn = document.getElementById("apply-filters");
const photographerCards = document.querySelectorAll(".photographer-card");

// Filter Logic
applyBtn.addEventListener("click", () => {
  const selectedNiche = nicheSelect.value.toLowerCase();
  const selectedLocation = locationSelect.value.toLowerCase();

  photographerCards.forEach((card) => {
    const cardNiche = card.dataset.niche.toLowerCase();
    const cardLocation = card.dataset.location.toLowerCase();

    const matchesNiche = selectedNiche === "all" || cardNiche === selectedNiche;
    const matchesLocation = selectedLocation === "all" || cardLocation === selectedLocation;

    if (matchesNiche && matchesLocation) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
});


// Lightbox Modal functionality
const modal = document.getElementById("lightbox-modal");
const modalImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close-lightbox");

document.querySelectorAll(".photographer-img").forEach((img) => {
  img.addEventListener("click", function () {
    modal.classList.remove("hidden");
    modalImg.src = this.src;
    modalImg.alt = this.alt;
  });
});

closeBtn.addEventListener("click", function () {
  modal.classList.add("hidden");
  modalImg.src = "";
  modalImg.alt = "";
});
