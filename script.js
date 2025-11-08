// ===== TECH TIDY SCRIPT =====

// Highlight active nav link based on URL
const links = document.querySelectorAll("nav a");
links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

// Example scroll-to-top button (optional)
window.addEventListener("scroll", () => {
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (scrollBtn) {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  }
});
