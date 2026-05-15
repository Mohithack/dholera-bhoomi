import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PlatformNavbar } from '../components/PlatformNavbar.jsx';
import { BrandLogo } from '../components/BrandLogo.jsx';
import { useScrollReveal } from '../hooks/useScrollReveal.js';


function EnquiryForm() {
  const [waUrl, setWaUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function buildMessage(fd) {
    const name     = (fd.get('name') || '').toString().trim();
    const phone    = (fd.get('phone') || '').toString().trim();
    const email    = (fd.get('email') || '').toString().trim();
    const city     = (fd.get('city') || '').toString().trim();
    const interest = (fd.get('interest') || '').toString() || 'Not specified';
    const budget   = (fd.get('budget') || '').toString() || 'Not specified';
    const message  = (fd.get('message') || '').toString().trim();

    const now = new Date().toLocaleString('en-IN', {
      day: '2-digit', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit', hour12: true,
    });

    return [
      '🏡 *BhoomiTree Realty — New Enquiry*',
      `📅 ${now}`,
      '',
      `👤 *Name:* ${name}`,
      `📞 *Phone:* ${phone}`,
      email ? `📧 *Email:* ${email}` : null,
      city  ? `📍 *City:* ${city}` : null,
      '',
      `🏗️ *Interested In:* ${interest}`,
      `💰 *Budget:* ${budget}`,
      message ? `\n💬 *Message:*\n${message}` : null,
      '',
      '---',
      '_via BhoomiTreeRealty.in_',
    ]
      .filter((l) => l !== null)
      .join('\n');
  }

  function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const text = buildMessage(fd);
    const url = `https://wa.me/919696960004?text=${encodeURIComponent(text)}`;
    setWaUrl(url);
    setSubmitted(true);
  }

  function handleReset() {
    setSubmitted(false);
    setWaUrl('');
  }

  if (submitted) {
    return (
      <div className="cp-sent-state">
        <div className="cp-sent-icon">✅</div>
        <h3>Your enquiry is ready!</h3>
        <p>Click the button below to send it directly to our team on WhatsApp.</p>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary full-width cp-submit cp-wa-link"
        >
          📲 Open WhatsApp &amp; Send
        </a>
        <div className="cp-fallback-notice">
          <p>No WhatsApp? &nbsp;
            <a href="tel:+919696960004">📞 +91 96969 60004</a>
          </p>
        </div>
        <button type="button" className="cp-back-btn" onClick={handleReset}>
          ← Edit enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form cp-form" onSubmit={handleSubmit}>
      <div className="cp-form-row">
        <input type="text" name="name"  placeholder="Full Name *" required />
        <input type="tel"  name="phone" placeholder="Phone / WhatsApp *" required />
      </div>
      <div className="cp-form-row">
        <input type="email" name="email" placeholder="Email Address" />
        <input type="text"  name="city"  placeholder="Your City" />
      </div>
      <div className="cp-form-row">
        <select name="interest" defaultValue="">
          <option value="">Interested In</option>
          <option value="Dholera SIR — Residential Plot">Dholera SIR — Residential Plot</option>
          <option value="Dholera SIR — Commercial Plot">Dholera SIR — Commercial Plot</option>
          <option value="Site Visit">Schedule a Site Visit</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Investment Advice">Investment Advice</option>
        </select>
        <select name="budget" defaultValue="">
          <option value="">Budget Range</option>
          <option value="Under ₹15 Lakh">Under ₹15 Lakh</option>
          <option value="₹15 – ₹30 Lakh">₹15 – ₹30 Lakh</option>
          <option value="₹30 – ₹50 Lakh">₹30 – ₹50 Lakh</option>
          <option value="Above ₹50 Lakh">Above ₹50 Lakh</option>
        </select>
      </div>
      <textarea name="message" placeholder="Any specific requirements or questions?" rows={4} />
      <button type="submit" className="btn-primary full-width cp-submit">
        Review &amp; Send Enquiry →
      </button>
      <p className="cp-form-note">
        Message goes directly to our team on WhatsApp.
        <br />No WhatsApp? &nbsp;<a href="tel:+919696960004" className="cp-call-link">📞 Call us directly</a>
      </p>
    </form>
  );
}

export function ContactPage() {
  useScrollReveal();

  useEffect(() => {
    document.title = 'Contact Us | BhoomiTree Realty';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Contact BhoomiTree Realty for real estate investment guidance. Visit our office at CP67 Mall, Mohali or call us at +91 96969 60004.');
    document.body.classList.add('light-theme');
    return () => document.body.classList.remove('light-theme');
  }, []);

  return (
    <>
      <PlatformNavbar />

      {/* Page hero */}
      <section className="cp-hero">
        <div className="cp-hero-overlay" aria-hidden />
        <div className="container cp-hero-content">
          <p className="hero-tag">BhoomiTree Realty</p>
          <h1>Get in <span>Touch</span></h1>
          <p>Our experts are ready to guide you — free consultation, no obligation.</p>
        </div>
      </section>

      {/* Main contact section */}
      <section className="cp-main">
        <div className="container cp-main-inner">

          {/* Left — contact info */}
          <div className="cp-info">
            <h2>Our Office</h2>

            <div className="cp-details-card">
              <div className="cp-detail-row">
                <span className="cp-detail-icon">📍</span>
                <div>
                  <strong>Office Address</strong>
                  <p>CP67 Mall, 7th Floor, Office No. 722<br />Imperial Tower, SAS Nagar Mohali<br />Punjab — 160062</p>
                </div>
              </div>
              <div className="cp-divider" />
              <div className="cp-detail-row">
                <span className="cp-detail-icon">🕐</span>
                <div>
                  <strong>Working Hours</strong>
                  <p>Mon – Sat: 10:00 AM – 7:00 PM<br />Sunday: 11:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>

            <div className="cp-map-wrapper">
              <iframe
                title="BhoomiTree Realty Office — Mohali"
                src="https://maps.google.com/maps?q=CP67+Mall+Imperial+Tower+SAS+Nagar+Mohali+Punjab+160062&output=embed"
                width="100%"
                height="280"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right — enquiry form */}
          <div className="cp-form-wrap">
            <h2>Send an Enquiry</h2>
            <p className="cp-form-sub">Fill in your details and we'll reach out within 1 hour on WhatsApp.</p>
            <EnquiryForm />
          </div>

        </div>
      </section>

      {/* Trust badges — after form */}
      <div className="cp-trust-bar cp-trust-bar--compact">
        <div className="container cp-trust-inner">
          <div className="cp-trust-item">
            <span className="cp-trust-icon">💬</span>
            <div>
              <strong>Free Consultation</strong>
              <p>Zero charge, zero pressure guidance</p>
            </div>
          </div>
          <div className="cp-trust-item">
            <span className="cp-trust-icon">🏛️</span>
            <div>
              <strong>100% Legal Projects</strong>
              <p>Government-approved with clear titles</p>
            </div>
          </div>
          <div className="cp-trust-item">
            <span className="cp-trust-icon">💰</span>
            <div>
              <strong>Zero Brokerage</strong>
              <p>Direct developer pricing, always</p>
            </div>
          </div>
          <div className="cp-trust-item">
            <span className="cp-trust-icon">⚡</span>
            <div>
              <strong>Quick Response</strong>
              <p>We reply within 1 hour</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container footer-inner">
          <Link to="/" className="logo logo-mark" aria-label="BhoomiTree Realty — Home">
            <BrandLogo variant="footer" />
          </Link>
          <p>© 2026 BhoomiTree Realty. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
