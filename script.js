/* ============================
   SHARE PANEL TOGGLE
============================ */
const shareBtn = document.querySelector('.share-btn');
const sharePanel = document.querySelector('.share-panel');

if (shareBtn) {
  shareBtn.addEventListener('click', () => {
    sharePanel.classList.toggle('open');
  });
}

// Close panel when clicking outside
document.addEventListener("click", function (event) {
  if (
    !sharePanel.contains(event.target) &&
    !shareBtn.contains(event.target)
  ) {
    sharePanel.classList.remove("open");
  }
});

/* ============================
   SOCIAL ACTION FUNCTIONS
============================ */
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

/* ============================
   BANNER SLIDESHOW
============================ */
let slideIndex = 0;
const slides = document.querySelectorAll('.banner-slider .slide');

function showSlides() {
  slides.forEach(slide => (slide.style.opacity = 0));
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.opacity = 1;

  setTimeout(showSlides, 6000);
}

if (slides.length > 0) {
  showSlides();
}

/* ============================
   COUNTER ANIMATION
============================ */
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
