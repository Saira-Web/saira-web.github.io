// Get the cart item count from localStorage
document.addEventListener("DOMContentLoaded", () => {
  const COUNT_KEY = "homeease-cart-count";
  const badge = document.querySelector(".cart-count");
  if (!badge) return;

  let count = parseInt(localStorage.getItem(COUNT_KEY) || "0", 10);
  //If the count is 0, hide the badge
  if (isNaN(count) || count <= 0) {
    badge.textContent = "0";
    badge.style.display = "none";
  } else {
    //Otherwise, show the badge with the number
    badge.textContent = String(count);
    badge.style.display = "inline-flex";
  }
});
