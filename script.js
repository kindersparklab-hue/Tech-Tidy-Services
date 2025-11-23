/* ===========================
   SHARE PANEL TOGGLE
=========================== */
const shareBtn = document.querySelector('.share-btn');
const sharePanel = document.querySelector('.share-panel');

if (shareBtn && sharePanel) {
    shareBtn.addEventListener('click', () => {
        sharePanel.classList.toggle('open');
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!sharePanel.contains(e.target) && e.target !== shareBtn) {
            sharePanel.classList.remove('open');
        }
    });
}

/* ===========================
   SOCIAL ACTIONS
=========================== */
function openWhatsApp() {
    window.open("https://wa.me/971581160415?text=Hi%20Tech%20%26%20Tidy%20Services!%20I%20would%20like%20to%20inquire%20about%20your%20required%20services.", "_blank");
}

function openFacebook() {
    window.open("https://www.facebook.com/profile.php?id=61580373990541", "_blank");
}

function openInstagram() {
    window.open("https://www.instagram.com/techtidyservices", "_blank");
}

function callNow() {
    window.location.href = "tel:+971581160415";
}

/* ===========================
   COUNTER ANIMATION
=========================== */
const counters = document.querySelectorAll('.count');

if (counters.length > 0) {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const speed = 18;
            const increment = Math.ceil(target / speed);

            if (count < target) {
                counter.innerText = count + increment;
                setTimeout(updateCount, 40);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}

/* ===========================
   SMOOTH SCROLL FIX (Optional)
=========================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const section = document.querySelector(this.getAttribute("href"));
        if (section) {
            e.preventDefault();
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
});
