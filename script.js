// ===============================
// Floating Social Icons - Show/Hide on Scroll
// ===============================
let lastScrollTop = 0;
const floatingIcons = document.querySelector(".floating-icons");

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        floatingIcons.style.opacity = "0";
    } else {
        floatingIcons.style.opacity = "1";
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ===============================
// SHARE BUTTON
// ===============================
function shareWebsite() {
    if (navigator.share) {
        navigator.share({
            title: "Tech & Tidy Services",
            text: "Professional maintenance, renovation & repair services in UAE.",
            url: window.location.href
        });
    } else {
        alert("Sharing is not supported on this device.");
    }
}

// ===============================
// COUNTER ANIMATION
// ===============================
const counters = document.querySelectorAll(".counter");
const speed = 200;

const animateCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

// Trigger when counters enter view
const counterSection = document.querySelector(".counter-section");

const observer = new IntersectionObserver(
    (entries) => {
        if (entries[0].isIntersecting) {
            animateCounters();
        }
    },
    { threshold: 0.5 }
);

if (counterSection) {
    observer.observe(counterSection);
}
