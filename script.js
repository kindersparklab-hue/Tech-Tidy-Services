/* ============================
   SHARE SLIDER TOGGLE
============================ */
const shareBtn = document.querySelector(".share-btn");
const sharePanel = document.querySelector(".share-panel");

if (shareBtn && sharePanel) {
    shareBtn.addEventListener("click", () => {
        sharePanel.classList.toggle("open");
    });
}

/* Close share panel when clicking outside */
document.addEventListener("click", (e) => {
    if (
        sharePanel &&
        shareBtn &&
        !sharePanel.contains(e.target) &&
        !shareBtn.contains(e.target)
    ) {
        sharePanel.classList.remove("open");
    }
});

/* ============================
   SOCIAL ACTION FUNCTIONS
============================ */
function openWhatsApp() {
    window.open("https://wa.me/971581160415", "_blank");
}

function openFacebook() {
    window.open("https://www.facebook.com/profile.php?id=61580373990541", "_blank");
}

function openInstagram() {
    window.open("https://www.instagram.com/techntidy", "_blank");
}

function callNow() {
    window.location.href = "tel:+971581160415";
}

/* ============================
   BANNER SLIDESHOW
============================ */
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    if (slides.length === 0) return;

    slides.forEach(slide => slide.style.opacity = 0);

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.opacity = 1;

    setTimeout(showSlides, 4000);
}

showSlides();

/* ============================
   ACHIEVEMENT COUNTERS
============================ */
const counters = document.querySelectorAll(".count");

const startCounters = () => {
    counters.forEach(counter => {
        counter.innerText = "0";
        const updateCounter = () => {
            const target = +counter.getAttribute("data-target");
            const current = +counter.innerText;
            const increment = target / 50;

            if (current < target) {
                counter.innerText = `${Math.ceil(current + increment)}`;
                setTimeout(updateCounter, 40);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
};

let counterStarted = false;

window.addEventListener("scroll", () => {
    const counterSection = document.querySelector(".achievements-section");
    if (!counterSection) return;

    const position = counterSection.getBoundingClientRect().top;
    if (position < window.innerHeight && !counterStarted) {
        startCounters();
        counterStarted = true;
    }
});
