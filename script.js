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
