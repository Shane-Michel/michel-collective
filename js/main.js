document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  const yearSpan = document.getElementById("year");

  // Toggle navigation on mobile
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
  });

  // Update footer year dynamically
  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  }
});