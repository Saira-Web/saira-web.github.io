
document.addEventListener("DOMContentLoaded", () => {
  const COUNT_KEY = "homeease-cart-count";
  const badge = document.querySelector(".cart-count");
  if (!badge) return;

  let count = parseInt(localStorage.getItem(COUNT_KEY) || "0", 10);
  if (isNaN(count) || count <= 0) {
    badge.textContent = "0";
    badge.style.display = "none";
  } else {
    badge.textContent = String(count);
    badge.style.display = "inline-flex";
  }
});
