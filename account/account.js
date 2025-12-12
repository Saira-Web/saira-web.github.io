document.addEventListener("DOMContentLoaded", () => {
  /* ================== HEADER SEARCH ================== */
  const headerSearchInput = document.querySelector("header .search input");
  if (headerSearchInput) {
    headerSearchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const term = headerSearchInput.value.trim();
        if (!term) return;
        window.location.href =
          "/products/products.html?search=" + encodeURIComponent(term);
      }
    });
  }

  /* ================== ACCOUNT ELEMENTS ================== */
  const nameEl = document.getElementById("accountName");
  const emailEl = document.getElementById("accountEmail");
  const avatarInitial = document.getElementById("avatarInitial");

  const ovName = document.getElementById("ovName");
  const ovEmail = document.getElementById("ovEmail");
  const ovOrders = document.getElementById("ovOrders");
  const ovLastOrder = document.getElementById("ovLastOrder");

  const ordersList = document.getElementById("ordersList");

  const profileForm = document.getElementById("profileForm");
  const profileNameInput = document.getElementById("profileName");
  const profileEmailInput = document.getElementById("profileEmail");
  const newPasswordInput = document.getElementById("newPassword");
  const confirmPasswordInput = document.getElementById("confirmPassword");
  const statusEl = document.getElementById("accountStatus");

  const navButtons = document.querySelectorAll(".account-nav-btn");
  const tabs = document.querySelectorAll(".account-tab");

  // Sidebar labels
  const memberSinceLabel = document.querySelector(".account-meta p:nth-child(1) strong");
  const tierLabel = document.querySelector(".account-meta p:nth-child(2) strong");

  // Tab headings + subtitles (by order in your HTML)
  const overviewH2 = document.querySelector("#tab-overview h2");
  const overviewSubtitle = document.querySelector("#tab-overview .tab-subtitle");
  const overviewCard1Title = document.querySelector("#tab-overview .overview-card:nth-child(1) h3");
  const overviewCard2Title = document.querySelector("#tab-overview .overview-card:nth-child(2) h3");

  const ordersH2 = document.querySelector("#tab-orders h2");
  const ordersSubtitle = document.querySelector("#tab-orders .tab-subtitle");

  const settingsH2 = document.querySelector("#tab-settings h2");
  const settingsSubtitle = document.querySelector("#tab-settings .tab-subtitle");
  const labelFullName = document.querySelector('label[for="profileName"]');
  const labelEmail = document.querySelector('label[for="profileEmail"]');
  const labelNewPass = document.querySelector('label[for="newPassword"]');
  const labelConfirmPass = document.querySelector('label[for="confirmPassword"]');
  const formHint = document.querySelector(".form-hint");
  const saveBtn = document.querySelector(".btn-save");

  /* ================== NAV (keep icons) ================== */
  const langSelect = document.querySelector(".lang-select");
  const navLinks = document.querySelectorAll(".nav a");
  const navIconsHTML = Array.from(navLinks).map((link) => {
    const img = link.querySelector("img");
    return img ? img.outerHTML : "";
  });

  /* ================== FOOTER ================== */
  const footerBrandText = document.querySelector(".footer-text");
  const footerQuickTitle = document.querySelector(".site-footer .footer-section:nth-child(2) h3");
  const footerCatsTitle = document.querySelector(".site-footer .footer-section:nth-child(3) h3");
  const footerFollowTitle = document.querySelector(".site-footer .footer-section:nth-child(4) h3");
  const footerBuilt = document.querySelector(".footer-bottom p:last-child");
  const footerCatLinks = document.querySelectorAll(
    ".site-footer .footer-section:nth-child(3) ul li a"
  );

  /* ================== TRANSLATIONS ================== */
  const translations = {
    en: {
      nav: ["Home", "Products", "About", "Contact"],
      loginDefault: "Log in",

      // sidebar buttons
      btnOverview: "Overview",
      btnOrders: "Orders",
      btnSettings: "Settings",

      memberSince: "Member since:",
      tier: "Tier:",

      // overview tab
      overviewTitle: "Account Overview",
      overviewSubtitle:
        "Manage your personal details and see a quick summary of your activity.",
      personalDetails: "Personal Details",
      orderSnapshot: "Order Snapshot",
      labelName: "Name:",
      labelEmail: "Email:",
      totalOrders: "Total orders:",
      lastOrder: "Last order:",

      // orders tab
      ordersTitle: "Your Orders",
      ordersSubtitle: "Track your recent purchases and check their status.",
      noOrders: "You have no orders yet.",

      // settings tab
      settingsTitle: "Account Settings",
      settingsSubtitle: "Update your profile information and password.",
      fullName: "Full Name",
      emailAddress: "Email Address",
      newPassword: "New Password",
      confirmPassword: "Confirm Password",
      hint:
        "Leave password fields empty if you don't want to change your password.",
      save: "Save changes",

      // status messages
      errRequired: "Name and email are required.",
      errEmail: "Please enter a valid email address.",
      errPassLen: "Password should be at least 6 characters long.",
      errPassMatch: "Passwords do not match.",
      success: "Profile updated successfully.",

      // footer
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
    },

    fr: {
      nav: ["Accueil", "Produits", "À propos", "Contact"],
      loginDefault: "Connexion",

      btnOverview: "Aperçu",
      btnOrders: "Commandes",
      btnSettings: "Paramètres",

      memberSince: "Membre depuis :",
      tier: "Niveau :",

      overviewTitle: "Aperçu du compte",
      overviewSubtitle:
        "Gérez vos informations personnelles et consultez un résumé de votre activité.",
      personalDetails: "Informations personnelles",
      orderSnapshot: "Résumé des commandes",
      labelName: "Nom :",
      labelEmail: "E-mail :",
      totalOrders: "Total des commandes :",
      lastOrder: "Dernière commande :",

      ordersTitle: "Vos commandes",
      ordersSubtitle:
        "Suivez vos achats récents et vérifiez leur statut.",
      noOrders: "Vous n’avez pas encore de commandes.",

      settingsTitle: "Paramètres du compte",
      settingsSubtitle:
        "Mettez à jour votre profil et votre mot de passe.",
      fullName: "Nom complet",
      emailAddress: "Adresse e-mail",
      newPassword: "Nouveau mot de passe",
      confirmPassword: "Confirmer le mot de passe",
      hint:
        "Laissez les champs de mot de passe vides si vous ne voulez pas le modifier.",
      save: "Enregistrer",

      errRequired: "Le nom et l’e-mail sont obligatoires.",
      errEmail: "Veuillez entrer une adresse e-mail valide.",
      errPassLen: "Le mot de passe doit contenir au moins 6 caractères.",
      errPassMatch: "Les mots de passe ne correspondent pas.",
      success: "Profil mis à jour avec succès.",

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
    },
  };

  function getLang() {
    return localStorage.getItem("homeease-lang") || "en";
  }

  function applyLanguage(lang) {
    const t = translations[lang] || translations.en;

    // NAV keep icons
    navLinks.forEach((link, i) => {
      link.innerHTML = (navIconsHTML[i] || "") + " " + (t.nav[i] || "");
    });

    // Login label (if still "Log in")
    const loginSpan = document.querySelector(".login span");
    if (loginSpan && (loginSpan.textContent.trim() === "Log in" || loginSpan.textContent.trim() === "Connexion")) {
      loginSpan.textContent = t.loginDefault;
    }

    // Sidebar buttons
    const btnOverview = document.querySelector('.account-nav-btn[data-tab="overview"]');
    const btnOrders = document.querySelector('.account-nav-btn[data-tab="orders"]');
    const btnSettings = document.querySelector('.account-nav-btn[data-tab="settings"]');
    if (btnOverview) btnOverview.textContent = t.btnOverview;
    if (btnOrders) btnOrders.textContent = t.btnOrders;
    if (btnSettings) btnSettings.textContent = t.btnSettings;

    // Sidebar meta labels
    if (memberSinceLabel) memberSinceLabel.textContent = t.memberSince;
    if (tierLabel) tierLabel.textContent = t.tier;

    // Overview tab
    if (overviewH2) overviewH2.textContent = t.overviewTitle;
    if (overviewSubtitle) overviewSubtitle.textContent = t.overviewSubtitle;
    if (overviewCard1Title) overviewCard1Title.textContent = t.personalDetails;
    if (overviewCard2Title) overviewCard2Title.textContent = t.orderSnapshot;

    // Change the <strong> labels inside overview card paragraphs
    const ovStrong = document.querySelectorAll("#tab-overview .overview-card p strong");
    if (ovStrong[0]) ovStrong[0].textContent = t.labelName;
    if (ovStrong[1]) ovStrong[1].textContent = t.labelEmail;
    if (ovStrong[2]) ovStrong[2].textContent = t.totalOrders;
    if (ovStrong[3]) ovStrong[3].textContent = t.lastOrder;

    // Orders tab
    if (ordersH2) ordersH2.textContent = t.ordersTitle;
    if (ordersSubtitle) ordersSubtitle.textContent = t.ordersSubtitle;

    // Settings tab
    if (settingsH2) settingsH2.textContent = t.settingsTitle;
    if (settingsSubtitle) settingsSubtitle.textContent = t.settingsSubtitle;
    if (labelFullName) labelFullName.textContent = t.fullName;
    if (labelEmail) labelEmail.textContent = t.emailAddress;
    if (labelNewPass) labelNewPass.textContent = t.newPassword;
    if (labelConfirmPass) labelConfirmPass.textContent = t.confirmPassword;
    if (formHint) formHint.textContent = t.hint;
    if (saveBtn) saveBtn.textContent = t.save;

    // Footer
    if (footerBrandText) footerBrandText.textContent = t.footerBrand;
    if (footerQuickTitle) footerQuickTitle.textContent = t.footerQuick;
    if (footerCatsTitle) footerCatsTitle.textContent = t.footerCats;
    if (footerFollowTitle) footerFollowTitle.textContent = t.footerFollow;
    if (footerBuilt) footerBuilt.textContent = t.footerBuilt;

    if (footerCatLinks.length && t.catLabels) {
      footerCatLinks.forEach((a, i) => {
        if (t.catLabels[i]) a.textContent = t.catLabels[i];
      });
    }
  }

  /* ================== PROFILE ================== */
  function loadProfile() {
    const storedName = localStorage.getItem("homeease-profile-name") || "Guest";
    const storedEmail =
      localStorage.getItem("homeease-profile-email") || "guest@example.com";

    if (nameEl) nameEl.textContent = storedName;
    if (emailEl) emailEl.textContent = storedEmail;

    if (ovName) ovName.textContent = storedName;
    if (ovEmail) ovEmail.textContent = storedEmail;

    if (profileNameInput) profileNameInput.value = storedName;
    if (profileEmailInput) profileEmailInput.value = storedEmail;

    if (avatarInitial) {
      avatarInitial.textContent = storedName.trim()[0]?.toUpperCase() || "G";
    }

    // Put user's name in header login span
    const loginSpan = document.querySelector(".login span");
    if (loginSpan && storedName && storedName !== "Guest") {
      loginSpan.textContent = storedName;
    }
  }

  /* ================== ORDERS ================== */
  function renderOrders() {
    if (!ordersList) return;

    const lang = getLang();
    const t = translations[lang] || translations.en;

    ordersList.innerHTML = "";

    if (!demoOrders.length) {
      ordersList.innerHTML = `<p>${t.noOrders}</p>`;
      if (ovOrders) ovOrders.textContent = "0";
      if (ovLastOrder) ovLastOrder.textContent = "—";
      return;
    }

    if (ovOrders) ovOrders.textContent = String(demoOrders.length);
    if (ovLastOrder) ovLastOrder.textContent = demoOrders[0].date;

    demoOrders.forEach((order) => {
      const card = document.createElement("article");
      card.className = "order-card";

      const statusText =
        order.status.charAt(0).toUpperCase() + order.status.slice(1);

      card.innerHTML = `
        <div class="order-main">
          <p><strong>Order #${order.id}</strong></p>
          <p>${order.date} • ${order.items} item(s)</p>
        </div>
        <div class="order-side">
          <p><strong>$${order.total.toFixed(2)}</strong></p>
          <p class="order-status ${order.status}">${statusText}</p>
        </div>
      `;
      ordersList.appendChild(card);
    });
  }

  /* ================== TABS ================== */
  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabName = btn.dataset.tab;

      navButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      tabs.forEach((tab) => {
        tab.classList.toggle("active", tab.id === `tab-${tabName}`);
      });
    });
  });

  /* ================== FORM SUBMIT ================== */
  if (profileForm) {
    profileForm.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!statusEl) return;
      statusEl.textContent = "";
      statusEl.className = "form-status";

      const lang = getLang();
      const t = translations[lang] || translations.en;

      const name = profileNameInput.value.trim();
      const email = profileEmailInput.value.trim();
      const newPass = newPasswordInput.value;
      const confirmPass = confirmPasswordInput.value;

      if (!name || !email) {
        statusEl.textContent = t.errRequired;
        statusEl.classList.add("error");
        return;
      }

      if (!email.includes("@") || !email.includes(".")) {
        statusEl.textContent = t.errEmail;
        statusEl.classList.add("error");
        return;
      }

      if (newPass || confirmPass) {
        if (newPass.length < 6) {
          statusEl.textContent = t.errPassLen;
          statusEl.classList.add("error");
          return;
        }
        if (newPass !== confirmPass) {
          statusEl.textContent = t.errPassMatch;
          statusEl.classList.add("error");
          return;
        }
      }

      localStorage.setItem("homeease-profile-name", name);
      localStorage.setItem("homeease-profile-email", email);

      loadProfile();

      newPasswordInput.value = "";
      confirmPasswordInput.value = "";

      statusEl.textContent = t.success;
      statusEl.classList.add("success");
    });
  }

  /* ================== LANGUAGE INIT ================== */
  const savedLang = getLang();
  applyLanguage(savedLang);
  if (langSelect) langSelect.value = savedLang;

  if (langSelect) {
    langSelect.addEventListener("change", () => {
      const lang = langSelect.value;
      localStorage.setItem("homeease-lang", lang);
      applyLanguage(lang);
      renderOrders(); // so "no orders" changes language too
    });
  }

  /* ================== INIT ================== */
  loadProfile();
  renderOrders();
});
