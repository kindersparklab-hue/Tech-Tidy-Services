// SHARE POPUP TOGGLE
const shareBtn = document.getElementById("shareBtn");
const sharePopup = document.getElementById("sharePopup");

shareBtn.addEventListener("click", () => {
  sharePopup.style.display = sharePopup.style.display === "block" ? "none" : "block";
});

// CLOSE POPUP WHEN CLICK OUTSIDE
document.addEventListener("click", (e) => {
  if (!shareBtn.contains(e.target) && !sharePopup.contains(e.target)) {
    sharePopup.style.display = "none";
  }
});
