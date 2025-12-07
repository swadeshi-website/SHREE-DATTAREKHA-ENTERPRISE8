/* ===================================================
   FINAL script.js - Shree Dattarekha Enterprise
   (Full working version — updated with Shree Maya Agarbatti
    subgroup UI and +/- qty controls)
=================================================== */

/* =======================
   Helpers & Data
======================= */

/* -----------------------------
   PRODUCTS (unchanged items + new brand)
------------------------------*/
const BRANDS = {
  'GITS': [
    { id:'GITS-001', name: 'Basundi Mix 125 G', price: 99 },
    { id:'GITS-002', name: 'Dahi Vada Mix 200 G', price: 110 },
    { id:'GITS-003', name: 'Idli Mix 200 G', price: 80 },
    { id:'GITS-004', name: 'Khamman Dhokla Mix 180 G', price: 75 },
    { id:'GITS-005', name: 'Khatta Dhokla Mix 200 G', price: 75 },
    { id:'GITS-006', name: 'Kheer Mix Rice 100 G', price: 75 },
    { id:'GITS-007', name: 'Rabadi Mix 100 G', price: 99 },
    { id:'GITS-008', name: 'Rava Dosa Mix 200 G', price: 80 },
    { id:'GITS-009', name: 'Rava Idli Mix 200 G', price: 80 },
    { id:'GITS-010', name: 'Kheer Mix Vermicelli 100 G', price: 75 },
    { id:'GITS-011', name: 'Sonpapadi 250 G', price: 75 },
    { id:'GITS-012', name: 'Dosa Mix 200 G Stand Up', price: 80 },
    { id:'GITS-013', name: 'Gulab Jamun Stand Up 200 G', price: 125 },
    { id:'GITS-014', name: 'Gulab Jamun Mix 500 G Pouch', price: 245 },
    { id:'GITS-015', name: 'Gulab Jamun Mix 100 G Pouch', price: 85 },
    { id:'GITS-016', name: 'Gulab Jamun 225 G Can', price: 65 },
    { id:'GITS-017', name: 'Gulab Jamun 500 G Can', price: 125 },
    { id:'GITS-018', name: 'Rasgulla 500 G Can', price: 125 },
    { id:'GITS-019', name: 'Ghee 1 Ltr Jar', price: 755 },
    { id:'GITS-020', name: 'Ghee 100 ml Jar', price: 99 },
    { id:'GITS-021', name: 'Ghee 200 ml Jar', price: 175 },
    { id:'GITS-022', name: 'Ghee 500 ml Jar', price: 385 },
    { id:'GITS-023', name: 'Ghee 20 ml Pouch', price: 20 }
  ],
  'SAWAI': [
    { id:'SAWAI-001', name:'Bharali Wangi', price:30 },
    { id:'SAWAI-002', name:'Shev Bhaji', price:30 },
    { id:'SAWAI-003', name:'Pav Bhaji', price:30 },
    { id:'SAWAI-004', name:'Kolhapuri Misal', price:30 },
    { id:'SAWAI-005', name:'Nashik Misal', price:30 },
    { id:'SAWAI-006', name:'Puneri Misal', price:30 },
    { id:'SAWAI-007', name:'Veg Biryani', price:30 },
    { id:'SAWAI-008', name:'Fish Fry', price:30 },
    { id:'SAWAI-009', name:'Fish Rassa', price:30 },
    { id:'SAWAI-010', name:'Anda Rassa', price:30 },
    { id:'SAWAI-011', name:'Chicken Biryani', price:30 },
    { id:'SAWAI-012', name:'Chicken Rassa Kolhapuri', price:30 },
    { id:'SAWAI-013', name:'Chicken Rassa Malvani', price:30 },
    { id:'SAWAI-014', name:'Chicken Rassa Khandeshi', price:30 },
    { id:'SAWAI-015', name:'Chicken Sukkha', price:30 },
    { id:'SAWAI-016', name:'Mutton Biryani', price:30 },
    { id:'SAWAI-017', name:'Mutton Rassa Kolhapuri', price:30 },
    { id:'SAWAI-018', name:'Mutton Rassa Khandeshi', price:30 },
    { id:'SAWAI-019', name:'Mutton Sukkha', price:30 },
    { id:'SAWAI-020', name:'Dhangari Mutton Kalwan', price:30 },
    { id:'SAWAI-021', name:'Kolhapuri Thecha 30 Gm', price:30 },
    { id:'SAWAI-022', name:'Kolhapuri Thecha 17 Gm', price:17 },
    { id:'SAWAI-023', name:'Javas Chutney', price:50 },
    { id:'SAWAI-024', name:'Karala Chutney', price:50 },
    { id:'SAWAI-025', name:'Shengdana Chutney', price:50 },
    { id:'SAWAI-026', name:'Lasun Chutney', price:50 },
    { id:'SAWAI-027', name:'Kal Watan', price:25 },
    { id:'SAWAI-028', name:'Lal Watan', price:25 },
    { id:'SAWAI-029', name:'Kanda Lasun 15 Gm', price:10 },
    { id:'SAWAI-030', name:'Kanda Lasun 200 Gm', price:63 },
    { id:'SAWAI-031', name:'Kala Masala 20 Gm', price:10 },
    { id:'SAWAI-032', name:'Kala Masala 200 Gm', price:120 },
    { id:'SAWAI-033', name:'Chicken Rassa Saoji', price:30 },
    { id:'SAWAI-034', name:'Mutton Rassa Saoji', price:30 },
    { id:'SAWAI-035', name:'Chicken Rassa Varhadi', price:30 },
    { id:'SAWAI-036', name:'Mutton Rassa Varhadi', price:30 },
    { id:'SAWAI-037', name:'Kanda Lasun 500 Gm', price:120 },
    { id:'SAWAI-038', name:'Red Chilli 200 Gm', price:120 },
    { id:'SAWAI-039', name:'Haldi Powder 200 Gm', price:110 },
    { id:'SAWAI-040', name:'Dhana Powder 200 Gm', price:85 },
    { id:'SAWAI-041', name:'Goda Masala 200 Gm', price:86 },
    { id:'SAWAI-042', name:'Mango Pickle 200 Gm Jar', price:65 }
  ],
  'MOM': [
    { id:'MOM-125', name:'Raw Makhana 250g', price:250 },
    { id:'MOM-126', name:'Ragi Chips Desi Masala', price:55 },
    { id:'MOM-127', name:'Ragi Chips Peri Peri', price:55 },
    { id:'MOM-128', name:'Banana Chips 60g', price:60 },
    { id:'MOM-129', name:'Banana Chips Salted 60g', price:60 },
    { id:'MOM-130', name:'Banana Chips Masala 60g', price:60 },
    { id:'MOM-131', name:'Banana Chips Peri Peri 60g', price:60 },
    { id:'MOM-133', name:'Banana Chips Salted 20g', price:20 },
    { id:'MOM-134', name:'Banana Chips Masala 20g', price:20 },
    { id:'MOM-135', name:'Seed Mix 199g', price:199 },
    { id:'MOM-136', name:'Daily Nutri Mix 199g', price:199 },
    { id:'MOM-137', name:'Daily Sports Mix 199g', price:199 },
    { id:'MOM-138', name:'Panchmeva 199g', price:199 },
    { id:'MOM-139', name:'Panchmeva Jar 600g', price:600 },
    { id:'MOM-140', name:'Crunchy Par Mix 149g', price:149 },
    { id:'MOM-141', name:'Daily Health Mix 199g', price:199 },
    { id:'MOM-142', name:'Royal Party Mix 199g', price:199 },
    { id:'MOM-143', name:'Almonds 199g', price:199 },
    { id:'MOM-144', name:'Cashews 199g', price:199 },
    { id:'MOM-145', name:'Nut Mix 199g', price:199 },
    { id:'MOM-146', name:'Pistachios 199g', price:199 },
    { id:'MOM-147', name:'Cashew Salted 30g', price:30 },
    { id:'MOM-148', name:'Almonds 20g', price:20 },
    { id:'MOM-149', name:'Cashew 20g', price:20 },
    { id:'MOM-150', name:'Pistachip 20g', price:20 },
    { id:'MOM-151', name:'Nut Mix 20g', price:20 },
    { id:'MOM-152', name:'Pasta Cheese 85g', price:85 },
    { id:'MOM-153', name:'Pasta Peri Peri 85g', price:85 },
    { id:'MOM-154', name:'Pasta Creamy Tom 85g', price:85 },
    { id:'MOM-155', name:'Makhana Pudina 30g', price:30 },
    { id:'MOM-156', name:'Makhana Mast Masala 30g', price:30 },
    { id:'MOM-157', name:'Makhana Cream N Onion 30g', price:30 },
    { id:'MOM-158', name:'Makhana Cheddar Cheese 30g', price:30 },
    { id:'MOM-159', name:'Makhana Himalaya Salted 30g', price:30 },
    { id:'MOM-160', name:'Almonds 99g', price:99 },
    { id:'MOM-161', name:'Cashew 99g', price:99 },
    { id:'MOM-162', name:'Pista 99g', price:99 },
    { id:'MOM-163', name:'Nut Mix 99g', price:99 },
    { id:'MOM-164', name:'Makhana Cheddar Cheese 99g', price:99 },
    { id:'MOM-165', name:'Makhana Cream N Onion 99g', price:99 },
    { id:'MOM-166', name:'Makhana Himalayan Salted 99g', price:99 },
    { id:'MOM-167', name:'Makhana Black Salt 99g', price:99 },
    { id:'MOM-168', name:'Makhana Mast Masala 99g', price:99 },
    { id:'MOM-169', name:'Makhana Pudina 99g', price:99 },
    { id:'MOM-170', name:'Gimi Gimi Hot Cheese 99g', price:99 },
    { id:'MOM-171', name:'Gimi Gimi Veg Carbonara 99g', price:99 },
    { id:'MOM-172', name:'Gimi Gimi Fiery Hot 99g', price:99 },
    { id:'MOM-173', name:'Gimi Gimi K Curry 99g', price:99 },
    { id:'MOM-174', name:'Gimi Gimi KI Kimchi 99g', price:99 },
    { id:'MOM-175', name:'Gimi Gimi Soul Umami 99g', price:99 },
    { id:'MOM-176', name:'Nut Mix 199g (alt)', price:199 },
    { id:'MOM-177', name:'Cashew Masala 99g', price:99 }
  ],
  'BLG': [
    { id:'BLG-093', name:'Pop N Hop Golden Delight 33g' },
    { id:'BLG-094', name:'Pop N Hop Classic Salted 33g'},
    { id:'BLG-095', name:'Pop N Hop Butter Sizzle 33g' },
    { id:'BLG-096', name:'Soya Chunks 40g'},
    { id:'BLG-097', name:'Soya Mini Chunks 40g' },
    { id:'BLG-098', name:'Kasuri Methi 10g',  },
    { id:'BLG-099', name:'Kasuri Methi Box 25g' },
    { id:'BLG-100', name:'Dhana Powder 200g' },
    { id:'BLG-101', name:'Halad Powder 50g' },
    { id:'BLG-102', name:'Halad Powder 200g', },
    { id:'BLG-103', name:'Pasta Masala 6g', },
    { id:'BLG-104', name:'Magic Masala 6g', },
    { id:'BLG-105', name:'Jeera Powder 16g', },
    { id:'BLG-106', name:'Chicken Masala 16g', },
    { id:'BLG-107', name:'Mutton Masala 16g', },
    { id:'BLG-108', name:'Biryani Chicken/Mutton 16g', },
    { id:'BLG-109', name:'Chilli Powder 200g', },
    { id:'BLG-110', name:'Pani Puri Kit 230g (4-in-1)', }, 
    { id:'BLG-112', name:'Pink Salt 1 Kg',  },
    { id:'BLG-113', name:'Kashmiri Chilli 12g', },
    { id:'BLG-114', name:'Hing Tufani Tadka 10/-', },
    { id:'BLG-115', name:'Hing Yellow Powder 50g', },
    { id:'BLG-116', name:'BLG Dhana Powder 50g', }
  ],
  'TOP_RAMEN': [
  { id: 'TR-CUP_MAZE_MASALA', name: 'Cup Maze Masala 55/-', price: 55 },
  { id: 'TR-CUP_ITALIANO',  name: 'Cup Italiano 55/-', price: 55 },
  { id: 'TR-CUP_VEGGI_MANCHOW', name: 'Cup Veggi Manchow 55/-',price: 55 },
  { id: 'TR-CUP_PANEER_MASALA',name: 'Cup Paneer Masala 55/-',  price: 55 },

  { id: 'TR-POKEMON',  name: 'Pokemon 40/-',price: 40 },

  { id: 'TR-KOREAN_VEG',name: 'Korean Veg 55/-', price: 55 },
  { id: 'TR-KOREAN_CHEESE',name: 'Korean Cheese 55/-',price: 55 },
  { id: 'TR-KOREAN_KIMCHI', name: 'Korean Kimchi 55/-',  price: 55 },

  { id: 'TR-MASALA_TOP',   name: 'Masala Top 10/-', price: 10 },
  { id: 'TR-FIERY_TOP',  name: 'Fiery Top 10/-',  price: 10 }
],

  
  /* =========================
     NEW BRAND: SHREE MAYA AGARBATTI
     Auto-generated products: each subsection price is used for all fragrances
  ============================*/
  'SHREE_MAYA_AGARBATTI': (() => {
    const fragrances = [
      'Kasturi','Luxury','Nature Paradise','Silicon','Rose','Kewda','Mogra',
      'Shree Maya','Keshar Chandan','Desire','Oodh Loban','Fantasia',
      'Yoga 3 in 1','Tu Hi','Navkar','Rajnigandha','Chandan Woods',
      'Gugal Kapoor','Melody','Pianapple','Man Mohan'
    ];

    const sections = [
      { name: 'Agarbatti 10/-', price: 10 },
      { name: 'Agarbatti 5/-', price: 5 },
      { name: 'Agarbatti 30/-', price: 30 },
      { name: 'Zipper 75/-', price: 75 },
      { name: 'Dhup Dry 35/-', price: 35 },
      { name: 'Dhup Wet 30/-', price: 30 },
      { name: 'Agarbatti Bag 150/-', price: 150 },
      { name: 'Zipper Jumbo 150/-', price: 150 }
    ];

    const products = [];
    sections.forEach(sec => {
      fragrances.forEach(f => {
        const id = `SMA-${sec.price}-${f.replace(/\s+/g,'_').toUpperCase()}`;
        const name = `${f} (${sec.name})`;
        products.push({ id, name, price: sec.price, brand: 'SHREE_MAYA_AGARBATTI' });
      });
    });
    return products;
  })()
};

