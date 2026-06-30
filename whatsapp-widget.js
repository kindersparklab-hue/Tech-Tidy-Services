(function () {
  const phone = "971581160415";
  const message = "Hi TechTidy, I would like a free quote for your services.";

  // show only once per day
  const last = localStorage.getItem("tt_popup");
  if (last && Date.now() - last < 86400000) return;

  const overlay = document.createElement("div");
  overlay.id = "tt-overlay";

  const box = document.createElement("div");
  box.id = "tt-popup";

  box.innerHTML = `
    <span id="tt-close">&times;</span>

    <h2>👋 Welcome to Tech & Tidy Services</h2>

    <p>
      Need help with AC repair, plumbing, painting, renovation or cleaning?
      Get a FREE quote instantly on WhatsApp.
    </p>

    <a href="https://wa.me/${phone}?text=${encodeURIComponent(message)}"
       target="_blank" id="tt-btn">
       💬 Get Free Quote
    </a>
  `;

  overlay.appendChild(box);
  document.body.appendChild(overlay);

  // styles
  const style = document.createElement("style");
  style.innerHTML = `
    #tt-overlay{
      position:fixed;
      inset:0;
      background:rgba(0,0,0,0.6);
      display:flex;
      justify-content:center;
      align-items:center;
      z-index:999999;
    }

    #tt-popup{
      background:#fff;
      width:320px;
      padding:20px;
      border-radius:14px;
      text-align:center;
      position:relative;
      font-family:Arial;
      animation:pop .3s ease;
    }

    @keyframes pop{
      from{transform:scale(0.7);opacity:0}
      to{transform:scale(1);opacity:1}
    }

    #tt-popup h2{
      margin:0 0 10px;
      font-size:18px;
    }

    #tt-popup p{
      font-size:13px;
      color:#444;
      line-height:1.4;
    }

    #tt-btn{
      display:block;
      margin-top:15px;
      background:#25D366;
      color:white;
      padding:12px;
      border-radius:8px;
      text-decoration:none;
      font-weight:bold;
    }

    #tt-close{
      position:absolute;
      right:10px;
      top:5px;
      font-size:22px;
      cursor:pointer;
    }
  `;
  document.head.appendChild(style);

  // close logic
  document.addEventListener("click", function (e) {
    if (e.target.id === "tt-close" || e.target.id === "tt-overlay") {
      overlay.remove();
    }
  });

  localStorage.setItem("tt_popup", Date.now());
})();
