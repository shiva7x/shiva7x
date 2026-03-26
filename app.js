'use strict';

// ─── Product Data ────────────────────────────────────────────
const products = [
  // Calming
  { id:1,  name:'Chamomile Classic',      emoji:'🌼', category:'calming',    price:12.00, desc:'Gentle, apple-sweet chamomile for wind-down rituals and restful sleep.' },
  { id:2,  name:'Lavender Dream',         emoji:'💜', category:'calming',    price:13.50, desc:'Soft floral lavender that soothes the nervous system and quiets a busy mind.' },
  { id:3,  name:'Lemon Balm Calm',        emoji:'🍋', category:'calming',    price:12.50, desc:'Bright citrus-herb blend to ease anxiety and promote gentle relaxation.' },
  { id:4,  name:'Valerian Night',         emoji:'🌙', category:'calming',    price:14.00, desc:'Deep-acting valerian root steeped with passionflower for deep sleep.' },
  { id:5,  name:'Passionflower Peace',    emoji:'🌸', category:'calming',    price:13.00, desc:'Exotic passionflower to calm racing thoughts and ease nervous tension.' },
  { id:6,  name:'Ashwagandha Rest',       emoji:'🫚', category:'calming',    price:15.00, desc:'Adaptogenic ashwagandha with warm spice notes to reduce stress hormones.' },
  { id:7,  name:'Holy Basil Serenity',    emoji:'🌿', category:'calming',    price:12.00, desc:'Sacred tulsi with clove and pepper — calming yet gently clarifying.' },

  // Energising
  { id:8,  name:'Peppermint Pure',        emoji:'🌱', category:'energising', price:10.50, desc:'Crisp, cool peppermint to clear the head and invigorate the senses.' },
  { id:9,  name:'Ginger Fire',            emoji:'🫚', category:'energising', price:11.00, desc:'Bold fresh ginger with a warm, spicy finish — a natural morning wake-up.' },
  { id:10, name:'Spearmint Breeze',       emoji:'🌬️', category:'energising', price:10.50, desc:'Softer than peppermint, spearmint lifts energy with a smooth, sweet finish.' },
  { id:11, name:'Lemongrass Zest',        emoji:'🍃', category:'energising', price:11.50, desc:'Citrusy, grassy lemongrass with a refreshing lift for afternoons.' },
  { id:12, name:'Moringa Vitality',       emoji:'💚', category:'energising', price:14.50, desc:'Nutrient-dense moringa leaf with a mild grassy flavour and a steady energy boost.' },
  { id:13, name:'Ginger & Turmeric',      emoji:'🟡', category:'energising', price:12.50, desc:'Golden duo of ginger and turmeric — anti-inflammatory and energising.' },
  { id:14, name:'Cinnamon Spice',         emoji:'🍂', category:'energising', price:11.00, desc:'Warming Ceylon cinnamon to balance blood sugar and provide gentle energy.' },

  // Digestive
  { id:15, name:'Fennel Fresh',           emoji:'🌾', category:'digestive',  price:10.00, desc:'Mild anise-flavoured fennel seed to ease bloating and support digestion.' },
  { id:16, name:'Peppermint Digest',      emoji:'🌿', category:'digestive',  price:11.00, desc:'Classic peppermint with slippery elm — the ultimate post-meal comfort tea.' },
  { id:17, name:'Ginger Stomach Ease',    emoji:'🫚', category:'digestive',  price:11.50, desc:'Ginger with caraway and meadowsweet for complete digestive harmony.' },
  { id:18, name:'Dandelion Root',         emoji:'🌻', category:'digestive',  price:12.00, desc:'Roasted dandelion root — earthy, coffee-like, and brilliant for the liver.' },
  { id:19, name:'Milk Thistle Cleanse',   emoji:'🌷', category:'digestive',  price:13.50, desc:'Silymarin-rich milk thistle for liver support and gentle detox.' },
  { id:20, name:'Licorice Root',          emoji:'🟤', category:'digestive',  price:12.00, desc:'Naturally sweet licorice root to soothe the digestive tract and adrenals.' },
  { id:21, name:'Artichoke Bitters',      emoji:'🌱', category:'digestive',  price:13.00, desc:'Bitter artichoke leaf to stimulate bile and kickstart sluggish digestion.' },

  // Immune
  { id:22, name:'Echinacea Shield',       emoji:'🛡️', category:'immune',     price:13.00, desc:'Echinacea purpurea at peak potency — your go-to at the first sign of a cold.' },
  { id:23, name:'Elderberry Defence',     emoji:'🫐', category:'immune',     price:14.00, desc:'Dark, fruity elderberry packed with anthocyanins for immune resilience.' },
  { id:24, name:'Rosehip Vitamin C',      emoji:'🌹', category:'immune',     price:11.50, desc:'Tangy rosehips bursting with natural vitamin C to support year-round immunity.' },
  { id:25, name:'Nettle Nourish',         emoji:'🌿', category:'immune',     price:10.50, desc:'Mineral-rich nettle leaf for iron, calcium, and deep cellular nourishment.' },
  { id:26, name:'Turmeric Gold',          emoji:'✨', category:'immune',     price:13.00, desc:'Bright turmeric with black pepper for superior absorption — powerfully anti-inflammatory.' },
  { id:27, name:'Ginger Lemon Honey',     emoji:'🍯', category:'immune',     price:12.00, desc:'The classic immunity trinity: spicy ginger, bright lemon, golden honey.' },
  { id:28, name:'Astragalus Root',        emoji:'🌾', category:'immune',     price:14.50, desc:'Adaptogenic astragalus to build deep immune reserves over time.' },

  // Floral
  { id:29, name:'Hibiscus Bloom',         emoji:'🌺', category:'floral',     price:11.00, desc:'Vivid ruby hibiscus flowers with a tart, cranberry-like flavour and vitamin C.' },
  { id:30, name:'Jasmine Mist',           emoji:'🌸', category:'floral',     price:14.00, desc:'Delicate jasmine blossoms hand-tied with green tea for an ethereal floral cup.' },
  { id:31, name:'Rose Petal Bliss',       emoji:'🌹', category:'floral',     price:13.50, desc:'Fragrant whole rose petals for a romantic, gently astringent floral tea.' },
  { id:32, name:'Elderflower Spritz',     emoji:'🌼', category:'floral',     price:13.00, desc:'Honeyed elderflower with a delicate white-wine-like aroma and spring freshness.' },
  { id:33, name:'Chrysanthemum Clear',    emoji:'🌻', category:'floral',     price:12.50, desc:'Classic Asian chrysanthemum — cooling, slightly sweet, and cleansing for the liver.' },
  { id:34, name:'Lavender Chamomile',     emoji:'💐', category:'floral',     price:13.50, desc:'Elegant pairing of lavender and chamomile — the ultimate bedtime floral blend.' },
  { id:35, name:'Butterfly Pea Blue',     emoji:'🔵', category:'floral',     price:15.00, desc:'Striking indigo butterfly pea flower that turns purple with lemon juice.' },

  // Extra blends across categories
  { id:36, name:'Rooibos Red',            emoji:'🟥', category:'calming',    price:11.50, desc:'Naturally caffeine-free South African rooibos with a sweet, woody warmth.' },
  { id:37, name:'Green Mint Clarity',     emoji:'🍵', category:'energising', price:12.00, desc:'Sencha green tea with peppermint — focus, freshness, and a clean finish.' },
  { id:38, name:'Cacao Chaga',            emoji:'🍫', category:'immune',     price:16.00, desc:'Rich cacao with adaptogenic chaga mushroom for deep immune nourishment.' },
  { id:39, name:'Liquorice Fennel',       emoji:'🌾', category:'digestive',  price:11.50, desc:'Sweet liquorice root blended with fennel for a soothing digestive tonic.' },
  { id:40, name:'Hibiscus Rose',          emoji:'🌺', category:'floral',     price:13.00, desc:'Ruby hibiscus meets fragrant rose — a tangy, floral cup that stuns in colour.' },
  { id:41, name:'Peppermint Cacao',       emoji:'🍫', category:'energising', price:13.50, desc:'Cool peppermint meets dark cacao — like a mint chocolate after dinner.' },
  { id:42, name:'Chamomile Lavender',     emoji:'🌾', category:'calming',    price:14.00, desc:'Double-calming classic: apple-sweet chamomile with soothing lavender buds.' },
];