/* -----------------------------
   App state
-----------------------------*/
let cart = [];        // array of { id, name, qty, price, brand }
let shopData = {};    // saved shop form details + location

/* -----------------------------
   Small utility functions
-----------------------------*/
function safeParseNumber(v, fallback = 0) {
  if (v === null || v === undefined) return fallback;
  const cleaned = String(v).replace(/[, ]+/g, '').trim();
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : fallback;
}

function showToast(text, timeout = 1400) {
  let t = document.querySelector('.toast');
  if (!t) {
    t = document.createElement('div');
    t.className = 'toast';
    t.style.position = 'fixed';
    t.style.left = '50%';
    t.style.transform = 'translateX(-50%) translateY(6px)';
    t.style.bottom = '20px';
    t.style.padding = '8px 12px';
    t.style.borderRadius = '8px';
    t.style.background = 'rgba(0,0,0,0.8)';
    t.style.color = '#fff';
    t.style.zIndex = 9999;
    t.style.transition = 'all 0.25s ease';
    document.body.appendChild(t);
  }
  t.textContent = text;
  t.style.opacity = '1';
  t.style.transform = 'translateX(-50%) translateY(0)';
  clearTimeout(t._timeout);
  t._timeout = setTimeout(() => {
    t.style.opacity = '0';
    t.style.transform = 'translateX(-50%) translateY(6px)';
  }, timeout);
}

