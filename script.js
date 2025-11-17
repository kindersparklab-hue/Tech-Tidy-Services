// ============ COUNTER ANIMATION ============
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count");

  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target") || 0;
    let current = 0;
    const frames = 80;
    const increment = Math.max(1, Math.round(target / frames));

    const update = () => {
      current += increment;
      if (current >= target) {
        current = target;
      }
      counter.textContent = current;
      if (current < target) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  });

  // ============ SHARE SLIDER ============
  const shareBtn = document.querySelector(".share-btn");
  const sharePanel = document.querySelector(".share-panel");

  if (shareBtn && sharePanel) {
    shareBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      sharePanel.classList.toggle("open");
    });

    sharePanel.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    document.addEventListener("click", () => {
      sharePanel.classList.remove("open");
    });
  }
});

// ============ GLOBAL ACTION FUNCTIONS ============
function openWhatsApp() {
  const msg = encodeURIComponent(
    "Hi Tech & Tidy Services! I would like to inquire about your required services."
  );
  window.open("https://wa.me/971581160415?text=" + msg, "_blank");
}

function openFacebook() {
  window.open("https://www.facebook.com/profile.php?id=61583813489748", "_blank");
}

function openInstagram() {
  window.open("https://www.instagram.com/techtidyservices", "_blank");
}

function callNow() {
  window.location.href = "tel:+971581160415";
}
