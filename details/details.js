
const PRODUCT_META = [
  { id: 1, name: "Dining table", price: 100, mainImg: "/images /Kitchen 3.png", desc: "A modern dining table perfect for any home." },
  { id: 2, name: "Lamp", price: 60.5, mainImg: "/images /Lamp1.png", desc: "Elegant lamp to brighten your space." },
  { id: 3, name: "pot", price: 80.99, mainImg: "/images /Kitchen.png", desc: "High-quality kitchen pot." },
  { id: 4, name: "Mixer", price: 55.66, mainImg: "/images /Kitchen-2.png", desc: "Reliable mixer for home cooking." },
  { id: 5, name: "Mirror", price: 54.77, mainImg: "/images /Mirror.png", desc: "Minimalist mirror for modern homes." },
  { id: 6, name: "tv", price: 110.99, mainImg: "/images /Tv.png", desc: "Smart TV with HD display." }
];

// Read ID from URL
const id = new URLSearchParams(window.location.search).get("id");
const product = PRODUCT_META.find(p => p.id == id);

// Inject into HTML
document.querySelector(".product-image").src = product.mainImg;
document.querySelector(".product-name").textContent = product.name;
document.querySelector(".product-price").textContent = `$${product.price.toFixed(2)}`;
document.querySelector(".product-desc").textContent = product.desc;

// Cart count display
const cartCountEl = document.querySelector(".cart-count");
let cartCount = parseInt(localStorage.getItem("homeease-cart-count") || "0");
cartCountEl.textContent = cartCount;

// Add to cart button
document.querySelector(".add-to-cart-btn").addEventListener("click", () => {
  cartCount++;
  localStorage.setItem("homeease-cart-count", cartCount);
  cartCountEl.textContent = cartCount;
});