/* =======================
   Persist / load cart & shopData
======================= */
function saveCart() {
  try {
    // normalize numeric fields
    cart = cart.map((c, i) => ({
      ...c,
      sr: i + 1,
      qty: safeParseNumber(c.qty, 0),
      price: safeParseNumber(c.price, 0)
    }));
  } catch (e) { console.error('saveCart normalize error', e); }
  try { localStorage.setItem('cart', JSON.stringify(cart)); } catch (e) {}
  updateCartBadge();
}

function loadCartFromStorage() {
  try { cart = JSON.parse(localStorage.getItem('cart') || '[]') || []; } catch (e) { cart = []; }
}

function saveShopInfo() {
  // keep previously saved location if present
  const existing = (() => {
    try { return JSON.parse(localStorage.getItem('shopData') || '{}') || {}; } catch(e){ return {}; }
  })();

  const data = {
    date: document.getElementById('orderDate')?.value || '',
    shopName: document.getElementById('shopName')?.value || '',
    contact: document.getElementById('contactNumber')?.value || '',
    address: document.getElementById('address')?.value || '',
    location: existing.location || shopData.location || null
  };
  shopData = data;
  try { localStorage.setItem('shopData', JSON.stringify(data)); } catch(e) {}
}

function loadShopInfoToForm() {
  const data = (() => {
    try { return JSON.parse(localStorage.getItem('shopData') || '{}') || {}; } catch(e){ return {}; }
  })();
  shopData = data || {};
  if (document.getElementById('orderDate')) document.getElementById('orderDate').value = data.date || '';
  if (document.getElementById('shopName')) document.getElementById('shopName').value = data.shopName || '';
  if (document.getElementById('contactNumber')) document.getElementById('contactNumber').value = data.contact || '';
  if (document.getElementById('address')) document.getElementById('address').value = data.address || '';
  // location display element
  if (document.getElementById('locationDisplay')) {
    if (data.location && data.location.lat && data.location.lng) {
      document.getElementById('locationDisplay').textContent = `📍 ${data.location.lat.toFixed(6)}, ${data.location.lng.toFixed(6)}`;
    } else {
      document.getElementById('locationDisplay').textContent = 'No location saved';
    }
  }
}

