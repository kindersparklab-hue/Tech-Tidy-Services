// =============================================
// COUNTER ANIMATION
// =============================================
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count");

  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target") || 0;
    let current = 0;
    const duration = 1500;
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


// =============================================
// REVEAL ANIMATION (ensure content is visible)
// =============================================
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, 150 * index);
  });
});


// =============================================
// SHARE POPUP
// =============================================
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
    closeShare.addEventListener("click", (e) => {
      e.stopPropagation();
      shareMenu.classList.remove("open");
    });
  }

  // Close when clicking outside the share menu
  document.addEventListener("click", (e) => {
    if (!shareMenu) return;
    if (!shareMenu.contains(e.target) && e.target !== shareBtn && !shareBtn.contains(e.target)) {
      shareMenu.classList.remove("open");
    }
  });
});


// =============================================
// FOOTER "MORE" MENU (click for mobile)
// =============================================
document.addEventListener("DOMContentLoaded", () => {
  const footerMore = document.getElementById("footerMore");
  const footerMoreBtn = document.getElementById("footerMoreBtn");
  const footerMoreMenu = document.getElementById("footerMoreMenu");

  if (!footerMore || !footerMoreBtn || !footerMoreMenu) return;

  footerMoreBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    // Toggle for mobile
    if (window.innerWidth <= 768) {
      if (footerMoreMenu.style.display === "flex") {
        footerMoreMenu.style.display = "none";
      } else {
        footerMoreMenu.style.display = "flex";
        footerMoreMenu.style.flexDirection = "column";
      }
    }
  });

  // Close on outside click (mobile)
  document.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      footerMoreMenu.style.display = "none";
    }
  });

  // Prevent closing when clicking inside menu
  footerMoreMenu.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});
