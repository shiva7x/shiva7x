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

// ─── Category brew info ───────────────────────────────────────
const brewInfo = {
  calming:    { steep:'5–7 min', temp:'95°C', caffeine:'None' },
  energising: { steep:'3–5 min', temp:'100°C', caffeine:'Trace' },
  digestive:  { steep:'7–10 min', temp:'100°C', caffeine:'None' },
  immune:     { steep:'5–8 min', temp:'100°C', caffeine:'None' },
  floral:     { steep:'3–5 min', temp:'90°C', caffeine:'None' },
};

const sizes = [
  { label:'30g', multiplier: 1 },
  { label:'50g', multiplier: 1.55 },
  { label:'100g', multiplier: 2.75 },
];

// ─── State ───────────────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('foliage_cart') || '[]');
let activeFilter = 'all';
let selectedSize = 0; // index into sizes[]
let activeProductId = null;

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
      <div class="card-thumb" style="${cardBg(p.category)}" data-open="${p.id}" role="button" tabindex="0" aria-label="View ${p.name} details">${p.emoji}</div>
      <div class="card-body">
        <span class="card-category">${p.category}</span>
        <h3 class="card-name" data-open="${p.id}" role="button" tabindex="0" style="cursor:pointer">${p.name}</h3>
        <p class="card-desc">${p.desc}</p>
      </div>
      <div class="card-footer">
        <span class="card-price">${formatPrice(p.price)}</span>
        <button class="add-btn" data-id="${p.id}">Add to cart</button>
      </div>
    `;
    grid.appendChild(card);
  });

  grid.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', () => addToCart(Number(btn.dataset.id)));
  });

  grid.querySelectorAll('[data-open]').forEach(el => {
    el.addEventListener('click', () => openProductModal(Number(el.dataset.open)));
    el.addEventListener('keydown', e => { if (e.key === 'Enter') openProductModal(Number(el.dataset.open)); });
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

// ─── Product Modal ────────────────────────────────────────────
function openProductModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  activeProductId = id;
  selectedSize = 0;

  const brew = brewInfo[p.category] || brewInfo.calming;
  document.getElementById('modalThumb').style.cssText = `${cardBg(p.category)}`;
  document.getElementById('modalThumb').textContent = p.emoji;
  document.getElementById('modalCategory').textContent = p.category;
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalSteep').textContent = brew.steep;
  document.getElementById('modalTemp').textContent = brew.temp;
  document.getElementById('modalCaffeine').textContent = brew.caffeine;

  renderModalSizes(p);

  document.getElementById('productOverlay').classList.add('open');
  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function renderModalSizes(p) {
  const container = document.getElementById('sizeOptions');
  container.innerHTML = '';
  sizes.forEach((s, i) => {
    const btn = document.createElement('button');
    btn.className = 'size-btn' + (i === selectedSize ? ' selected' : '');
    btn.innerHTML = `<span class="size-name">${s.label}</span><span class="size-price">${formatPrice(p.price * s.multiplier)}</span>`;
    btn.addEventListener('click', () => {
      selectedSize = i;
      renderModalSizes(p);
    });
    container.appendChild(btn);
  });
  document.getElementById('modalPrice').textContent = formatPrice(p.price * sizes[selectedSize].multiplier);
}

function closeProductModal() {
  document.getElementById('productOverlay').classList.remove('open');
  document.getElementById('productModal').classList.remove('open');
  document.body.style.overflow = '';
}

// ─── Checkout ─────────────────────────────────────────────────
function openCheckout() {
  closeCart();
  showCheckoutStep('stepDelivery');
  document.getElementById('checkoutOverlay').classList.add('open');
  document.getElementById('checkoutModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  document.getElementById('checkoutOverlay').classList.remove('open');
  document.getElementById('checkoutModal').classList.remove('open');
  document.body.style.overflow = '';
}

function showCheckoutStep(id) {
  ['stepDelivery','stepPayment','stepConfirmation'].forEach(s => {
    document.getElementById(s).classList.toggle('hidden', s !== id);
  });
}

function validateField(input, message) {
  const err = input.parentElement.querySelector('.field-error');
  if (!input.value.trim()) {
    input.classList.add('invalid');
    err.textContent = message;
    return false;
  }
  input.classList.remove('invalid');
  err.textContent = '';
  return true;
}

function validateEmail(input) {
  const err = input.parentElement.querySelector('.field-error');
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
  if (!ok) {
    input.classList.add('invalid');
    err.textContent = 'Enter a valid email address';
    return false;
  }
  input.classList.remove('invalid');
  err.textContent = '';
  return true;
}

function renderCheckoutSummary() {
  const container = document.getElementById('checkoutSummary');
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal >= 40 ? 0 : 4.99;
  const total = subtotal + shipping;

  container.innerHTML = cart.map(i =>
    `<div class="summary-row"><span>${i.name} × ${i.qty}</span><span>${formatPrice(i.price * i.qty)}</span></div>`
  ).join('') +
  `<div class="summary-row"><span>Shipping</span><span>${shipping === 0 ? 'Free' : formatPrice(shipping)}</span></div>
   <div class="summary-row total"><span>Total</span><span>${formatPrice(total)}</span></div>`;

  return total;
}

function generateOrderNumber() {
  return 'FLG-' + Math.random().toString(36).slice(2,7).toUpperCase();
}

function initCheckout() {
  // Open checkout from cart
  document.getElementById('checkoutBtn').addEventListener('click', openCheckout);

  // Close checkout
  document.getElementById('closeCheckout').addEventListener('click', closeCheckout);
  document.getElementById('checkoutOverlay').addEventListener('click', closeCheckout);

  // Delivery form
  document.getElementById('deliveryForm').addEventListener('submit', e => {
    e.preventDefault();
    const ok = [
      validateField(document.getElementById('fname'), 'First name is required'),
      validateField(document.getElementById('lname'), 'Last name is required'),
      validateEmail(document.getElementById('email')),
      validateField(document.getElementById('address'), 'Address is required'),
      validateField(document.getElementById('city'), 'City is required'),
      validateField(document.getElementById('postcode'), 'Postcode is required'),
    ].every(Boolean);
    if (!ok) return;
    renderCheckoutSummary();
    showCheckoutStep('stepPayment');
  });

  // Back button
  document.getElementById('backToDelivery').addEventListener('click', () => showCheckoutStep('stepDelivery'));

  // Format card number with spaces
  document.getElementById('cardnum').addEventListener('input', e => {
    e.target.value = e.target.value.replace(/\D/g,'').replace(/(.{4})/g,'$1 ').trim();
  });

  // Format expiry MM/YY
  document.getElementById('expiry').addEventListener('input', e => {
    const v = e.target.value.replace(/\D/g,'');
    e.target.value = v.length >= 3 ? v.slice(0,2) + '/' + v.slice(2) : v;
  });

  // Payment form
  document.getElementById('paymentForm').addEventListener('submit', e => {
    e.preventDefault();
    const cardnum = document.getElementById('cardnum');
    const expiry  = document.getElementById('expiry');
    const cvv     = document.getElementById('cvv');
    const ok = [
      validateField(document.getElementById('cardname'), 'Name is required'),
      (() => {
        const digits = cardnum.value.replace(/\s/g,'');
        const err = cardnum.parentElement.querySelector('.field-error');
        if (digits.length < 16) { cardnum.classList.add('invalid'); err.textContent = 'Enter a valid 16-digit card number'; return false; }
        cardnum.classList.remove('invalid'); err.textContent = ''; return true;
      })(),
      (() => {
        const err = expiry.parentElement.querySelector('.field-error');
        if (!/^\d{2}\/\d{2}$/.test(expiry.value)) { expiry.classList.add('invalid'); err.textContent = 'Use MM/YY format'; return false; }
        expiry.classList.remove('invalid'); err.textContent = ''; return true;
      })(),
      (() => {
        const err = cvv.parentElement.querySelector('.field-error');
        if (!/^\d{3,4}$/.test(cvv.value)) { cvv.classList.add('invalid'); err.textContent = '3 or 4 digits'; return false; }
        cvv.classList.remove('invalid'); err.textContent = ''; return true;
      })(),
    ].every(Boolean);
    if (!ok) return;

    // Show confirmation
    const email = document.getElementById('email').value.trim();
    const fname = document.getElementById('fname').value.trim();
    const orderNum = generateOrderNumber();
    const total = renderCheckoutSummary();

    document.getElementById('confirmEmail').textContent = email;
    document.getElementById('confirmDetails').innerHTML = `
      <div class="summary-row"><span>Order number</span><span>${orderNum}</span></div>
      <div class="summary-row"><span>Name</span><span>${fname} ${document.getElementById('lname').value.trim()}</span></div>
      <div class="summary-row total"><span>Total charged</span><span>${formatPrice(total)}</span></div>
    `;

    cart = [];
    saveCart();
    updateCartCount();
    renderCartItems();
    showCheckoutStep('stepConfirmation');
  });

  // Done button
  document.getElementById('doneBtn').addEventListener('click', () => {
    closeCheckout();
    document.getElementById('deliveryForm').reset();
    document.getElementById('paymentForm').reset();
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

  // Product modal
  document.getElementById('closeProduct').addEventListener('click', closeProductModal);
  document.getElementById('productOverlay').addEventListener('click', closeProductModal);
  document.getElementById('modalAddBtn').addEventListener('click', () => {
    if (activeProductId === null) return;
    const p = products.find(x => x.id === activeProductId);
    const s = sizes[selectedSize];
    const price = parseFloat((p.price * s.multiplier).toFixed(2));
    const cartId = `${p.id}-${s.label}`;
    const existing = cart.find(i => i.id === cartId);
    if (existing) { existing.qty++; }
    else { cart.push({ id: cartId, name: `${p.name} (${s.label})`, emoji: p.emoji, price, qty: 1 }); }
    saveCart();
    updateCartCount();
    renderCartItems();
    closeProductModal();
    showToast(`${p.name} (${s.label}) added to cart`);
  });

  // Close modals on Escape
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    closeProductModal();
    closeCheckout();
    closeCart();
  });
});
