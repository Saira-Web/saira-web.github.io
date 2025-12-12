// This is for third feature. 
document.addEventListener("DOMContentLoaded", () => {
  // ===== HEADER SEARCH (go to products page) =====
  const headerSearchInput = document.querySelector("header .search input");

  function goToSearch() {
    if (!headerSearchInput) return;
    const term = headerSearchInput.value.trim();
    if (!term) return;
    const url = "/products/products.html?search=" + encodeURIComponent(term);
    window.location.href = url;
  }

  if (headerSearchInput) {
    headerSearchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        goToSearch();
      }
    });
  }

  // ===== LANGUAGE SWITCH =====
  const langSelect = document.querySelector(".lang-select");

  // Nav links + keep icons
  const navLinks = document.querySelectorAll(".nav a");
  const navIconsHTML = Array.from(navLinks).map((link) => {
    const img = link.querySelector("img");
    return img ? img.outerHTML : "";
  });

  // ----- ABOUT PAGE ELEMENTS -----
  // About hero text
  const aboutTitle = document.getElementById("about-title");
  const aboutP1    = document.getElementById("about-p1");
  const aboutP2    = document.getElementById("about-p2");
  const aboutP3    = document.getElementById("about-p3");

  // Our values
  const valuesTitle     = document.getElementById("values-title");
  const valuesSubtitle  = document.getElementById("values-subtitle");
  const value1Title     = document.getElementById("value1-title");
  const value1Text      = document.getElementById("value1-text");
  const value2Title     = document.getElementById("value2-title");
  const value2Text      = document.getElementById("value2-text");
  const value3Title     = document.getElementById("value3-title");
  const value3Text      = document.getElementById("value3-text");
  const value4Title     = document.getElementById("value4-title");
  const value4Text      = document.getElementById("value4-text");

  // Why choose us
  const whyTitle     = document.getElementById("why-title");
  const whySubtitle  = document.getElementById("why-subtitle");
  const why1Title    = document.getElementById("why1-title");
  const why1Text     = document.getElementById("why1-text");
  const why2Title    = document.getElementById("why2-title");
  const why2Text     = document.getElementById("why2-text");
  const why3Title    = document.getElementById("why3-title");
  const why3Text     = document.getElementById("why3-text");

  // ----- FOOTER ELEMENTS -----
  const footerSections   = document.querySelectorAll(".footer-section");
  const footerBrandText  = footerSections[0]?.querySelector("p") || null;
  const footerQuick      = footerSections[1]?.querySelector("h3") || null;
  const footerCats       = footerSections[2]?.querySelector("h3") || null;
  const footerFollow     = footerSections[3]?.querySelector("h3") || null;
  const footerBuilt      = document.querySelector(".footer-bottom p:last-child");

  const footerCatLinks = footerSections[2]
    ? footerSections[2].querySelectorAll("ul li a")
    : [];

  // Texts for EN & FR
  const translations = {
    en: {
      navHome: "Home",
      navProducts: "Products",
      navAbout: "About",
      navContact: "Contact",

      aboutTitleHTML: 'About <span>HomeEase</span>',
      aboutP1:
        "We're passionate about helping families, students, and new homeowners create comfortable, functional living spaces without the hassle of visiting multiple stores.",
      aboutP2:
        "Founded with the vision of simplifying home shopping, HomeEase brings together everything you need for your home in one convenient platform.",
      aboutP3:
        "Whether you're furnishing your first apartment, upgrading your space, or setting up your Canadian home, we make the process simple and enjoyable.",

      valuesTitle: "Our Values",
      valuesSubtitle: "The principles that guide everything we do.",

      value1Title: "Customer First",
      value1Text: "Every decision we make puts our customers first.",
      value2Title: "Quality Guaranteed",
      value2Text: "We ensure every item meets our standards.",
      value3Title: "Community Focus",
      value3Text: "We build relationships with local communities.",
      value4Title: "Innovation Driven",
      value4Text: "We find new ways to improve your experience.",

      whyTitle: "Why Choose HomeEase?",
      whySubtitle: "We make home shopping simple and reliable.",
      why1Title: "Fast & Free Delivery",
      why1Text: "Free delivery on orders over $99.",
      why2Title: "24/7 Customer Support",
      why2Text: "Our team is always ready to help.",
      why3Title: "Secure Shopping",
      why3Text: "Your information is always protected.",

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
      navHome: "Accueil",
      navProducts: "Produits",
      navAbout: "À propos",
      navContact: "Contact",

      aboutTitleHTML: 'À propos de <span>HomeEase</span>',
      aboutP1:
        "Nous aidons les familles, les étudiants et les nouveaux propriétaires à créer des espaces de vie confortables et fonctionnels, sans avoir à visiter plusieurs magasins.",
      aboutP2:
        "Avec la vision de simplifier les achats pour la maison, HomeEase regroupe tout ce dont vous avez besoin sur une seule plateforme pratique.",
      aboutP3:
        "Que vous aménagiez votre premier appartement, amélioriez votre espace ou installiez votre nouveau foyer au Canada, nous rendons le processus simple et agréable.",

      valuesTitle: "Nos valeurs",
      valuesSubtitle: "Les principes qui guident tout ce que nous faisons.",

      value1Title: "Client avant tout",
      value1Text: "Chaque décision que nous prenons place nos clients en premier.",
      value2Title: "Qualité garantie",
      value2Text:
        "Nous veillons à ce que chaque article respecte nos normes.",
      value3Title: "Ancrés dans la communauté",
      value3Text:
        "Nous bâtissons des relations avec les communautés locales.",
      value4Title: "Guidés par l’innovation",
      value4Text:
        "Nous trouvons de nouvelles façons d’améliorer votre expérience.",

      whyTitle: "Pourquoi choisir HomeEase ?",
      whySubtitle:
        "Nous rendons les achats pour la maison simples et fiables.",
      why1Title: "Livraison rapide et gratuite",
      why1Text: "Livraison gratuite pour les commandes de plus de 99 $.",
      why2Title: "Soutien client 24/7",
      why2Text:
        "Notre équipe est toujours prête à vous aider.",
      why3Title: "Achats sécurisés",
      why3Text:
        "Vos informations sont toujours protégées.",

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

  // Change all texts
  function applyLanguage(lang) {
    const t = translations[lang] || translations.en;

    // Nav labels (keep icons)
    const labels = [t.navHome, t.navProducts, t.navAbout, t.navContact];
    navLinks.forEach((link, i) => {
      const iconHTML = navIconsHTML[i] || "";
      link.innerHTML = iconHTML + " " + labels[i];
    });

    // About hero
    if (aboutTitle) aboutTitle.innerHTML   = t.aboutTitleHTML;
    if (aboutP1)    aboutP1.textContent    = t.aboutP1;
    if (aboutP2)    aboutP2.textContent    = t.aboutP2;
    if (aboutP3)    aboutP3.textContent    = t.aboutP3;

    // Values
    if (valuesTitle)    valuesTitle.textContent    = t.valuesTitle;
    if (valuesSubtitle) valuesSubtitle.textContent = t.valuesSubtitle;

    if (value1Title) value1Title.textContent = t.value1Title;
    if (value1Text)  value1Text.textContent  = t.value1Text;
    if (value2Title) value2Title.textContent = t.value2Title;
    if (value2Text)  value2Text.textContent  = t.value2Text;
    if (value3Title) value3Title.textContent = t.value3Title;
    if (value3Text)  value3Text.textContent  = t.value3Text;
    if (value4Title) value4Title.textContent = t.value4Title;
    if (value4Text)  value4Text.textContent  = t.value4Text;

    // Why choose us
    if (whyTitle)    whyTitle.textContent    = t.whyTitle;
    if (whySubtitle) whySubtitle.textContent = t.whySubtitle;

    if (why1Title) why1Title.textContent = t.why1Title;
    if (why1Text)  why1Text.textContent  = t.why1Text;
    if (why2Title) why2Title.textContent = t.why2Title;
    if (why2Text)  why2Text.textContent  = t.why2Text;
    if (why3Title) why3Title.textContent = t.why3Title;
    if (why3Text)  why3Text.textContent  = t.why3Text;

    // Footer brand text
    if (footerBrandText) footerBrandText.textContent = t.footerBrand;

    // Footer headings
    if (footerQuick)  footerQuick.textContent  = t.footerQuick;
    if (footerCats)   footerCats.textContent   = t.footerCats;
    if (footerFollow) footerFollow.textContent = t.footerFollow;
    if (footerBuilt)  footerBuilt.textContent  = t.footerBuilt;

    // Footer category list
    if (footerCatLinks.length && t.catLabels) {
      footerCatLinks.forEach((el, i) => {
        if (t.catLabels[i]) el.textContent = t.catLabels[i];
      });
    }
  }

  // Load saved language
  const savedLang = localStorage.getItem("homeease-lang") || "en";
  applyLanguage(savedLang);
  if (langSelect) {
    langSelect.value = savedLang;
  }

  // On dropdown change
  if (langSelect) {
    langSelect.addEventListener("change", () => {
      const lang = langSelect.value;
      localStorage.setItem("homeease-lang", lang);
      applyLanguage(lang);
    });
  }
});
