document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});

function logFeatureClick(featureName) {
  console.log(`${featureName} clicked`);
}

function logButtonClick() {
  console.log("Contact form submitted");
}