/* update cart badge on proceed button and show/hide clear buttons */
function updateCartBadge() {
  const proceedBtn = document.getElementById('proceedOrder');
  const count = cart.reduce((s, i) => s + (Number(i.qty) || 0), 0);
  if (proceedBtn) {
    let badge = proceedBtn.querySelector('.cart-badge');
    if (!badge) {
      badge = document.createElement('span');
      badge.className = 'cart-badge';
      badge.style.marginLeft = '8px';
      badge.style.background = '#ffffff20';
      badge.style.padding = '2px 8px';
      badge.style.borderRadius = '999px';
      badge.style.fontWeight = '700';
      proceedBtn.appendChild(badge);
    }
    badge.textContent = count;
    proceedBtn.disabled = (count === 0) || !isShopFormFilled();
  }

  const clearProductsBtn = document.getElementById('clearCartProducts');
  if (clearProductsBtn) clearProductsBtn.style.display = cart.length ? 'inline-block' : 'none';

  const clearOrderBtn = document.getElementById('clearCart');
  if (clearOrderBtn) clearOrderBtn.style.display = cart.length ? 'inline-block' : 'none';
}

function isShopFormFilled() {
  const form = document.getElementById('shopForm');
  if (!form) return true;
  const els = [...form.querySelectorAll('input, textarea')];
  if (!els.length) return true;
  return els.every(e => e.value && String(e.value).trim() !== '');
}

/* =======================
   Theme toggle (keeps your previous behaviour)
======================= */
(function initThemeToggle(){
  const themeBtn = document.getElementById('themeToggle');
  if (!themeBtn) return;
  try {
    if (localStorage.getItem('theme') === 'light') {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
      themeBtn.textContent = '☀️';
    } else {
      const isDark = document.body.classList.contains('dark');
      themeBtn.textContent = isDark ? '🌙' : '☀️';
    }
  } catch (e) {}
  themeBtn.onclick = () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
    const isDark = document.body.classList.contains('dark');
    themeBtn.textContent = isDark ? '🌙' : '☀️';
    try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch (e) {}
  };
})();

/* =======================
   Brand images mapping & responsive size
======================= */
const BRAND_IMAGES = {
  'GITS': 'images/gits.png',
  'SAWAI': 'images/sawai.png',
  'MOM': 'images/mom.png',
  'BLG': 'images/blg.png',
  'SHREE_MAYA_AGARBATTI': 'images/shree_maya.png' // optional image; blank if missing
};

function brandImageSizeStyle() {
  return 'width:44px;height:44px;object-fit:contain;border-radius:6px;vertical-align:middle;margin-right:6px;';
}

/* show blank if brand image cannot be loaded */
function createBrandImg(brand) {
  const imgSrc = BRAND_IMAGES[brand];
  const img = document.createElement('img');
  if (!imgSrc) {
    // if no image URL, create an empty placeholder
    img.style.width = '44px';
    img.style.height = '44px';
    return img;
  }
  img.src = imgSrc;
  img.alt = brand;
  img.setAttribute('style', brandImageSizeStyle());

  // if image fails to load, hide it (blank space)
  img.onerror = () => {
    img.style.visibility = 'hidden'; // keeps space but blank
  };

  return img;
}

/* =======================
   Utility: find product by id across all brands
======================= */
function findProductById(id) {
  for (const b of Object.keys(BRANDS)) {
    const list = BRANDS[b];
    for (const p of list) {
      if (p.id === id) return p;
    }
  }
  return null;
}

/* =======================
   Helper: create qty control element ([-] [input] [+]) that integrates with cart
   Uses input id "q-<product.id>" (this matches earlier code and keeps compatibility)
======================= */
function createQtyControlForProduct(p) {
  const wrapper = document.createElement('div');
  wrapper.className = 'qty-control';

  const minus = document.createElement('button');
  minus.type = 'button';
  minus.textContent = '−';
  minus.title = 'Decrease';

  const input = document.createElement('input');
  input.type = 'number';
  input.min = '0';
  input.id = `q-${p.id}`; // keep same id style
  input.value = '';
  input.style.width = '64px';

  const plus = document.createElement('button');
  plus.type = 'button';
  plus.textContent = '+';
  plus.title = 'Increase';

  // If cart already has this product, set saved qty
  const existing = cart.find(it => it.id === p.id);
  if (existing) input.value = safeParseNumber(existing.qty, 0);

  // input event: same logic as earlier code (sync to cart)
  input.addEventListener('input', (e) => {
    const qv = safeParseNumber(e.target.value, 0);
    if (!qv) {
      cart = cart.filter(it => it.id !== p.id);
    } else {
      const found = cart.find(it => it.id === p.id);
      if (found) {
        found.qty = qv;
      } else {
        cart.push({ id: p.id, name: p.name, qty: qv, price: p.price, brand: p.brand || (p.id?.split('-')?.[0] || '') });
      }
    }
    saveCart();
    updateCartBadge();
  });

  // plus/minus behaviour: modify input.value and trigger input event
  minus.addEventListener('click', () => {
    const cur = safeParseNumber(input.value, 0);
    const next = Math.max(0, cur - 1);
    input.value = next || '';
    input.dispatchEvent(new Event('input', { bubbles: true }));
  });

  plus.addEventListener('click', () => {
    const cur = safeParseNumber(input.value, 0);
    const next = cur + 1;
    input.value = next;
    input.dispatchEvent(new Event('input', { bubbles: true }));
  });

  wrapper.appendChild(minus);
  wrapper.appendChild(input);
  wrapper.appendChild(plus);
  return wrapper;
}

