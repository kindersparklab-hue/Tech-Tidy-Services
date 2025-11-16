// ===============================
// HERO BANNER SLIDER
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero-section");
  if (hero) {
    const banners = [
      "Assets/Images/Banner - 1.png",
      "Assets/Images/Banner - 2.png",
      "Assets/Images/Banner - 3.png",
      "Assets/Images/Banner - 4.png"
    ];
    let index = 0;

    function rotateBanner() {
      index = (index + 1) % banners.length;
      hero.style.backgroundImage = `url("${banners[index]}")`;
    }

    // Start with first (already set in CSS), then rotate
    setInterval(rotateBanner, 6000);
  }

  // ===============================
  // COUNTER ANIMATION
  // ===============================
  const counters = document.querySelectorAll(".count");
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute("data-target"), 10) || 0;
    let current = 0;
    const frames = 80;
    const increment = Math.max(1, Math.round(target / frames));

    const updateCount = () => {
      current += increment;
      if (current >= target) {
        counter.textContent = target;
      } else {
        counter.textContent = current;
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  });

  // ===============================
  // SCROLL REVEAL
  // ===============================
  const revealItems = document.querySelectorAll(".reveal");

  function handleReveal() {
    const triggerBottom = window.innerHeight * 0.88;
    revealItems.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", handleReveal);
  handleReveal(); // initial
});

// ===============================
// SHARE PANEL TOGGLE
// ===============================
function toggleShare() {
  const panel = document.getElementById("share-panel");
  if (!panel) return;
  panel.classList.toggle("open");
}
