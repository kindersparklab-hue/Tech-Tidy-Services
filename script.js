// ===============================
// SHARE PANEL (RIGHT SLIDE-IN)
// ===============================

const shareBtn = document.querySelector(".share-btn");
const sharePanel = document.querySelector(".share-panel");

shareBtn.addEventListener("click", () => {
  sharePanel.classList.toggle("open");
});

// Close the panel when clicking outside
document.addEventListener("click", (e) => {
  if (!sharePanel.contains(e.target) && !shareBtn.contains(e.target)) {
    sharePanel.classList.remove("open");
  }
});

// ===============================
// WHATSAPP MESSAGE
// ===============================

function openWhatsApp() {
  const msg = encodeURIComponent(
    "Hi Tech & Tidy Services! I would like to inquire about your required services."
  );
  window.open(`https://wa.me/971581160415?text=${msg}`, "_blank");
}

// ===============================
// FLOATING ICON ACTIONS
// ===============================

function openFacebook() {
  window.open("https://www.facebook.com/profile.php?id=61583813489748", "_blank");
}

function openInstagram() {
  window.open("https://www.instagram.com/techtidyservices", "_blank");
}

function callNow() {
  window.location.href = "tel:+971581160415";
}

// ===============================
// SLIDESHOW BANNERS
// ===============================

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach(slide => slide.style.opacity = "0");

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].style.opacity = "1";

  setTimeout(showSlides, 6000); 
}

if (slides.length > 0) {
  showSlides();
}

// ===============================
// COUNTER ANIMATION
// ===============================

const counters = document.querySelectorAll(".count");

function animateCounters() {
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const increment = Math.ceil(target / 100);

    function update() {
      count += increment;
      if (count > target) count = target;
      counter.textContent = count;
      if (count < target) requestAnimationFrame(update);
    }
    update();
  });
}

// Start counting only if counters exist
if (counters.length > 0) {
  setTimeout(animateCounters, 500);
}
