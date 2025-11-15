/* ======================================================
   COUNTER ANIMATION
====================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count");

  counters.forEach(counter => {
    let target = +counter.getAttribute("data-target");
    let current = 0;

    const animate = () => {
      let step = Math.ceil(target / 80);
      current += step;

      if (current >= target) {
        counter.textContent = target;
      } else {
        counter.textContent = current;
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  });
});


/* ======================================================
   SHARE POPUP SYSTEM
====================================================== */
const shareBtn = document.getElementById("shareBtn");
const shareMenu = document.getElementById("shareMenu");
const closeShare = document.getElementById("closeShare");

if (shareBtn && shareMenu && closeShare) {
  shareBtn.addEventListener("click", () => {
    shareMenu.classList.add("open");
  });

  closeShare.addEventListener("click", () => {
    shareMenu.classList.remove("open");
  });
}


/* ======================================================
   CLICK LOGO = GO HOME
====================================================== */
const mainLogo = document.getElementById("mainLogo");

if (mainLogo) {
  mainLogo.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}


/* ======================================================
   FLOATING ICONS (Click = open)
====================================================== */

// WhatsApp Floating Icon
const floatWhatsApp = document.getElementById("floatWhatsApp");
if (floatWhatsApp) {
  floatWhatsApp.addEventListener("click", () => {
    window.open("https://wa.me/971581160415?text=Hi%20Tech%20%26%20Tidy%20Services%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.", "_blank");
  });
}

// Instagram Floating Icon
const floatInstagram = document.getElementById("floatInstagram");
if (floatInstagram) {
  floatInstagram.addEventListener("click", () => {
    window.open("https://www.instagram.com/techtidyservices", "_blank");
  });
}

// Facebook Floating Icon
const floatFacebook = document.getElementById("floatFacebook");
if (floatFacebook) {
  floatFacebook.addEventListener("click", () => {
    window.open("https://www.facebook.com/share/1ETF7bs5pK", "_blank");
  });
}

// Call Floating Icon
const floatCall = document.getElementById("floatCall");
if (floatCall) {
  floatCall.addEventListener("click", () => {
    window.location.href = "tel:+971581160415";
  });
}


/* ======================================================
   SHARE OPTIONS INSIDE POPUP
====================================================== */

const shareWhatsApp = document.getElementById("shareWhatsApp");
if (shareWhatsApp) {
  shareWhatsApp.addEventListener("click", () => {
    window.open("https://wa.me/971581160415?text=Hi%20Tech%20%26%20Tidy%20Services!", "_blank");
  });
}

const shareInstagram = document.getElementById("shareInstagram");
if (shareInstagram) {
  shareInstagram.addEventListener("click", () => {
    window.open("https://www.instagram.com/techtidyservices", "_blank");
  });
}

const shareFacebook = document.getElementById("shareFacebook");
if (shareFacebook) {
  shareFacebook.addEventListener("click", () => {
    window.open("https://www.facebook.com/share/1ETF7bs5pK", "_blank");
  });
}

const shareCall = document.getElementById("shareCall");
if (shareCall) {
  shareCall.addEventListener("click", () => {
    window.location.href = "tel:+971581160415";
  });
}