/* =======================
   Build UI if missing: search & sort
======================= */
function ensureSearchAndSortUI() {
  const brandSection = document.querySelector('.brand-select') || document.body;
  // search input
  if (!document.getElementById('productSearch')) {
    const searchWrapper = document.createElement('div');
    searchWrapper.style.margin = '8px 0';
    searchWrapper.innerHTML = `<input id="productSearch" placeholder="Search products..." style="width:100%;padding:8px;border-radius:8px;border:1px solid #ccc">`;
    brandSection.parentNode.insertBefore(searchWrapper, brandSection.nextSibling);
  }
  // sort select
  if (!document.getElementById('productSort')) {
    const sortWrapper = document.createElement('div');
    sortWrapper.style.margin = '8px 0';
    sortWrapper.innerHTML = `
      <select id="productSort" style="padding:8px;border-radius:8px;border:1px solid #ccc;">
        <option value="">Sort — default</option>
        <option value="az">Name: A → Z</option>
        <option value="za">Name: Z → A</option>
        <option value="plh">Price: Low → High</option>
        <option value="phl">Price: High → Low</option>
      </select>
    `;
    if (document.getElementById('productSearch')) {
      document.getElementById('productSearch').parentNode.insertBefore(sortWrapper, document.getElementById('productSearch').nextSibling);
    } else {
      brandSection.parentNode.insertBefore(sortWrapper, brandSection.nextSibling);
    }
  }
}

/* Helper: sort products according to select */
function applySort(products) {
  const sortSelect = document.getElementById('productSort');
  if (!sortSelect) return products;
  const val = sortSelect.value;
  const arr = [...products];
  if (val === 'az') arr.sort((a,b) => a.name.localeCompare(b.name));
  else if (val === 'za') arr.sort((a,b) => b.name.localeCompare(a.name));
  else if (val === 'plh') arr.sort((a,b) => safeParseNumber(a.price) - safeParseNumber(b.price));
  else if (val === 'phl') arr.sort((a,b) => safeParseNumber(b.price) - safeParseNumber(a.price));
  return arr;
}

/* =======================
   PRODUCTS PAGE: render list + interactions
======================= */
function initProductsPage() {
  const productListEl = document.getElementById('productList');
  if (!productListEl) return;

  // load saved state
  loadShopInfoToForm();
  loadCartFromStorage();

  // ensure search & sort exist
  ensureSearchAndSortUI();

  // ensure brand buttons exist; if not, create with images
  let brandButtonsContainer = document.querySelector('.brand-buttons');
  if (!brandButtonsContainer) {
    brandButtonsContainer = document.createElement('div');
    brandButtonsContainer.className = 'brand-buttons';
    brandButtonsContainer.style.display = 'flex';
    brandButtonsContainer.style.gap = '8px';
    brandButtonsContainer.style.marginBottom = '10px';
    brandButtonsContainer.style.flexWrap = 'wrap';
    productListEl.parentNode.insertBefore(brandButtonsContainer, productListEl);
    for (const brand of Object.keys(BRANDS)) {
      const btn = document.createElement('button');
      btn.className = 'brand-btn';
      btn.dataset.brand = brand;
      btn.style.display = 'flex';
      btn.style.alignItems = 'center';
      btn.style.gap = '8px';
      btn.style.padding = '6px 10px';
      btn.style.borderRadius = '8px';
      btn.style.border = '1px solid rgba(0,0,0,0.08)';
      btn.style.background = 'transparent';
      btn.style.cursor = 'pointer';
      const img = createBrandImg(brand);
      btn.appendChild(img);
      const span = document.createElement('span');
      span.textContent = brand === 'SHREE_MAYA_AGARBATTI' ? 'Shree Maya Agarbatti' : brand;
      span.style.fontWeight = '700';
      btn.appendChild(span);
      btn.addEventListener('click', () => loadBrand(brand));
      brandButtonsContainer.appendChild(btn);
    }
  } else {
    // wire existing brand buttons
    document.querySelectorAll('.brand-btn').forEach(btn => {
      if (!btn.dataset.brand) return;
      btn.addEventListener('click', () => loadBrand(btn.dataset.brand));
    });
  }

  // wire search & sort
  const searchInput = document.getElementById('productSearch');
  if (searchInput) {
    searchInput.value = searchInput.value || '';
    searchInput.addEventListener('input', () => {
      const activeBtn = document.querySelector('.brand-btn.active');
      const brand = activeBtn?.dataset.brand;
      const q = searchInput.value.trim().toLowerCase();
      if (brand) loadBrand(brand, q);
      else loadAllBrands(q);
    });
  }
  const sortSelect = document.getElementById('productSort');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      const activeBtn = document.querySelector('.brand-btn.active');
      const brand = activeBtn?.dataset.brand;
      const q = document.getElementById('productSearch')?.value?.trim().toLowerCase() || '';
      if (brand) loadBrand(brand, q);
      else loadAllBrands(q);
    });
  }

  // shop form input listeners to toggle proceed
  document.querySelectorAll('#shopForm input, #shopForm textarea').forEach(inp=>{
    inp.addEventListener('input', () => {
      updateCartBadge();
      saveShopInfo();
    });
  });

  // Fetch location button (Option B)
  const fetchBtn = document.getElementById('fetchLocationBtn');
  if (fetchBtn) {
    fetchBtn.addEventListener('click', () => {
      if (!navigator.geolocation) {
        showToast('Geolocation not supported in your browser');
        return;
      }
      showToast('Requesting location...');
      navigator.geolocation.getCurrentPosition(pos => {
        const { latitude, longitude } = pos.coords;
        const loc = { lat: latitude, lng: longitude };
        // save into shopData + localStorage
        try {
          const existing = JSON.parse(localStorage.getItem('shopData') || '{}') || {};
          existing.location = loc;
          localStorage.setItem('shopData', JSON.stringify(existing));
          shopData.location = loc;
        } catch (e) {
          shopData.location = loc;
        }
        // update UI
        if (document.getElementById('locationDisplay')) {
          document.getElementById('locationDisplay').textContent = `📍 ${loc.lat.toFixed(6)}, ${loc.lng.toFixed(6)}`;
        }
        showToast('Location saved');
        updateCartBadge();
      }, err => {
        console.error('geolocation error', err);
        showToast('Failed to get location');
      }, { enableHighAccuracy: false, timeout: 10000 });
    });
  }

  // proceed button behaviour
  const proceedBtn = document.getElementById('proceedOrder');
  if (proceedBtn) {
    proceedBtn.addEventListener('click', () => {
      saveShopInfo();
      saveCart();
      // open order summary page (new page)
      location.href = 'order.html';
    });
  }

  // clear cart button on products page (optional)
  const clearProductsBtn = document.getElementById('clearCartProducts');
  if (clearProductsBtn) {
    clearProductsBtn.style.display = cart.length ? 'inline-block' : 'none';
    clearProductsBtn.addEventListener('click', () => {
      if (confirm('Do you want to clear all items from cart?')) {
        cart = [];
        saveCart();
        const activeBtn = document.querySelector('.brand-btn.active');
        if (activeBtn) loadBrand(activeBtn.dataset.brand);
        else loadAllBrands();
        showToast('Cart cleared');
      }
    });
  }

  // set the first brand active if none
  const firstBrand = Object.keys(BRANDS)[0];
  if (!document.querySelector('.brand-btn.active')) {
    const firstBtn = document.querySelector(`.brand-btn[data-brand="${firstBrand}"]`);
    if (firstBtn) firstBtn.classList.add('active');
  }

  // initial load
  const initialSearch = (document.getElementById('productSearch')?.value || '').trim().toLowerCase();
  const activeBrand = document.querySelector('.brand-btn.active')?.dataset.brand || firstBrand;
  if (initialSearch) loadBrand(activeBrand, initialSearch);
  else loadBrand(activeBrand);
}

