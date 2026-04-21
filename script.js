// Disable text selection, copy, and right-click
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('copy', e => e.preventDefault());
document.addEventListener('selectstart', e => {
  if (!e.target.closest('input, textarea, select')) e.preventDefault();
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger?.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Contact form — sends enquiry to Mohit's WhatsApp
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const fields = this.querySelectorAll('input, select, textarea');
  const name    = fields[0].value.trim();
  const mobile  = fields[1].value.trim();
  const email   = fields[2].value.trim();
  const plot    = fields[3].value || 'Not selected';
  const purpose = fields[4].value || 'Not selected';
  const message = fields[5].value.trim();

  const text = [
    '🏡 *New Plot Enquiry — Dholera Bhoomi*',
    '',
    `👤 *Name:* ${name}`,
    `📞 *Mobile:* ${mobile}`,
    email ? `📧 *Email:* ${email}` : null,
    `🏗️ *Plot Type:* ${plot}`,
    `🎯 *Purpose:* ${purpose}`,
    message ? `💬 *Message:* ${message}` : null,
    '',
    '_Sent via DholeraBhoomi.in_'
  ].filter(Boolean).join('\n');

  const whatsappURL = `https://wa.me/917009457653?text=${encodeURIComponent(text)}`;
  window.open(whatsappURL, '_blank');

  const btn = this.querySelector('button[type="submit"]');
  btn.textContent = '✔ Opening WhatsApp…';
  btn.style.background = '#22c55e';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Send Enquiry & Book Site Visit';
    btn.style.background = '';
    btn.disabled = false;
    this.reset();
  }, 4000);
});

// FAQ accordion
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// Gallery slider
(function () {
  const track = document.getElementById('sliderTrack');
  const dotsContainer = document.getElementById('sliderDots');
  const indexLabel = document.getElementById('slideIndex');
  if (!track) return;

  const slides = track.querySelectorAll('.slide');
  const total = slides.length;
  let current = 0;
  let autoTimer;

  // Build dots
  slides.forEach((_, i) => {
    const d = document.createElement('span');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(d);
  });

  function goTo(n) {
    current = (n + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsContainer.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === current));
    indexLabel.textContent = current + 1;
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  document.getElementById('sliderNext')?.addEventListener('click', () => { next(); resetAuto(); });
  document.getElementById('sliderPrev')?.addEventListener('click', () => { prev(); resetAuto(); });

  // Touch / swipe
  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); resetAuto(); }
  });

  function startAuto() { autoTimer = setInterval(next, 3500); }
  function resetAuto() { clearInterval(autoTimer); startAuto(); }
  startAuto();
})();

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .plot-card, .amenity-item, .usp-item, .gallery-card, .faq-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

const style = document.createElement('style');
style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(style);

// Leaflet map with KML overlay
(function () {
  if (!document.getElementById('dholeraMap')) return;

  const map = L.map('dholeraMap', { scrollWheelZoom: false, attributionControl: false }).setView([22.4933, 72.2917], 13);

  L.tileLayer('https://mt{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
    subdomains: ['0','1','2','3'], maxZoom: 20
  }).addTo(map);

  // Convert KML AABBGGRR color to { hex, alpha }
  function kmlColor(str) {
    const c = (str || '').trim().padStart(8, 'f');
    const a = parseInt(c.slice(0,2), 16) / 255;
    const b = parseInt(c.slice(2,4), 16);
    const g = parseInt(c.slice(4,6), 16);
    const r = parseInt(c.slice(6,8), 16);
    return { hex: '#' + [r,g,b].map(x => x.toString(16).padStart(2,'0')).join(''), alpha: a };
  }

  // Parse "lon,lat,alt ..." coordinate string to Leaflet [lat,lng] pairs
  function parseCoords(str) {
    return (str || '').trim().split(/\s+/).reduce((acc, pt) => {
      const [lng, lat] = pt.split(',').map(Number);
      if (!isNaN(lat) && !isNaN(lng)) acc.push([lat, lng]);
      return acc;
    }, []);
  }

  fetch('map2.kml')
    .then(r => r.text())
    .then(text => {
      const xml = new DOMParser().parseFromString(text, 'text/xml');

      // Build style lookup from <Style id="...">
      const styles = {};
      xml.querySelectorAll('Style[id]').forEach(s => {
        const fillEl   = s.querySelector('PolyStyle > color');
        const strokeEl = s.querySelector('LineStyle > color');
        const widthEl  = s.querySelector('LineStyle > width');
        const fill   = kmlColor(fillEl   ? fillEl.textContent   : 'bf888888');
        const stroke = kmlColor(strokeEl ? strokeEl.textContent : '00000000');
        styles[s.getAttribute('id')] = {
          fillColor:   fill.hex,
          fillOpacity: fill.alpha,
          color:       stroke.alpha < 0.01 ? 'transparent' : stroke.hex,
          opacity:     stroke.alpha,
          weight:      widthEl ? parseFloat(widthEl.textContent) : 0.5
        };
      });

      const layers = [];
      xml.querySelectorAll('Placemark').forEach(pm => {
        const ref   = (pm.querySelector('styleUrl') || {}).textContent;
        const style = styles[(ref || '').replace('#','')] || {
          fillColor:'#888', fillOpacity:0.5, color:'transparent', opacity:0, weight:0.5
        };
        pm.querySelectorAll('Polygon').forEach(poly => {
          const outerEl = poly.querySelector('outerBoundaryIs coordinates');
          if (!outerEl) return;
          const outer = parseCoords(outerEl.textContent);
          if (outer.length < 3) return;
          const holes = [];
          poly.querySelectorAll('innerBoundaryIs coordinates').forEach(el => {
            const h = parseCoords(el.textContent);
            if (h.length >= 3) holes.push(h);
          });
          layers.push(L.polygon(holes.length ? [outer, ...holes] : outer, style));
        });
      });

      if (layers.length) {
        const group = L.featureGroup(layers).addTo(map);
        map.fitBounds(group.getBounds(), { padding: [30, 30] });
      }

      // Drop pin on Dholera SIR
      const pinIcon = L.divIcon({
        className: '',
        html: `<div style="
          width:36px;height:36px;
          background:#c9a227;
          border:3px solid #fff;
          border-radius:50% 50% 50% 0;
          transform:rotate(-45deg);
          box-shadow:0 4px 12px rgba(0,0,0,0.5);
        "></div>`,
        iconSize: [36, 36],
        iconAnchor: [18, 36],
        popupAnchor: [0, -38]
      });

      const marker = L.marker([22.2564, 72.1764], { icon: pinIcon })
        .addTo(map)
        .bindPopup('<strong style="color:#c9a227">Civil Lines Phase-1 — Dholera Bhoomi</strong><br><span style="font-size:0.8rem">Dhandhuka Highway, Ta. Dholera, Gujarat 382455</span>');

      map.setView([22.2564, 72.1764], 13);
      marker.openPopup();
    });

  map.getContainer().addEventListener('click',      () => map.scrollWheelZoom.enable());
  map.getContainer().addEventListener('mouseleave', () => map.scrollWheelZoom.disable());
})();
