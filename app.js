// Mobile Menu
const burger = document.getElementById("burger");
const menu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeMenu");

burger?.addEventListener("click", () => {
  menu.classList.add("open");
  document.body.style.overflow = "hidden";
});

closeBtn?.addEventListener("click", () => {
  menu.classList.remove("open");
  document.body.style.overflow = "";
});

// Reveal animations
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));



