(function () {
  const phone = "971581160415";
  const message = "Hi TechTidy, I would like a free quote for home services (repair, AC, plumbing, renovation, cleaning).";

  // Create styles
  const style = document.createElement("style");
  style.innerHTML = `
  #tt-wa {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 99999;
    font-family: Arial, sans-serif;
  }

  #tt-box {
    width: 280px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    padding: 15px;
    display: none;
    margin-bottom: 10px;
  }

  #tt-box h4 {
    margin: 0 0 8px;
    font-size: 16px;
  }

  #tt-box p {
    font-size: 13px;
    color: #444;
    margin: 0;
  }

  #tt-btn {
    display: block;
    margin-top: 12px;
    background: #25D366;
    color: white;
    text-align: center;
    padding: 12px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
  }

  #tt-float {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #25D366;
    color: white;
    border: none;
    font-size: 28px;
    cursor: pointer;
    box-shadow: 0 6px 18px rgba(0,0,0,0.3);
  }
  `;
  document.head.appendChild(style);

  // Create widget
  const wrapper = document.createElement("div");
  wrapper.id = "tt-wa";

  wrapper.innerHTML = `
    <div id="tt-box">
      <h4>👋 Need Help?</h4>
      <p>Home repair, AC service, plumbing, painting & renovation. Get a free quote now.</p>
      <a id="tt-btn" target="_blank"
        href="https://wa.me/${phone}?text=${encodeURIComponent(message)}">
        Get Free Quote
      </a>
    </div>

    <button id="tt-float">💬</button>
  `;

  document.body.appendChild(wrapper);

  const box = document.getElementById("tt-box");
  const btn = document.getElementById("tt-float");

  btn.onclick = () => {
    box.style.display = box.style.display === "block" ? "none" : "block";
  };

  // show once every 24 hours
  const last = localStorage.getItem("tt-wa");

  if (!last || Date.now() - last > 86400000) {
    setTimeout(() => {
      box.style.display = "block";
      localStorage.setItem("tt-wa", Date.now());
    }, 8000);
  }
})();
