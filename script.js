// ================= SHARE PANEL & COUNTERS =================
document.addEventListener('DOMContentLoaded', () => {
  const shareToggle   = document.getElementById('shareToggle');
  const sharePanel    = document.getElementById('sharePanel');
  const shareClose    = document.getElementById('shareClose');
  const shareBackdrop = document.getElementById('shareBackdrop');

  function openShare() {
    if (!sharePanel) return;
    sharePanel.classList.add('open');
    if (shareBackdrop) shareBackdrop.classList.add('open');
    sharePanel.setAttribute('aria-hidden', 'false');
  }

  function closeShare() {
    if (!sharePanel) return;
    sharePanel.classList.remove('open');
    if (shareBackdrop) shareBackdrop.classList.remove('open');
    sharePanel.setAttribute('aria-hidden', 'true');
  }

  if (shareToggle)   shareToggle.addEventListener('click', openShare);
  if (shareClose)    shareClose.addEventListener('click', closeShare);
  if (shareBackdrop) shareBackdrop.addEventListener('click', closeShare);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeShare();
  });

  // ================= COUNTERS =================
  const counters = document.querySelectorAll('.count');
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target') || 0;
    let current = 0;
    const frames = 80;
    const increment = Math.max(1, Math.round(target / frames));

    function step() {
      current += increment;
      if (current >= target) {
        counter.textContent = target;
      } else {
        counter.textContent = current;
        requestAnimationFrame(step);
      }
    }
    requestAnimationFrame(step);
  });
});

// ================= SHARE OPEN HELPERS =================
function openWhatsApp() {
  const msg = encodeURIComponent(
    'Hi Tech & Tidy Services! I would like to inquire about your required services.'
  );
  window.open('https://wa.me/971581160415?text=' + msg, '_blank');
}

function openFacebook() {
  window.open('https://www.facebook.com/profile.php?id=61583813489748', '_blank');
}

function openInstagram() {
  window.open('https://www.instagram.com/techtidyservices', '_blank');
}

function callNow() {
  window.location.href = 'tel:+971581160415';
}