/* =======================
   Helper: render subgroup bar for Shree Maya
   Extracts unique subgroup names (text inside parentheses)
======================= */
function renderShreeMayaSubgroups(container, products, activeSubgroup, onSelect) {
  // container: where to render subgroups
  container.innerHTML = '';

  // get unique subgroup names and price (we can parse from product.name)
  const map = new Map(); // subgroupName => price
  products.forEach(p => {
    const m = p.name.match(/\(([^)]+)\)/); // gets text inside parentheses
    if (m && m[1]) {
      const subgroup = m[1].trim();
      if (!map.has(subgroup)) map.set(subgroup, safeParseNumber(p.price, 0));
    }
  });

  const wrapper = document.createElement('div');
  wrapper.className = 'sma-subgroups';

  for (const [name, price] of map.entries()) {
    const btn = document.createElement('button');
    btn.className = 'sma-subgroup-btn';
    btn.textContent = `${name}`;
    if (activeSubgroup === name) btn.classList.add('active');
    btn.addEventListener('click', () => onSelect(name));
    wrapper.appendChild(btn);
  }

  container.appendChild(wrapper);
}

/* =======================
   PRODUCTS: render for a single brand (with optional search)
   — major injection point for Shree Maya subgroup UI + qty control
======================= */
function loadBrand(brand, search='') {
  const productList = document.getElementById('productList');
  if (!productList) return;
  productList.innerHTML = '';

  // toggle active class visually
  document.querySelectorAll('.brand-btn').forEach(b => b.classList.toggle('active', b.dataset.brand === brand));

  const products = BRANDS[brand] || [];
  if (!products.length) {
    productList.innerHTML = `<p style="text-align:center;color:rgba(255,255,255,0.7);">No products for ${brand}</p>`;
    return;
  }

  // header with brand image + title
  const header = document.createElement('div');
  header.style.display = 'flex';
  header.style.alignItems = 'center';
  header.style.gap = '10px';
  header.style.marginBottom = '8px';
  const img = createBrandImg(brand);
  header.appendChild(img);
  const title = document.createElement('strong');
  title.style.fontWeight = '900';
  title.style.color = 'var(--gold)';
  title.textContent = brand === 'SHREE_MAYA_AGARBATTI' ? 'Shree Maya Agarbatti' : brand;
  header.appendChild(title);
  productList.appendChild(header);

  // If Shree Maya, render subgroup buttons and allow subgroup selection
  let activeSubgroup = null;
  if (brand === 'SHREE_MAYA_AGARBATTI') {
    // container for subgroup buttons
    const subgroupContainer = document.createElement('div');
    subgroupContainer.id = 'smaSubgroupContainer';
    productList.appendChild(subgroupContainer);

    // default activeSubgroup: try to read from localStorage or null
    const saved = localStorage.getItem('sma_active_subgroup');
    if (saved) activeSubgroup = saved;

    // render subgroups (renderShreeMayaSubgroups will call loadBrand to re-render on click)
    renderShreeMayaSubgroups(subgroupContainer, products, activeSubgroup, (selectedName) => {
      // save selection and re-render brand with same search but filtered by subgroup
      localStorage.setItem('sma_active_subgroup', selectedName);
      // re-call loadBrand with same brand & search (will pick up active subgroup from storage)
      loadBrand(brand, search);
    });
  }

  // optionally apply search and sort
  const q = (search || '').trim().toLowerCase();
  let list = products.filter(p => !q || p.name.toLowerCase().includes(q));
  list = applySort(list);

  // If Shree Maya and subgroup selected, filter list further
  if (brand === 'SHREE_MAYA_AGARBATTI') {
    const sel = localStorage.getItem('sma_active_subgroup');
    if (sel) {
      list = list.filter(p => p.name.includes(`(${sel})`));
      // If no items match (edge case), clear selection
      if (!list.length) {
        localStorage.removeItem('sma_active_subgroup');
      }
    }
  }

  // render each product card (with qty control)
  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.padding = '10px';
    card.style.borderRadius = '8px';
    card.style.background = 'transparent';
    card.style.display = 'flex';
    card.style.justifyContent = 'space-between';
    card.style.alignItems = 'center';
    card.style.gap = '10px';
    card.style.marginBottom = '8px';

    const left = document.createElement('div');
    left.style.flex = '1';
    left.innerHTML = `<h3 style="margin:0 0 .35rem 0;font-size:1rem">${p.name}</h3><div style="font-weight:700">₹${p.price}</div>`;
    card.appendChild(left);

    const right = document.createElement('div');
    right.style.display = 'flex';
    right.style.gap = '8px';
    right.style.alignItems = 'center';

    // create qty control that ties into cart logic
    const qtyControl = createQtyControlForProduct(p);

    // remove button: remove entire product from cart
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.dataset.id = p.id;
    removeBtn.style.background = '#ff4444';
    removeBtn.style.color = 'white';
    removeBtn.style.marginLeft = '6px';
    removeBtn.style.padding = '6px';
    removeBtn.style.borderRadius = '8px';
    removeBtn.style.border = 'none';
    removeBtn.style.cursor = 'pointer';
    removeBtn.textContent = '🗑 Delete';

    removeBtn.addEventListener('click', () => {
      const existed = cart.find(it => it.id === p.id);
      if (!existed) {
        showToast(`${p.name} is not in cart`);
        return;
      }
      if (!confirm(`Remove all ${p.name} from cart?`)) return;
      cart = cart.filter(it => it.id !== p.id);
      saveCart();
      updateCartBadge();
      showToast(`${p.name} removed from cart`);
      // clear input
      const el = document.getElementById(`q-${p.id}`);
      if (el) el.value = '';
    });

    right.appendChild(qtyControl);
    right.appendChild(removeBtn);
    card.appendChild(right);

    productList.appendChild(card);
  });

  // ensure buttons visible
  productList.querySelectorAll('.remove-btn').forEach(b => b.style.display = 'inline-block');

  // update proceed button state
  updateCartBadge();
}

