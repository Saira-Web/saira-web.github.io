
document.addEventListener("DOMContentLoaded", () => {
  const emptySection = document.getElementById("empty-cart");
  const cartContent = document.getElementById("cart-content");
  const tbody = document.getElementById("cart-items-body");

  const itemsSpan = document.getElementById("summary-items");
  const subtotalSpan = document.getElementById("summary-subtotal");
  const taxSpan = document.getElementById("summary-tax");
  const totalSpan = document.getElementById("summary-total");

  // Read items from localStorage
  let cartItems = [];
  try {
    cartItems = JSON.parse(
      localStorage.getItem("homeease-cart-items") || "[]"
    );
  } catch {
    cartItems = [];
  }

  // If no items -> show empty state
  if (!cartItems || cartItems.length === 0) {
    emptySection.style.display = "block";
    cartContent.style.display = "none";
    return;
  }

  emptySection.style.display = "none";
  cartContent.style.display = "block";


  function renderRows() {
    tbody.innerHTML = "";

    cartItems.forEach((item) => {
      const tr = document.createElement("tr");

      const tdName = document.createElement("td");
      tdName.textContent = item.name;

      const tdPrice = document.createElement("td");
      tdPrice.className = "price";
      tdPrice.textContent = `$${item.price.toFixed(2)}`;

      const tdQty = document.createElement("td");
      tdQty.className = "qty";

      const qtyWrapper = document.createElement("div");
      qtyWrapper.className = "qty-controls";

      const btnMinus = document.createElement("button");
      btnMinus.className = "qty-btn";
      btnMinus.textContent = "-";

      const qtyValue = document.createElement("span");
      qtyValue.className = "qty-value";
      qtyValue.textContent = String(item.quantity);

      const btnPlus = document.createElement("button");
      btnPlus.className = "qty-btn";
      btnPlus.textContent = "+";

      qtyWrapper.appendChild(btnMinus);
      qtyWrapper.appendChild(qtyValue);
      qtyWrapper.appendChild(btnPlus);
      tdQty.appendChild(qtyWrapper);

      const tdSubtotal = document.createElement("td");
      tdSubtotal.className = "subtotal";
      tdSubtotal.textContent = `$${(item.price * item.quantity).toFixed(2)}`;

      const tdRemove = document.createElement("td");
      const removeBtn = document.createElement("button");
      removeBtn.className = "remove-btn";
      removeBtn.textContent = "Remove";
      tdRemove.appendChild(removeBtn);

      tr.appendChild(tdName);
      tr.appendChild(tdPrice);
      tr.appendChild(tdQty);
      tr.appendChild(tdSubtotal);
      tr.appendChild(tdRemove);

      // Handlers
      btnPlus.addEventListener("click", () => {
        item.quantity += 1;
        saveAndRefresh();
      });

      btnMinus.addEventListener("click", () => {
        if (item.quantity > 1) {
          item.quantity -= 1;
          saveAndRefresh();
        }
      });

      removeBtn.addEventListener("click", () => {
        cartItems = cartItems.filter((p) => p.id !== item.id);
        saveAndRefresh();
      });

      tbody.appendChild(tr);
    });

    updateSummary();
  }

  // Update summary and header count
  function updateSummary() {
    const totalItems = cartItems.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    itemsSpan.textContent = String(totalItems);
    subtotalSpan.textContent = `$${subtotal.toFixed(2)}`;
    taxSpan.textContent = `$${tax.toFixed(2)}`;
    totalSpan.textContent = `$${total.toFixed(2)}`;

    // also sync header badge + localStorage count
    localStorage.setItem("homeease-cart-count", String(totalItems));
    const headerBadge = document.querySelector(".cart-count");
    if (headerBadge) {
      headerBadge.textContent = String(totalItems);
      headerBadge.style.display = totalItems > 0 ? "inline-flex" : "none";
    }
  }

  // Save to localStorage and re-render
  function saveAndRefresh() {
    localStorage.setItem(
      "homeease-cart-items",
      JSON.stringify(cartItems)
    );
    renderRows();
  }

  // Initial render
  renderRows();
});

