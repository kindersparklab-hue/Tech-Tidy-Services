// Unified counter animation and small helpers
document.addEventListener("DOMContentLoaded", function () {
  // counters
  const counters = document.querySelectorAll('.count');
  if (counters.length) {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target') || 0;
      let current = 0;
      const frames = 80; // smoother animation
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