/* =======================
   load across all brands
   (keeps previous behavior; uses createQtyControlForProduct for qty)
======================= */
function loadAllBrands(search='') {
  const productList = document.getElementById('productList');
  if (!productList) return;
  productList.innerHTML = '';

  const q = (search || '').trim().toLowerCase();
  const brands = Object.keys(BRANDS);

  brands.forEach(brand => {
    const products = BRANDS[brand];
    const filtered = products.filter(p => !q || p.name.toLowerCase().includes(q));
    if (!filtered.length) return;

    // header
    const header = document.createElement('div');
    header.style.gridColumn = '1/-1';
    header.style.padding = '0.4rem 0.6rem';
    header.style.marginBottom = '6px';
    const img = createBrandImg(brand);
    header.appendChild(img);
    const strong = document.createElement('strong');
    strong.style.color = 'var(--gold)';
    strong.style.fontWeight = '900';
    strong.style.marginLeft = '8px';
    strong.textContent = brand === 'SHREE_MAYA_AGARBATTI' ? 'Shree Maya Agarbatti' : brand;
    header.appendChild(strong);
    productList.appendChild(header);

    // render products of this brand
    const list = applySort(filtered);
    list.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.style.padding = '10px';
      card.style.borderRadius = '8px';
      card.style.background = 'transparent';
      card.style.display = 'flex';
      card.style.justifyContent = 'space-between';
      card.style.alignItems = 'center';
      card.style.gap = '10px';
      card.style.marginBottom = '8px';

      const left = document.createElement('div');
      left.style.flex = '1';
      left.innerHTML = `<h3 style="margin:0 0 .35rem 0;font-size:1rem">${p.name}</h3><div style="font-weight:700">₹${p.price}</div>`;
      card.appendChild(left);

      const right = document.createElement('div');
      right.style.display = 'flex';
      right.style.gap = '8px';
      right.style.alignItems = 'center';

      const qtyControl = createQtyControlForProduct(p);

      const removeBtn = document.createElement('button');
      removeBtn.className = 'remove-btn';
      removeBtn.style.background = '#ff4444';
      removeBtn.style.color = 'white';
      removeBtn.style.marginLeft = '6px';
      removeBtn.style.padding = '6px';
      removeBtn.style.borderRadius = '8px';
      removeBtn.style.border = 'none';
      removeBtn.style.cursor = 'pointer';
      removeBtn.textContent = '🗑 Delete';
      removeBtn.addEventListener('click', () => {
        if (!confirm(`Remove all ${p.name} from cart?`)) return;
        cart = cart.filter(it => it.id !== p.id);
        saveCart();
        updateCartBadge();
        showToast(`${p.name} removed from cart`);
        const el = document.getElementById(`q-${p.id}`);
        if (el) el.value = '';
      });

      right.appendChild(qtyControl);
      right.appendChild(removeBtn);
      card.appendChild(right);

      productList.appendChild(card);
    });
  });

  // ensure controls visible
  productList.querySelectorAll('.remove-btn').forEach(b => b.style.display = 'inline-block');

  updateCartBadge();
}

