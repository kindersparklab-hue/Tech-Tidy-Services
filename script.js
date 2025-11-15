// ============ SCROLL REVEAL ============
document.addEventListener("DOMContentLoaded", () => {
  const revealEls = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => revealObserver.observe(el));
});

// ============ COUNTER ANIMATION ============
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count");

  if (!counters.length) return;

  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute("data-target"), 10) || 0;
    let current = 0;
    const duration = 1200;
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      current = Math.floor(progress * target);
      el.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target;
      }
    }

    requestAnimationFrame(update);
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => counterObserver.observe(c));
});

// ============ SHARE MENU ============
function toggleShare() {
  const menu = document.getElementById("share-menu");
  if (menu) {
    menu.classList.toggle("open");
  }
}

function copyShareLink() {
  const url = window.location.href;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(() => {
      alert("Page link copied!");
    }).catch(() => {
      alert("Unable to copy link.");
    });
  } else {
    const temp = document.createElement("input");
    temp.value = url;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
    alert("Page link copied!");
  }
}

// Close share if clicked outside
document.addEventListener("click", (e) => {
  const menu = document.getElementById("share-menu");
  const btn = document.querySelector(".share-toggle");
  if (!menu || !btn) return;

  if (!menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.remove("open");
  }
});
