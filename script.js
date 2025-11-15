// ===============================
// SHARE POPUP TOGGLE
// ===============================
const shareBtn = document.getElementById("shareToggle");
const sharePopup = document.getElementById("sharePopup");

if (shareBtn) {
  shareBtn.addEventListener("click", () => {
    sharePopup.classList.toggle("show");
  });
}

// Close popup if clicking outside
document.addEventListener("click", (e) => {
  if (!sharePopup.contains(e.target) && e.target !== shareBtn) {
    sharePopup.classList.remove("show");
  }
});

// ===============================
// COUNTERS ANIMATION
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count");

  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let current = 0;

    const update = () => {
      current += Math.ceil(target / 80);
      if (current >= target) {
        counter.textContent = target;
      } else {
        counter.textContent = current;
        requestAnimationFrame(update);
      }
    };

    update();
  });
});

// ===============================
// REVEAL ANIMATIONS
// ===============================
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;

    if (revealTop < windowHeight - 120) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
