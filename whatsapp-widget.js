(function () {
  const phone = "971581160415";

  const path = window.location.pathname.toLowerCase();

  let message = "Hi TechTidy, I would like a free quote for your services.";

  // SMART PAGE DETECTION
  if (path.includes("services")) {
    message = "Hi TechTidy, I need a quote for your services (AC, plumbing, renovation, cleaning).";
  } else if (path.includes("contact")) {
    message = "Hi TechTidy, I would like to get in touch and request a quote.";
  } else if (path.includes("about")) {
    message = "Hi TechTidy, I would like to know more about your services and get a quote.";
  } else if (path.includes("achievements")) {
    message = "Hi TechTidy, I saw your achievements and would like a quote for my project.";
  }

  // show once per day
  const last = localStorage.getItem("tt_smart_popup");
  if (last && Date.now() - last < 86400000) return;

  function showPopup() {
    const overlay = document.createElement("div");
    overlay.id = "tt-overlay";

    overlay.innerHTML = `
      <div id="tt-chat">

        <div id="tt-header">
          <div>
            <div class="dot"></div>
            <strong>Tech & Tidy Services</strong>
          </div>
          <span id="tt-close">✕</span>
        </div>

        <div id="tt-body">
          <div class="msg bot">
            Hi! Welcome to Tech & Tidy Services<br><br>
            We provide:
            <ul>
              <li>AC Repair & Maintenance</li>
              <li>Plumbing & Electrical</li>
              <li>Renovation Services</li>
              <li>Cleaning & Maintenance</li>
            </ul>
            Tap below to get a FREE quote instantly.
          </div>

          <a class="msg user"
             href="https://wa.me/${phone}?text=${encodeURIComponent(message)}"
             target="_blank">
             💬 Get Free Quote
          </a>
        </div>

      </div>
    `;

    document.body.appendChild(overlay);

    const style = document.createElement("style");
    style.innerHTML = `
      #tt-overlay{
        position:fixed;
        inset:0;
        background:rgba(0,0,0,0.5);
        display:flex;
        justify-content:center;
        align-items:center;
        z-index:999999;
        font-family:Arial;
      }

      #tt-chat{
        width:320px;
        background:#fff;
        border-radius:14px;
        overflow:hidden;
        animation:pop .25s ease;
      }

      @keyframes pop{
        from{transform:scale(0.8);opacity:0}
        to{transform:scale(1);opacity:1}
      }

      #tt-header{
        background:#075E54;
        color:white;
        padding:12px;
        display:flex;
        justify-content:space-between;
        align-items:center;
      }

      #tt-header .dot{
        width:8px;
        height:8px;
        background:#25D366;
        border-radius:50%;
        display:inline-block;
        margin-right:6px;
      }

      #tt-close{
        cursor:pointer;
        font-size:18px;
      }

      #tt-body{
        padding:15px;
        background:#e5ddd5;
      }

      .msg{
        padding:10px;
        border-radius:10px;
        margin-bottom:10px;
        font-size:13px;
      }

      .bot{
        background:white;
        color:#333;
      }

      .user{
        display:block;
        text-align:center;
        background:#25D366;
        color:white;
        text-decoration:none;
        font-weight:bold;
      }

      ul{
        margin:8px 0 0;
        padding-left:18px;
      }
    `;

    document.head.appendChild(style);

    document.getElementById("tt-close").onclick = () => {
      overlay.remove();
    };

    localStorage.setItem("tt_smart_popup", Date.now());
  }

  // TRIGGERS (time OR scroll)
  setTimeout(showPopup, 6000);

  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight * 0.3) {
      showPopup();
    }
  });
})();