// ─── State ───────────────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('foliage_cart') || '[]');
let activeFilter = 'all';

// ─── Helpers ─────────────────────────────────────────────────
function saveCart() {
  localStorage.setItem('foliage_cart', JSON.stringify(cart));
}

function updateCartCount() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartCount').textContent = total;
}

function formatPrice(n) {
  return '$' + n.toFixed(2);
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2200);
}

// ─── Card colour palettes ─────────────────────────────────────
const palettes = {
  calming:    ['#e8f0ea','#c8dfcd'],
  energising: ['#fef9ee','#fde68a'],
  digestive:  ['#fff4ed','#fed7aa'],
  immune:     ['#f0fdf4','#bbf7d0'],
  floral:     ['#fdf4ff','#e9d5ff'],
};

function cardBg(cat) {
  const [a, b] = palettes[cat] || ['#f3f0eb','#e4dfda'];
  return `background: linear-gradient(135deg, ${a}, ${b});`;
}

// ─── Render ───────────────────────────────────────────────────
function renderProducts() {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';

  const visible = activeFilter === 'all'
    ? products
    : products.filter(p => p.category === activeFilter);

  visible.forEach(p => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.dataset.category = p.category;
    card.innerHTML = `
      <div class="card-thumb" style="${cardBg(p.category)}">${p.emoji}</div>
      <div class="card-body">
        <span class="card-category">${p.category}</span>
        <h3 class="card-name">${p.name}</h3>
        <p class="card-desc">${p.desc}</p>
      </div>
      <div class="card-footer">
        <span class="card-price">${formatPrice(p.price)}</span>
        <button class="add-btn" data-id="${p.id}">Add to cart</button>
      </div>
    `;
    grid.appendChild(card);
  });

  // Attach add-to-cart listeners
  grid.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', () => addToCart(Number(btn.dataset.id)));
  });
}

