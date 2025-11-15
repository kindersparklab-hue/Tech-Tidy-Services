// ============================================================
// GLOBAL JS FOR TECH & TIDY SERVICES
// - Counter animation (for .count elements)
// - Share popup helper (if HTML uses toggleShare)
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
  animateCounters();
});

// ---------------------- COUNTER ANIMATION -------------------
function animateCounters() {
  const counters = document.querySelectorAll(".count");
  if (!counters.length) return;

  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute("data-target"), 10) || 0;
    let current = 0;
    const duration = 900; // total time in ms
    const startTime = performance.now();

    function update(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      current = Math.floor(progress * target);
      counter.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        counter.textContent = target;
      }
    }

    requestAnimationFrame(update);
  });
}

// ---------------------- SHARE POPUP -------------------------
// If you prefer not using inline onclick="toggleShare()", this
// function is still available globally.
function toggleShare() {
  const popup = document.getElementById("sharePopup");
  if (!popup) return;
  popup.classList.toggle("show");
}
