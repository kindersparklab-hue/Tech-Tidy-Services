/* ===============================
   SHARE PANEL TOGGLE
================================= */
const shareBtn = document.querySelector('.share-btn');
const sharePanel = document.querySelector('.share-panel');

if (shareBtn && sharePanel) {
    shareBtn.addEventListener('click', () => {
        sharePanel.classList.toggle('open');
    });

    document.addEventListener('click', (event) => {
        if (!sharePanel.contains(event.target) && event.target !== shareBtn) {
            sharePanel.classList.remove('open');
        }
    });
}

/* ===============================
   SOCIAL ACTION FUNCTIONS
================================= */

function openWhatsApp() {
    const message = encodeURIComponent(
        "Hi Tech & Tidy Services! I would like to inquire about your required services."
    );
    window.open(`https://wa.me/971581160415?text=${message}`, "_blank");
}

function openFacebook() {
    window.open(
        "https://www.facebook.com/profile.php?id=61580373990541",
        "_blank"
    );
}

function openInstagram() {
    window.open("https://www.instagram.com/techntidy/", "_blank");
}

function callNow() {
    window.location.href = "tel:+971581160415";
}

/* ===============================
   COUNTER ANIMATION
================================= */
const counters = document.querySelectorAll('.count');

if (counters.length > 0) {
    counters.forEach(counter => {
        counter.innerText = "0";
        const updateCounter = () => {
            const target = +counter.getAttribute("data-target");
            const current = +counter.innerText;
            const increment = target / 80;

            if (current < target) {
                counter.innerText = `${Math.ceil(current + increment)}`;
                setTimeout(updateCounter, 25);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
}
