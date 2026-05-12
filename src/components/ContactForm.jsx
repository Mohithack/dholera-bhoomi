import { useState } from 'react';

const INITIAL_LABEL = 'Send Enquiry';

export function ContactForm() {
  const [submitLabel, setSubmitLabel] = useState(INITIAL_LABEL);
  const [disabled, setDisabled] = useState(false);
  const [highlight, setHighlight] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = (fd.get('name') || '').toString().trim();
    const mobile = (fd.get('mobile') || '').toString().trim();
    const email = (fd.get('email') || '').toString().trim();
    const plot = (fd.get('plot') || '').toString() || 'Not selected';
    const purpose = (fd.get('purpose') || '').toString() || 'Not selected';
    const message = (fd.get('message') || '').toString().trim();

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
      '_Sent via DholeraBhoomi.in_',
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappURL = `https://wa.me/917009457653?text=${encodeURIComponent(text)}`;
    window.open(whatsappURL, '_blank');

    setSubmitLabel('✔ Opening WhatsApp…');
    setHighlight(true);
    setDisabled(true);
    setTimeout(() => {
      setSubmitLabel('Send Enquiry');
      setHighlight(false);
      setDisabled(false);
      form.reset();
    }, 4000);
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
      <button
        type="submit"
        className="btn-primary full-width"
        disabled={disabled}
        style={
          highlight
            ? {
                background: '#22c55e',
              }
            : undefined
        }
      >
        {submitLabel}
      </button>
    </form>
  );
}
