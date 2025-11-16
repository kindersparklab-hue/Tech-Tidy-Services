// script.js

document.addEventListener("DOMContentLoaded", function () {
  // ================= COUNTERS =================
  const counters = document.querySelectorAll(".count");
  if (counters.length) {
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute("data-target") || "0", 10);
      let current = 0;
      const frames = 80;
      const increment = Math.max(1, Math.round(target / frames));

      const animate = () => {
        current += increment;
        if (current >= target) {
          counter.textContent = target;
        } else {
          counter.textContent = current;
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    });
  }

  // ================= REVEAL ON SCROLL =================
  const reveals = document.querySelectorAll(".reveal");
  if (reveals.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    reveals.forEach(el => observer.observe(el));
  } else if (reveals.length) {
    // fallback: show all
    reveals.forEach(el => el.classList.add("visible"));
  }

  // ================= HERO SLIDER =================
  const slides = document.querySelectorAll(".hero-slide");
  if (slides.length > 1) {
    let currentIndex = 0;
    setInterval(() => {
      slides[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add("active");
    }, 5000);
  }

  // ================= SHARE PANEL =================
  const shareToggle = document.getElementById("shareToggle");
  const sharePanel = document.getElementById("sharePanel");
  const shareClose = document.getElementById("shareClose");

  const openSharePanel = () => {
    if (sharePanel) {
      sharePanel.classList.add("open");
      document.body.classList.add("no-scroll");
    }
  };

  const closeSharePanel = () => {
    if (sharePanel) {
      sharePanel.classList.remove("open");
      document.body.classList.remove("no-scroll");
    }
  };

  if (shareToggle && sharePanel) {
    shareToggle.addEventListener("click", openSharePanel);
  }
  if (shareClose && sharePanel) {
    shareClose.addEventListener("click", closeSharePanel);
  }

  // close when clicking outside inner card
  if (sharePanel) {
    sharePanel.addEventListener("click", (e) => {
      if (e.target === sharePanel) {
        closeSharePanel();
      }
    });
  }

  // close with ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeSharePanel();
    }
  });
});
