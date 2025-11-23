/* ==========================
   SHARE PANEL TOGGLE
========================== */

const shareBtn = document.getElementById("shareBtn");
const sharePanel = document.getElementById("sharePanel");

if (shareBtn) {
  shareBtn.addEventListener("click", () => {
    sharePanel.classList.toggle("open");
  });
}

/* Close panel when clicking outside */
document.addEventListener("click", (e) => {
  if (
    sharePanel &&
    !sharePanel.contains(e.target) &&
    !shareBtn.contains(e.target)
  ) {
    sharePanel.classList.remove("open");
  }
});

/* ==========================
   FLOATING ICON LINKS
========================== */

function openWhatsApp() {
  window.open("https://wa.me/971581160415", "_blank");
}

function openFacebook() {
  window.open(
    "https://www.facebook.com/profile.php?id=61580373990541",
    "_blank"
  );
}

function openInstagram() {
  window.open("https://www.instagram.com/techn_tidy/", "_blank");
}

function callNow() {
  window.location.href = "tel:+971581160415";
}