/* =======================
   ORDER PAGE (order.html) rendering + actions
   (left unchanged from your original — only referenced for completeness)
======================= */
function initOrderPage() {
  try { shopData = JSON.parse(localStorage.getItem('shopData') || '{}') || {}; } catch(e){ shopData = {}; }
  loadCartFromStorage();

  if (document.getElementById('infoDate')) document.getElementById('infoDate').textContent = shopData.date || '';
  if (document.getElementById('infoShop')) document.getElementById('infoShop').textContent = shopData.shopName || '';
  if (document.getElementById('infoContact')) document.getElementById('infoContact').textContent = shopData.contact || '';
  if (document.getElementById('infoAddress')) document.getElementById('infoAddress').textContent = shopData.address || '';

  if (document.getElementById('infoLocation')) {
    if (shopData.location && shopData.location.lat && shopData.location.lng) {
      const lat = shopData.location.lat;
      const lng = shopData.location.lng;
      const link = document.createElement('a');
      link.href = `https://maps.google.com/?q=${lat},${lng}`;
      link.target = '_blank';
      link.textContent = `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
      link.style.color = 'var(--gold)';
      document.getElementById('infoLocation').innerHTML = '';
      document.getElementById('infoLocation').appendChild(link);
    } else {
      document.getElementById('infoLocation').textContent = '–';
    }
  }

  const orderNo = (Number(localStorage.getItem('lastOrderNo') || 0) + 1);
  if (document.getElementById('orderNo')) document.getElementById('orderNo').textContent = orderNo;
  try { localStorage.setItem('lastOrderNo', orderNo); } catch(e){}

  renderOrderTable();

  const clearBtn = document.getElementById('clearCart');
  if (clearBtn) {
    clearBtn.style.display = cart.length ? 'inline-block' : 'none';
    clearBtn.addEventListener('click', () => {
      if (!confirm('Do you want to clear all items?')) return;
      cart = [];
      saveCart();
      renderOrderTable();
    });
  }

  const orderNowBtn = document.getElementById('orderNow');
  if (orderNowBtn) orderNowBtn.addEventListener('click', () => generateExcelAndWhatsApp());

  updateCartBadge();
}

function renderOrderTable() {
  const tbody = document.querySelector('#orderTable tbody');
  if (!tbody) return;
  tbody.innerHTML = '';
  let total = 0;

  cart.forEach((c, i) => {
    const safeQty = safeParseNumber(c.qty, 0);
    const safePrice = safeParseNumber(c.price, 0);
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="padding:8px;border-bottom:1px solid #eee">${i+1}</td>
      <td style="padding:8px;border-bottom:1px solid #eee">${c.name}</td>
      <td style="padding:8px;border-bottom:1px solid #eee">${safeQty}</td>
      <td style="padding:8px;border-bottom:1px solid #eee">${c.brand || ''}</td>
      <td style="padding:8px;border-bottom:1px solid #eee">₹${safePrice}</td>
      <td style="padding:8px;border-bottom:1px solid #eee"><button class="del-item" data-id="${c.id}" style="background:#ff4444;color:white;padding:6px 8px;border-radius:6px;border:none;cursor:pointer;">🗑 Delete</button></td>
    `;
    tbody.appendChild(tr);
    total += safeQty * safePrice;
  });

  const totalEl = document.getElementById('orderTotal');
  if (totalEl) totalEl.textContent = `₹${total}`;

  document.querySelectorAll('.del-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      if (!confirm('Remove this item?')) return;
      cart = cart.filter(c => c.id !== id);
      saveCart();
      renderOrderTable();
      showToast('Item removed');
    });
  });

  updateCartBadge();
}

/* =======================
   Excel + WhatsApp export
======================= */
function generateExcelAndWhatsApp(){
  try { shopData = JSON.parse(localStorage.getItem('shopData') || '{}') || {}; } catch(e){ shopData = {}; }

  const headerRows = [
    ['Shop Name:', shopData.shopName || ''],
    ['Address:', shopData.address || ''],
    ['Date:', shopData.date || ''],
  ];
  if (shopData.location && shopData.location.lat && shopData.location.lng) {
    headerRows.push(['Location:', `${shopData.location.lat}, ${shopData.location.lng}`]);
  }
  headerRows.push([]);

  const tableHeader = ["Sr.No","Item","Quantity","Brand","Price"];
  const wsData = [...headerRows, tableHeader];

  cart.forEach((c, idx) => {
    wsData.push([idx+1, c.name, safeParseNumber(c.qty,0), c.brand || '', safeParseNumber(c.price,0)]);
  });

  (function ensureSheetJS(cb){
    if (window.XLSX) return cb && cb();
    const s = document.createElement('script');
    s.src = "https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js";
    s.onload = () => cb && cb();
    s.onerror = () => {
      console.error('Failed to load XLSX library');
      showToast('Excel library load failed');
    };
    document.head.appendChild(s);
  })(() => {
    try {
      if (!window.XLSX) {
        showToast('Excel library not available. Generating WhatsApp message only.');
      } else {
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet(wsData);
        XLSX.utils.book_append_sheet(wb, ws, "Order");
        const safeShop = (shopData.shopName || 'Shop').replace(/[^\w\- ]/g,'').replace(/\s+/g,'_') || 'Shop';
        const fileName = `Order_${safeShop}_${(shopData.date || new Date().toISOString().slice(0,10))}.xlsx`;
        XLSX.writeFile(wb, fileName);
      }
    } catch (e) {
      console.error('XLSX write error', e);
      showToast('Failed to generate Excel file');
    }

    const lines = [
      `Shop: ${shopData.shopName || ''}`,
      `Contact: ${shopData.contact || ''}`,
      `Address: ${shopData.address || ''}`,
      `Date: ${shopData.date || ''}`,
    ];
    if (shopData.location && shopData.location.lat && shopData.location.lng) {
      lines.push(`Location: ${shopData.location.lat}, ${shopData.location.lng}`);
    }
    lines.push('');
    lines.push('Items:');
    cart.forEach((c,i) => lines.push(`${i+1}. ${c.name} x ${c.qty} (₹${c.price})`));
    const msg = lines.join('\n');
    const phone = '919503984711'; // change to your number if needed
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  });
}

/* =======================
   Auto-init based on page
======================= */
(function boot(){
  // Clear some items on index/home page if necessary
  try {
    if (window.location.pathname.includes("index.html") || window.location.pathname.endsWith("/")) {
      // When returning to index, we wanted to clear cart etc per original code:
      // Keep this behaviour: clear cart on index load (as user requested earlier)
      localStorage.removeItem("cart");
      localStorage.removeItem("selectedBrand");
      localStorage.removeItem("selectedProduct");
      localStorage.removeItem("invoiceData");
      // don't remove shopData so form persists
    }
  } catch (e) {
    console.error('Error clearing storage on index load', e);
  }

  // decide which page
  const path = window.location.pathname.toLowerCase();
  if (path.includes('products.html') || path.includes('/products')) {
    initProductsPage();
  } else if (path.includes('order.html') || path.includes('/order')) {
    initOrderPage();
  } else {
    // home page - nothing special needed
    // but we still update badge (cart cleared on home unless not index)
    loadCartFromStorage();
    updateCartBadge();
  }
})();

/* =======================
   Developer debug helper (optional)
======================= */
window.__SDE_debug = {
  getCart: () => cart,
  setCart: (c) => { cart = c; saveCart(); },
  clearCart: () => { cart = []; saveCart(); }
};
