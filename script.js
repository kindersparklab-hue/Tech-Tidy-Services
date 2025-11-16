// ===============================
// SHARE POPUP TOGGLE
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const shareToggle = document.getElementById("shareToggle");
  const sharePopup = document.getElementById("sharePopup");
  const shareClose = document.getElementById("shareClose");

  if (shareToggle && sharePopup) {
    shareToggle.addEventListener("click", () => {
      sharePopup.classList.add("show");
    });

    if (shareClose) {
      shareClose.addEventListener("click", () => {
        sharePopup.classList.remove("show");
      });
    }

    document.addEventListener("click", (e) => {
      if (
        sharePopup.classList.contains("show") &&
        !sharePopup.contains(e.target) &&
        e.target !== shareToggle
      ) {
        sharePopup.classList.remove("show");
      }
    });
  }

  // ===============================
  // COUNTERS ANIMATION
  // ===============================
  const counters = document.querySelectorAll(".count");

  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target") || 0;
    let current = 0;
    const steps = 80;
    const increment = Math.max(1, Math.round(target / steps));

    const update = () => {
      current += increment;
      if (current >= target) {
        counter.textContent = target;
      } else {
        counter.textContent = current;
        requestAnimationFrame(update);
      }
    };

    update();
  });

  // ===============================
  // REVEAL ON SCROLL
  // ===============================
  const revealElements = document.querySelectorAll(".reveal");

  function handleReveal() {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", handleReveal);
  handleReveal();
});
