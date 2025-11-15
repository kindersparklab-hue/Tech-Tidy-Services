/* ================= COUNTERS ================= */
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count");

  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target") || 0;
    let current = 0;
    const duration = 1200;
    const start = performance.now();

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
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
});


/* ================= SHARE POPUP ================= */
document.addEventListener("DOMContentLoaded", () => {
  const shareBtn = document.getElementById("shareBtn");
  const shareMenu = document.getElementById("shareMenu");
  const closeShare = document.getElementById("closeShare");

  if (shareBtn && shareMenu) {
    shareBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      shareMenu.classList.toggle("open");
    });
  }

  if (closeShare && shareMenu) {
    closeShare.addEventListener("click", () => {
      shareMenu.classList.remove("open");
    });
  }

  // Click outside closes share
  document.addEventListener("click", (e) => {
    if (!shareMenu) return;
    if (!shareMenu.contains(e.target) && !shareBtn.contains(e.target)) {
      shareMenu.classList.remove("open");
    }
  });
});
