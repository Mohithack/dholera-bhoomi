import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContactForm } from '../components/ContactForm.jsx';
import { DholeraMap } from '../components/DholeraMap.jsx';
import { FaqSection } from '../components/FaqSection.jsx';
import { GallerySlider } from '../components/GallerySlider.jsx';
import { BrandLogo } from '../components/BrandLogo.jsx';
import { PlatformNavbar } from '../components/PlatformNavbar.jsx';
import { NEWS_ARTICLES } from '../data/newsData.js';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

const NEWS_PREVIEW = NEWS_ARTICLES.slice(0, 3);

export function ProjectDetail({ project }) {
  useScrollReveal();

  useEffect(() => {
    document.title = project.seo.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', project.seo.description);
  }, [project]);

  const { hero, whyInvest, growthDrivers, projectHighlights, plots, usp, amenities, location, investmentBenefits, team, brochure, contact, footer } = project;

  return (
    <>
      <div className="dholera-band">
        <p>{project.band}</p>
      </div>

      <PlatformNavbar />

      <section className="hero">
        <div className="hero-overlay" aria-hidden />
        <div className="container hero-content">
          <p className="hero-tag">{hero.tag}</p>
          <h1>
            {hero.title} <br />
            <span>{hero.titleHighlight}</span>
          </h1>
          <p className="hero-sub">{hero.description}</p>
          <div className="hero-cta">
            <a href={hero.ctaPrimary.href} className="btn-primary">{hero.ctaPrimary.label}</a>
            <a href={hero.ctaSecondary.href} className="btn-outline">{hero.ctaSecondary.label}</a>
          </div>
          <div className="hero-stats">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="brand-cta-marquee">
        <p>{project.marquee}</p>
      </div>

      <section className="why-us" id="why">
        <div className="container">
          <h2 className="section-title">{whyInvest.title}</h2>
          <p className="section-sub">{whyInvest.subtitle}</p>
          <div className="cards-grid">
            {whyInvest.cards.map((c) => (
              <div className="card" key={c.title}>
                <div className="card-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--dark)', padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-title">{growthDrivers.title}</h2>
          <p className="section-sub">{growthDrivers.subtitle}</p>
          <div className="cards-grid">
            {growthDrivers.cards.map((c) => (
              <div className={`card${c.image ? ' card--image' : ''}`} key={c.title}>
                {c.image && (
                  <div className="card-image-wrap">
                    <img src={c.image} alt={c.title} className="card-real-img" />
                  </div>
                )}
                {!c.image && <div className="card-icon">{c.icon}</div>}
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--dark2)', padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-title">Project Highlights</h2>
          <p className="section-sub">Built to global standards from the ground up — a complete smart city investment ecosystem.</p>
          <div className="amenity-list">
            {projectHighlights.map((item) => (
              <div className="amenity-item" key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="plots" id="plots">
        <div className="container">
          <h2 className="section-title">Price & Availability</h2>
          <p className="section-sub">
            Dholera plots starting under ₹50 lakh — residential & commercial options at Civil Lines Phase-1. A Project by{' '}
            <strong style={{ color: 'var(--gold)' }}>Dholera Bhoomi</strong>.
          </p>
          <div className="plot-grid">
            {plots.map((plot) => (
              <div
                key={plot.id}
                className={`plot-card${plot.featured ? ' featured' : ''}${plot.urgent ? ' commercial-urgent' : ''}`}
              >
                <div className={`plot-badge${plot.badgeHighlight ? ' highlight' : ''}`}>{plot.badge}</div>
                {plot.urgentBanner && <div className="urgent-banner">{plot.urgentBanner}</div>}
                <h3>{plot.title}</h3>
                <p className="plot-size">{plot.size}</p>
                <ul>
                  {plot.features.map((f) => (
                    <li key={f}>✔ {f}</li>
                  ))}
                </ul>
                {plot.slots && (
                  <div className="slots-left">
                    {Array.from({ length: plot.slots.total }).map((_, i) => (
                      <span key={i} className={`slot${i < plot.slots.filled ? ' filled' : ''}`} aria-hidden />
                    ))}
                    <p>Only <strong>{plot.slots.remaining} plots</strong> remaining out of {plot.slots.totalUnits}</p>
                  </div>
                )}
                <p className="plot-price">{plot.price}</p>
                <a href="#contact" className={`btn-primary full-width${plot.urgent ? ' btn-urgent' : ''}`}>
                  {plot.urgent ? "Book Before It's Gone!" : 'Enquire Now'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-section" id="gallery">
        <div className="container">
          <h2 className="section-title">Our Gallery</h2>
          <p className="section-sub">Photos from the site — see the future taking shape.</p>
          <GallerySlider />
        </div>
      </section>

      <section className="usp-section" id="usp">
        <div className="container">
          <h2 className="section-title">{usp.title}</h2>
          <p className="section-sub">{usp.subtitle}</p>
          <div className="usp-grid">
            {usp.items.map((item) => (
              <div className="usp-item" key={item.number}>
                <div className="usp-number">{item.number}</div>
                <div className="usp-content">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="amenities" id="amenities">
        <div className="container">
          <h2 className="section-title">Township Amenities</h2>
          <p className="section-sub">Everything planned for a complete, modern lifestyle.</p>
          <div className="amenity-list">
            {amenities.map((item) => (
              <div className="amenity-item" key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="location" id="location">
        <div className="container location-inner">
          <div className="location-text">
            <h2 className="section-title left">{location.title}</h2>
            <p>{location.description}</p>
            <ul className="location-list">
              {location.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href="#contact" className="btn-primary">Contact Our Team</a>
          </div>
          <div className="map-wrapper">
            <DholeraMap />
            <div className="map-label">
              <span>📍 {location.address}</span>
              <a href={location.googleEarthUrl} target="_blank" rel="noopener noreferrer" className="map-open-link">
                Open in Google Earth ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--dark2)', padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-title">{investmentBenefits.title}</h2>
          <p className="section-sub">{investmentBenefits.subtitle}</p>
          <div className="cards-grid">
            {investmentBenefits.cards.map((c) => (
              <div className="card" key={c.title}>
                <div className="card-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--dark)', padding: '80px 0' }} id="news">
        <div className="container">
          <h2 className="section-title">Latest {project.name} News</h2>
          <p className="section-sub">Stay updated with the latest developments from {project.name}.</p>
          <div className="news-preview-grid">
            {NEWS_PREVIEW.map((article) => (
              <div className="news-card" key={article.title}>
                <div className="news-card-img" style={{ backgroundImage: `url('${article.image}')` }} />
                <div className="news-card-body">
                  <span className="news-date">{article.date}</span>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/news" className="btn-primary">View All News →</Link>
          </div>
        </div>
      </section>

      <FaqSection />

      <section style={{ background: 'var(--dark2)', padding: '80px 0' }} id="brochure">
        <div className="container">
          <div className="brochure-box">
            <div className="brochure-left">
              <div className="brochure-icon">📄</div>
              <div>
                <h2 style={{ color: 'var(--white)', fontSize: '1.7rem', fontWeight: 800, marginBottom: 8 }}>{brochure.title}</h2>
                <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: 480 }}>{brochure.description}</p>
                <ul style={{ listStyle: 'none', marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {brochure.features.map((f) => (
                    <li key={f} style={{ color: 'var(--text)', fontSize: '0.9rem' }}>✔ {f}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="brochure-right">
              <a href={brochure.pdfPath} download={brochure.filename} className="btn-primary brochure-btn">⬇ Download Brochure</a>
              <a href={brochure.pdfPath} target="_blank" rel="noopener noreferrer" className="btn-outline brochure-btn" style={{ marginTop: 12 }}>👁 View Online</a>
              <p style={{ color: 'var(--muted)', fontSize: '0.75rem', marginTop: 14, textAlign: 'center' }}>PDF • Free Download</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container contact-inner">
          <div className="contact-text">
            <h2>{contact.title}</h2>
            <p style={{ color: 'var(--gold)', fontWeight: 600, fontSize: '1rem', marginBottom: 8 }}>{contact.urgentNote}</p>
            <p>{contact.description}</p>
            <div className="contact-details">
              <p>📍 {contact.address}</p>
            </div>
            <div className="team-box">
              <p className="team-box-title">A Project by {contact.projectBrand}</p>
              <div className="team-list">
                {team.map((member) => (
                  <div className="team-row" key={member.name}>
                    <span className="team-name">{member.name}</span>
                    <a href={`tel:${member.phone}`} className="team-number">{member.display}</a>
                  </div>
                ))}
              </div>
              <p className="team-tagline">{contact.pricingTagline}</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <Link to="/" className="logo logo-mark" aria-label="BhoomiTree Realty — Home">
            <BrandLogo variant="footer" />
          </Link>
          <p>{footer.copyright} | {footer.address}</p>
          <p className="disclaimer">*Prices are indicative and subject to change. Images are for representation purposes only. Please verify all details with our team.</p>
        </div>
      </footer>
    </>
  );
}
