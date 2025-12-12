document.addEventListener("DOMContentLoaded", () => {
  /* ================== HEADER SEARCH (Enter -> products page) ================== */
  const headerSearchInput = document.querySelector("header .search input");

  function goToSearch() {
    if (!headerSearchInput) return;
    const term = headerSearchInput.value.trim();
    if (!term) return;
    window.location.href =
      "/products/products.html?search=" + encodeURIComponent(term);
  }

  if (headerSearchInput) {
    headerSearchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") goToSearch();
    });
  }

  /* ================== CART ELEMENTS ================== */
  const emptySection = document.getElementById("empty-cart");
  const cartContent = document.getElementById("cart-content");
  const tbody = document.getElementById("cart-items-body");

  const itemsSpan = document.getElementById("summary-items");
  const subtotalSpan = document.getElementById("summary-subtotal");
  const taxSpan = document.getElementById("summary-tax");
  const totalSpan = document.getElementById("summary-total");

  const headerBadge = document.querySelector(".cart-count");

  /* ================== LANGUAGE ELEMENTS (based on YOUR HTML) ================== */
  const langSelect = document.querySelector(".lang-select");

  // Cart header texts
  const cartTitleEl = document.querySelector(".cart-header h2");
  const cartSubtitleEl = document.querySelector(".cart-header p");

  // Empty state texts
  const emptyTextEl = emptySection ? emptySection.querySelector("p") : null;
  const emptyBtnEl = emptySection
    ? emptySection.querySelector("a.btn-primary")
    : null;

  // Table headers
  const ths = document.querySelectorAll(".cart-table thead th");
  const thProduct = ths[0] || null;
  const thPrice = ths[1] || null;
  const thQty = ths[2] || null;
  const thSubtotal = ths[3] || null;

  // Summary labels
  const summaryTitleEl = document.querySelector(".cart-summary h3");
  const summaryRows = document.querySelectorAll(".cart-summary .summary-row");
  const summaryItemsLabel = summaryRows[0]?.querySelector("span:first-child") || null;
  const summarySubtotalLabel = summaryRows[1]?.querySelector("span:first-child") || null;
  const summaryTaxLabel = summaryRows[2]?.querySelector("span:first-child") || null;
  const summaryTotalLabel = document.querySelector(".summary-total span:first-child");

  // Checkout button + back link
  const checkoutBtn = document.querySelector(".summary-btn");
  const backLink = document.querySelector(".cart-summary .back-link");

  // Nav (keep icons)
  const navLinks = document.querySelectorAll(".nav a");
  const navIconsHTML = Array.from(navLinks).map((link) => {
    const img = link.querySelector("img");
    return img ? img.outerHTML : "";
  });

  // Footer
  const footerSections = document.querySelectorAll(".site-footer .footer-section");
  const footerBrandText = footerSections[0]?.querySelector(".footer-text") || null;
  const footerQuickTitle = footerSections[1]?.querySelector("h3") || null;
  const footerCatsTitle = footerSections[2]?.querySelector("h3") || null;
  const footerFollowTitle = footerSections[3]?.querySelector("h3") || null;
  const footerBuilt = document.querySelector(".footer-bottom p:last-child");
  const footerCatLinks = footerSections[2]
    ? footerSections[2].querySelectorAll("ul li a")
    : [];

  /* ================== TRANSLATIONS ================== */
  const translations = {
    en: {
      nav: ["Home", "Products", "About", "Contact"],

      cartTitle: "Your Cart",
      cartSubtitle: "Review your items before checkout.",

      emptyText: "Your cart is currently empty.",
      emptyBtn: "Continue shopping",

      table: ["Product", "Price", "Quantity", "Subtotal"],

      summaryTitle: "Order Summary",
      summaryItems: "Items",
      summarySubtotal: "Subtotal",
      summaryTax: "Estimated tax (10%)",
      summaryTotal: "Total",
      checkout: "Proceed to checkout",
      back: "← Continue shopping",

      remove: "Remove",

      footerBrand:
        "Your one-stop destination for all home essentials. Quality, convenience, and value in one place.",
      footerQuick: "Quick Links",
      footerCats: "Categories",
      footerFollow: "Follow Us",
      footerBuilt: "Built with ❤️ for your home.",

      catLabels: [
        "Furniture",
        "Kitchenware",
        "Electronics",
        "Lighting",
        "Decor",
        "Storage",
        "Bedding",
        "Appliances",
      ],

      // product name translations (optional but nice)
      productNames: {
        "Dining table": "Dining table",
        Lamp: "Lamp",
        pot: "pot",
        Mixer: "Mixer",
        Mirror: "Mirror",
        tv: "tv",
      },
    },

    fr: {
      nav: ["Accueil", "Produits", "À propos", "Contact"],

      cartTitle: "Votre panier",
      cartSubtitle: "Vérifiez vos articles avant le paiement.",

      emptyText: "Votre panier est actuellement vide.",
      emptyBtn: "Continuer vos achats",

      table: ["Produit", "Prix", "Quantité", "Sous-total"],

      summaryTitle: "Résumé de la commande",
      summaryItems: "Articles",
      summarySubtotal: "Sous-total",
      summaryTax: "Taxe estimée (10%)",
      summaryTotal: "Total",
      checkout: "Passer au paiement",
      back: "← Continuer vos achats",

      remove: "Supprimer",

      footerBrand:
        "Votre destination unique pour tous les essentiels de la maison. Qualité, commodité et valeur au même endroit.",
      footerQuick: "Liens rapides",
      footerCats: "Catégories",
      footerFollow: "Suivez-nous",
      footerBuilt: "Créé avec ❤️ pour votre maison.",

      catLabels: [
        "Meubles",
        "Articles de cuisine",
        "Électronique",
        "Éclairage",
        "Décor",
        "Rangement",
        "Literie",
        "Électroménagers",
      ],

      productNames: {
        "Dining table": "Table à manger",
        Lamp: "Lampe",
        pot: "Casserole",
        Mixer: "Mixeur",
        Mirror: "Miroir",
        tv: "Télévision",
      },
    },
  };

  function getLang() {
    return localStorage.getItem("homeease-lang") || "en";
  }

  function applyLanguage(lang) {
    const t = translations[lang] || translations.en;

    // NAV (keep icons)
    navLinks.forEach((link, i) => {
      link.innerHTML = (navIconsHTML[i] || "") + " " + (t.nav[i] || "");
    });

    // Cart header
    if (cartTitleEl) cartTitleEl.textContent = t.cartTitle;
    if (cartSubtitleEl) cartSubtitleEl.textContent = t.cartSubtitle;

    // Empty state
    if (emptyTextEl) emptyTextEl.textContent = t.emptyText;
    if (emptyBtnEl) emptyBtnEl.textContent = t.emptyBtn;

    // Table headers
    if (thProduct) thProduct.textContent = t.table[0];
    if (thPrice) thPrice.textContent = t.table[1];
    if (thQty) thQty.textContent = t.table[2];
    if (thSubtotal) thSubtotal.textContent = t.table[3];

    // Summary
    if (summaryTitleEl) summaryTitleEl.textContent = t.summaryTitle;
    if (summaryItemsLabel) summaryItemsLabel.textContent = t.summaryItems;
    if (summarySubtotalLabel) summarySubtotalLabel.textContent = t.summarySubtotal;
    if (summaryTaxLabel) summaryTaxLabel.textContent = t.summaryTax;
    if (summaryTotalLabel) summaryTotalLabel.textContent = t.summaryTotal;

    if (checkoutBtn) checkoutBtn.textContent = t.checkout;
    if (backLink) backLink.textContent = t.back;

    // Footer
    if (footerBrandText) footerBrandText.textContent = t.footerBrand;
    if (footerQuickTitle) footerQuickTitle.textContent = t.footerQuick;
    if (footerCatsTitle) footerCatsTitle.textContent = t.footerCats;
    if (footerFollowTitle) footerFollowTitle.textContent = t.footerFollow;
    if (footerBuilt) footerBuilt.textContent = t.footerBuilt;

    footerCatLinks.forEach((a, i) => {
      if (t.catLabels[i]) a.textContent = t.catLabels[i];
    });
  }

  /* ================== CART STATE ================== */
  let cartItems = [];
  try {
    cartItems = JSON.parse(localStorage.getItem("homeease-cart-items") || "[]");
  } catch {
    cartItems = [];
  }

  function formatMoney(value) {
    return `$${value.toFixed(2)}`;
  }

  function syncHeaderBadge(totalItems) {
    localStorage.setItem("homeease-cart-count", String(totalItems));
    if (!headerBadge) return;

    headerBadge.textContent = String(totalItems);
    headerBadge.style.display = totalItems > 0 ? "inline-flex" : "none";
  }

  function updateSummary() {
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    if (itemsSpan) itemsSpan.textContent = String(totalItems);
    if (subtotalSpan) subtotalSpan.textContent = formatMoney(subtotal);
    if (taxSpan) taxSpan.textContent = formatMoney(tax);
    if (totalSpan) totalSpan.textContent = formatMoney(total);

    syncHeaderBadge(totalItems);
  }

  function saveCart() {
    localStorage.setItem("homeease-cart-items", JSON.stringify(cartItems));
  }

  function renderRows() {
    if (!tbody) return;
    tbody.innerHTML = "";

    const lang = getLang();
    const t = translations[lang] || translations.en;

    cartItems.forEach((item) => {
      const tr = document.createElement("tr");

      // Name (translated)
      const tdName = document.createElement("td");
      const translatedName = t.productNames[item.name] || item.name;
      tdName.textContent = translatedName;

      // Price
      const tdPrice = document.createElement("td");
      tdPrice.className = "price";
      tdPrice.textContent = formatMoney(item.price);

      // Qty controls
      const tdQty = document.createElement("td");
      tdQty.className = "qty";

      const qtyWrapper = document.createElement("div");
      qtyWrapper.className = "qty-controls";

      const btnMinus = document.createElement("button");
      btnMinus.className = "qty-btn";
      btnMinus.type = "button";
      btnMinus.textContent = "-";

      const qtyValue = document.createElement("span");
      qtyValue.className = "qty-value";
      qtyValue.textContent = String(item.quantity);

      const btnPlus = document.createElement("button");
      btnPlus.className = "qty-btn";
      btnPlus.type = "button";
      btnPlus.textContent = "+";

      qtyWrapper.appendChild(btnMinus);
      qtyWrapper.appendChild(qtyValue);
      qtyWrapper.appendChild(btnPlus);
      tdQty.appendChild(qtyWrapper);

      // Subtotal
      const tdSubtotal = document.createElement("td");
      tdSubtotal.className = "subtotal";
      tdSubtotal.textContent = formatMoney(item.price * item.quantity);

      // Remove
      const tdRemove = document.createElement("td");
      const removeBtn = document.createElement("button");
      removeBtn.className = "remove-btn";
      removeBtn.type = "button";
      removeBtn.textContent = t.remove;
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

  function toggleEmptyState() {
    if (!emptySection || !cartContent) return;

    if (!cartItems || cartItems.length === 0) {
      emptySection.style.display = "block";
      cartContent.style.display = "none";
    } else {
      emptySection.style.display = "none";
      cartContent.style.display = "block";
    }
  }

  function saveAndRefresh() {
    saveCart();
    toggleEmptyState();
    renderRows();
  }

  /* ================== INIT ================== */
  const savedLang = getLang();
  applyLanguage(savedLang);
  if (langSelect) langSelect.value = savedLang;

  if (langSelect) {
    langSelect.addEventListener("change", () => {
      const lang = langSelect.value;
      localStorage.setItem("homeease-lang", lang);

      // Update static texts + also re-render rows so "Remove" and product names translate
      applyLanguage(lang);
      renderRows();
    });
  }

  // Show correct view + render if needed
  toggleEmptyState();
  if (cartItems && cartItems.length > 0) renderRows();
  else syncHeaderBadge(0);
});
