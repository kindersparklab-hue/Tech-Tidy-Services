// script.js

// WhatsApp, Facebook, Instagram, Call handlers
function openWhatsApp() {
  window.open(
    "https://wa.me/971581160415?text=Hi%20Tech%20%26%20Tidy%20Services!%20I%20would%20like%20to%20inquire%20about%20your%20required%20services.",
    "_blank"
  );
}

function openFacebook() {
  window.open(
    "https://www.facebook.com/profile.php?id=61580373990541",
    "_blank"
  );
}

function openInstagram() {
  window.open(
    "https://www.instagram.com/techtidyservices",
    "_blank"
  );
}

function callNow() {
  window.location.href = "tel:+971581160415";
}

document.addEventListener("DOMContentLoaded", function () {
  // SHARE PANEL SLIDER
  const shareBtn = document.querySelector(".share-btn");
  const sharePanel = document.getElementById("sharePanel");

  if (shareBtn && sharePanel) {
    shareBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      sharePanel.classList.toggle("open");
    });

    document.addEventListener("click", function (e) {
      if (
        sharePanel.classList.contains("open") &&
        !sharePanel.contains(e.target) &&
        !shareBtn.contains(e.target)
      ) {
        sharePanel.classList.remove("open");
      }
    });
  }

  // COUNTER ANIMATION
  const counters = document.querySelectorAll(".count");
  if (counters.length) {
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target") || 0;
      let current = 0;
      const frames = 80;
      const increment = Math.max(1, Math.round(target / frames));

      const step = () => {
        current += increment;
        if (current >= target) {
          counter.textContent = target;
        } else {
          counter.textContent = current;
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    });
  }
});
