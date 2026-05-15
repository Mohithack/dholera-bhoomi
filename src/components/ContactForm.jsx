import { useState } from 'react';

export function ContactForm() {
  const [waUrl, setWaUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name    = (fd.get('name') || '').toString().trim();
    const mobile  = (fd.get('mobile') || '').toString().trim();
    const email   = (fd.get('email') || '').toString().trim();
    const plot    = (fd.get('plot') || '').toString() || 'Not selected';
    const purpose = (fd.get('purpose') || '').toString() || 'Not selected';
    const message = (fd.get('message') || '').toString().trim();

    const now = new Date().toLocaleString('en-IN', {
      day: '2-digit', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit', hour12: true,
    });

    const text = [
      '🏡 *BhoomiTree Realty — Plot Enquiry*',
      `📅 ${now}`,
      '',
      `👤 *Name:* ${name}`,
      `📞 *Mobile:* ${mobile}`,
      email ? `📧 *Email:* ${email}` : null,
      '',
      `🏗️ *Plot Type:* ${plot}`,
      `🎯 *Purpose:* ${purpose}`,
      message ? `\n💬 *Message:*\n${message}` : null,
      '',
      '---',
      '_via BhoomiTreeRealty.in_',
    ]
      .filter((l) => l !== null)
      .join('\n');

    setWaUrl(`https://wa.me/919696960004?text=${encodeURIComponent(text)}`);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', textAlign: 'center' }}>
        <p style={{ color: '#22c55e', fontWeight: 700, fontSize: '1rem' }}>✅ Enquiry ready!</p>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary full-width"
        >
          📲 Open WhatsApp &amp; Send
        </a>
        <p style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
          No WhatsApp? &nbsp;
          <a href="tel:+919696960004" style={{ color: 'var(--gold)', textDecoration: 'none' }}>📞 Call +91 96969 60004</a>
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer', fontSize: '0.82rem' }}
        >
          ← Edit details
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your Full Name *" required />
      <input type="tel" name="mobile" placeholder="Mobile / WhatsApp Number *" required />
      <input type="email" name="email" placeholder="Email Address" />
      <select name="plot" defaultValue="">
        <option value="">Select Plot Type</option>
        <option value="Starter Residential — 120 Gaj (₹10.80 Lakh)">
          Starter Residential — 120 Gaj (₹10.80 Lakh)
        </option>
        <option value="Premium Residential — 200–300 Gaj">Premium Residential — 200–300 Gaj</option>
        <option value="Commercial Built-Up Plots (90 Sq.yd) G+1 (Only 4 Left!)">
          Commercial Built-Up Plots (90 Sq.yd) G+1 (Only 4 Left!)
        </option>
        <option value="Not Sure — Need Guidance">Not Sure — Need Guidance</option>
      </select>
      <select name="purpose" defaultValue="">
        <option value="">Purpose of Investment</option>
        <option value="Future Home / Self Use">Future Home / Self Use</option>
        <option value="Investment / Resale">Investment / Resale</option>
        <option value="Business / Commercial Use">Business / Commercial Use</option>
      </select>
      <textarea name="message" placeholder="Any specific requirements or questions?" rows={3} />
      <button type="submit" className="btn-primary full-width">
        Review &amp; Send Enquiry →
      </button>
      <p style={{ fontSize: '0.78rem', color: 'var(--muted)', textAlign: 'center', marginTop: '8px' }}>
        No WhatsApp? &nbsp;<a href="tel:+919696960004" style={{ color: 'var(--gold)', textDecoration: 'none' }}>📞 Call us directly</a>
      </p>
    </form>
  );
}
