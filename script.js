document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".count");
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const increment = Math.ceil(target / 100);
    const updateCount = () => {
      count += increment;
      if (count > target) count = target;
      counter.textContent = count;
      if (count < target) requestAnimationFrame(updateCount);
    };
    updateCount();
  });
});