// ─── Cart logic ───────────────────────────────────────────────
function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id, name: product.name, emoji: product.emoji, price: product.price, qty: 1 });
  }
  saveCart();
  updateCartCount();
  renderCartItems();
  showToast(`${product.name} added to cart`);
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartCount();
  renderCartItems();
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  const totalEl = document.getElementById('cartTotal');

  if (cart.length === 0) {
    container.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
    footer.style.display = 'none';
    return;
  }

  footer.style.display = 'flex';
  container.innerHTML = '';

  cart.forEach(item => {
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <div class="cart-item-icon">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatPrice(item.price)}</div>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn" data-id="${item.id}" data-delta="-1">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" data-id="${item.id}" data-delta="1">+</button>
      </div>
    `;
    container.appendChild(el);
  });

  container.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => changeQty(Number(btn.dataset.id), Number(btn.dataset.delta)));
  });

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  totalEl.textContent = formatPrice(total);
}

// ─── Cart drawer ──────────────────────────────────────────────
function openCart() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ─── Filters ──────────────────────────────────────────────────
function initFilters() {
  document.getElementById('filters').querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      renderProducts();
    });
  });
}

// ─── Navbar scroll effect ─────────────────────────────────────
function initNavScroll() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.scrollY > 10 ? 'var(--border)' : 'transparent';
  }, { passive: true });
}

// ─── Checkout stub ────────────────────────────────────────────
function initCheckout() {
  document.getElementById('checkoutBtn').addEventListener('click', () => {
    showToast('Checkout coming soon — thanks for shopping Foliage!');
    closeCart();
  });
}

// ─── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  initFilters();
  initNavScroll();
  initCheckout();
  updateCartCount();
  renderCartItems();

  document.getElementById('cartBtn').addEventListener('click', openCart);
  document.getElementById('closeCart').addEventListener('click', closeCart);
  document.getElementById('cartOverlay').addEventListener('click', closeCart);
});
