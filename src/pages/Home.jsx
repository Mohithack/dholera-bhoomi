import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContactForm } from '../components/ContactForm.jsx';
import { DholeraMap } from '../components/DholeraMap.jsx';
import { FaqSection } from '../components/FaqSection.jsx';
import { GallerySlider } from '../components/GallerySlider.jsx';
import { BrandLogo } from '../components/BrandLogo.jsx';
import { Navbar } from '../components/Navbar.jsx';
import { NEWS_ARTICLES } from '../data/newsData.js';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

const NEWS_PREVIEW = NEWS_ARTICLES.slice(0, 3);

export function Home() {
  useScrollReveal();

  useEffect(() => {
    document.title = 'Dholera SIR Residential & Commercial Plots | Starting ₹10 Lakh';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Buy residential and commercial plots in Dholera SIR at entry price. High ROI investment near Tata semiconductor plant. Book your plot today.',
      );
    }
  }, []);

  return (
    <>
      <div className="dholera-band">
        <p>🏆 India&apos;s First Greenfield Smart City &nbsp;|&nbsp; DMIC Corridor &nbsp;|&nbsp; Plots @ ₹9,000/Gaj Only</p>
      </div>

      <Navbar />

      <section className="hero">
        <div className="hero-overlay" aria-hidden />
        <div className="container hero-content">
          <p className="hero-tag">India&apos;s First Greenfield Smart City</p>
          <h1>
            Dholera SIR <br />
            <span>Residential & Commercial Plots</span>
          </h1>
          <p className="hero-sub">
            Invest in India&apos;s most ambitious smart city investment on the DMIC corridor. Dholera plots starting at just ₹10.80 Lakh — plots under 50 lakh in
            a world-class greenfield city.
          </p>
          <div className="hero-cta">
            <a href="#plots" className="btn-primary">
              View Plots & Pricing
            </a>
            <a href="#contact" className="btn-outline">
              Book Free Office Visit
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <strong>₹9,000</strong>
              <span>Per Gaj/Sq.Yd</span>
            </div>
            <div>
              <strong>₹10.80L</strong>
              <span>Starting Price</span>
            </div>
            <div>
              <strong>109 km</strong>
              <span>from Ahmedabad</span>
            </div>
            <div>
              <strong>DMIC</strong>
              <span>Corridor</span>
            </div>
          </div>
        </div>
      </section>

      <div className="brand-cta-marquee">
        <p>⚡ GREAT OPPORTUNITY &nbsp;—&nbsp; Limited Plots Available &nbsp;—&nbsp; Easy Payment Options Available</p>
      </div>

      <section className="why-us" id="why">
        <div className="container">
          <h2 className="section-title">Why Invest in Dholera SIR</h2>
          <p className="section-sub">A once-in-a-generation Dholera SIR investment opportunity backed by Central & Gujarat Government.</p>
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">🏛️</div>
              <h3>Government Approved</h3>
              <p>Central & Gujarat Government backed project with full regulatory clearance and transparent development.</p>
            </div>
            <div className="card">
              <div className="card-icon">🏙️</div>
              <h3>World-Class Infrastructure</h3>
              <p>6/8-lane expressway, underground utilities, smart water & power management, ICT-enabled city planning.</p>
            </div>
            <div className="card">
              <div className="card-icon">📈</div>
              <h3>High ROI Potential</h3>
              <p>Early investment means maximum profit. Land values in DMIC corridor have historically appreciated 3–5× in a decade.</p>
            </div>
            <div className="card">
              <div className="card-icon">🤖</div>
              <h3>Smart City Planning</h3>
              <p>Intelligent traffic, waste management, solar power, and digital services built into the city from day one.</p>
            </div>
            <div className="card">
              <div className="card-icon">🏭</div>
              <h3>Industrial + Residential + Commercial</h3>
              <p>Dedicated zones for manufacturing, IT hubs, residences, and commerce — a self-sustained smart township.</p>
            </div>
            <div className="card">
              <div className="card-icon">💰</div>
              <h3>Affordable Entry Price</h3>
              <p>Starting at just ₹10.80 Lakh for 120 Gaj. Easy payment options to suit every budget.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--dark)', padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-title">Mega Growth Drivers</h2>
          <p className="section-sub">Catalysts that will make Dholera one of India&apos;s most valuable destinations.</p>
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">💻</div>
              <h3>Tata Semi-Conductor Plant</h3>
              <p>India&apos;s first large-scale semiconductor fabrication unit is being set up at Dholera — bringing thousands of jobs.</p>
            </div>
            <div className="card">
              <div className="card-icon">✈️</div>
              <h3>International Airport</h3>
              <p>India&apos;s second-largest Greenfield international airport — Dholera International Airport — under construction.</p>
            </div>
            <div className="card">
              <div className="card-icon">🚆</div>
              <h3>Dedicated Freight Corridor</h3>
              <p>DMIC&apos;s dedicated freight corridor connects Dholera to Delhi–Mumbai industrial spine — massive logistic advantage.</p>
            </div>
            <div className="card">
              <div className="card-icon">🛣️</div>
              <h3>Expressway & Metro</h3>
              <p>Expressway operational from 23rd Feb 2025. Metro connectivity planned — shortening travel to Ahmedabad drastically.</p>
            </div>
            <div className="card">
              <div className="card-icon">☀️</div>
              <h3>Asia&apos;s Largest Solar Park</h3>
              <p>Dholera hosts Asia&apos;s largest solar power park — making it 100% renewable-energy-capable.</p>
            </div>
            <div className="card">
              <div className="card-icon">🏛️</div>
              <h3>World&apos;s Largest Museum (Lothal)</h3>
              <p>Lothal — UNESCO heritage site nearby — set to host the world&apos;s largest national maritime heritage museum.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--dark2)', padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-title">Project Highlights</h2>
          <p className="section-sub">Built to global standards from the ground up — a complete smart city investment ecosystem.</p>
          <div className="amenity-list">
            <div className="amenity-item">🛣️ 6/8 Lane Expressway</div>
            <div className="amenity-item">⚡ Underground Utilities</div>
            <div className="amenity-item">💧 Smart Water Management</div>
            <div className="amenity-item">🔋 Smart Power Management</div>
            <div className="amenity-item">☀️ Solar Power Park</div>
            <div className="amenity-item">📡 ICT Enabled City</div>
            <div className="amenity-item">✈️ Dholera Airport</div>
            <div className="amenity-item">🚇 Metro (Planned)</div>
            <div className="amenity-item">🏭 Industrial Zone</div>
            <div className="amenity-item">🏛️ Civic Centre</div>
            <div className="amenity-item">💻 IT & Knowledge Park</div>
            <div className="amenity-item">🌏 ABCD Building</div>
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
            <div className="plot-card">
              <div className="plot-badge">Residential</div>
              <h3>Starter Residential</h3>
              <p className="plot-size">120 Gaj (Sq. Yd)</p>
              <ul>
                <li>✔ Smart City Location</li>
                <li>✔ Near Expressway</li>
                <li>✔ Underground Utilities</li>
                <li>✔ DMIC Corridor</li>
              </ul>
              <p className="plot-price">₹10.80 Lakh</p>
              <a href="#contact" className="btn-primary full-width">
                Enquire Now
              </a>
            </div>

            <div className="plot-card featured">
              <div className="plot-badge highlight">Most Popular</div>
              <h3>Premium Residential</h3>
              <p className="plot-size">200 – 300 Gaj</p>
              <ul>
                <li>✔ Near Club House</li>
                <li>✔ Park Facing Available</li>
                <li>✔ 40 ft Road Access</li>
                <li>✔ Full Infrastructure</li>
              </ul>
              <p className="plot-price">₹9,000 / Gaj</p>
              <a href="#contact" className="btn-primary full-width">
                Enquire Now
              </a>
            </div>

            <div className="plot-card commercial-urgent">
              <div className="plot-badge highlight">🔥 Only 4 Left!</div>
              <div className="urgent-banner">⚠️ ALMOST SOLD OUT</div>
              <h3>Commercial Built-Up Plots (90 Sq.yd) G+1</h3>
              <p className="plot-size">90 Sq.yd | G+1</p>
              <ul>
                <li>✔ Main Road / Corner</li>
                <li>✔ High Footfall Zone</li>
                <li>✔ Near Industrial Hub</li>
                <li>✔ High Appreciation</li>
              </ul>
              <div className="slots-left">
                <span className="slot filled" aria-hidden />
                <span className="slot filled" aria-hidden />
                <span className="slot filled" aria-hidden />
                <span className="slot filled" aria-hidden />
                <span className="slot" aria-hidden />
                <span className="slot" aria-hidden />
                <span className="slot" aria-hidden />
                <span className="slot" aria-hidden />
                <p>
                  Only <strong>4 plots</strong> remaining out of 28
                </p>
              </div>
              <p className="plot-price">Call for Price</p>
              <a href="#contact" className="btn-primary full-width btn-urgent">
                Book Before It&apos;s Gone!
              </a>
            </div>
          </div>

          <div
            style={{
              marginTop: 48,
              background: 'var(--dark2)',
              border: '1px solid rgba(201,162,39,0.3)',
              borderRadius: 14,
              padding: '32px 36px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 24,
            }}
          >
            <div>
              <h3 style={{ color: 'var(--white)', fontSize: '1.3rem', marginBottom: 8 }}>Easy Payment Options Available</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Flexible installment plans to make your investment easy and affordable.</p>
            </div>
            <a href="#contact" className="btn-primary">
              Get Payment Plan
            </a>
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
          <h2 className="section-title">Why Choose Dholera Bhoomi?</h2>
          <p className="section-sub">Our unique advantages that set us apart from every other real estate partner.</p>
          <div className="usp-grid">
            <div className="usp-item">
              <div className="usp-number">01</div>
              <div className="usp-content">
                <h3>100% Legal & Secure</h3>
                <p>
                  Every property comes with government-approved documentation, NA clearances, and complete regulatory compliance. Your investment is fully
                  protected.
                </p>
              </div>
            </div>
            <div className="usp-item">
              <div className="usp-number">02</div>
              <div className="usp-content">
                <h3>Direct Developer Pricing</h3>
                <p>No middlemen. No hidden charges. You get the best prices directly — saving lakhs compared to third-party brokers.</p>
              </div>
            </div>
            <div className="usp-item">
              <div className="usp-number">03</div>
              <div className="usp-content">
                <h3>Free Personalised Site Visit</h3>
                <p>We personally escort you to the site, walk you through the masterplan, and help you choose your ideal plot — at no cost.</p>
              </div>
            </div>
            <div className="usp-item">
              <div className="usp-number">04</div>
              <div className="usp-content">
                <h3>Flexible Easy EMI Options</h3>
                <p>Start your investment with a small down payment and spread the rest into comfortable monthly installments tailored to your budget.</p>
              </div>
            </div>
            <div className="usp-item">
              <div className="usp-number">05</div>
              <div className="usp-content">
                <h3>Post-Sale Support</h3>
                <p>From documentation to registry, from site visits to resale assistance — we stand by you at every step, even after purchase.</p>
              </div>
            </div>
            <div className="usp-item">
              <div className="usp-number">06</div>
              <div className="usp-content">
                <h3>Trusted by 500+ Families</h3>
                <p>The Dholera Bhoomi team has helped hundreds of families and investors secure their stake in India&apos;s smartest city.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="amenities" id="amenities">
        <div className="container">
          <h2 className="section-title">Township Amenities</h2>
          <p className="section-sub">Everything planned for a complete, modern lifestyle.</p>
          <div className="amenity-list">
            <div className="amenity-item">🏊 Swimming Pool</div>
            <div className="amenity-item">🏛️ Club House</div>
            <div className="amenity-item">🎪 Community Hall</div>
            <div className="amenity-item">🌿 Park & Children Park</div>
            <div className="amenity-item">🏋️ Gym & Wellness</div>
            <div className="amenity-item">📚 Library</div>
            <div className="amenity-item">🚌 Internal Shuttle</div>
            <div className="amenity-item">💡 Solar Street Lighting</div>
            <div className="amenity-item">🛕 Mandir</div>
            <div className="amenity-item">🔒 24/7 Security</div>
            <div className="amenity-item">🛒 Retail Shops</div>
            <div className="amenity-item">🚗 Parking Zones</div>
          </div>
        </div>
      </section>

      <section className="location" id="location">
        <div className="container location-inner">
          <div className="location-text">
            <h2 className="section-title left">Location Benefits</h2>
            <p>
              Dholera SIR sits at the centre of India&apos;s most ambitious infrastructure build-out — connected to markets, airports, and industrial hubs. A prime
              Dholera SIR investment location.
            </p>
            <ul className="location-list">
              <li>📍 109 km from Ahmedabad</li>
              <li>📍 On DMIC (Delhi–Mumbai Industrial Corridor)</li>
              <li>📍 Dholera International Airport (2nd largest in India)</li>
              <li>📍 Expressway — Operational from 23rd Feb 2025</li>
              <li>📍 Metro Connectivity — Planned</li>
              <li>📍 Adjacent to ABCD Building & Civic Centre</li>
              <li>📍 Near Dhanduka City & Railway Station</li>
            </ul>
            <a href="#contact" className="btn-primary">
              Book an Office Visit
            </a>
          </div>
          <div className="map-wrapper">
            <DholeraMap />
            <div className="map-label">
              <span>📍 Civil Lines Phase-1, Dholera SIR, Gujarat</span>
              <a
                href="https://earth.google.com/web/search/Dhandhuka+Highway,+Dholera,+Gujarat+382455/@22.2564,72.1764,100a,5000d,35y,0h,0t,0r"
                target="_blank"
                rel="noopener noreferrer"
                className="map-open-link"
              >
                Open in Google Earth ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--dark2)', padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-title">Investment Benefits</h2>
          <p className="section-sub">Why early investors in Dholera stand to gain the most.</p>
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">💵</div>
              <h3>Affordable Entry Price</h3>
              <p>Starting at ₹10.80 Lakh for 120 Gaj — one of the lowest entry points in an internationally planned smart city.</p>
            </div>
            <div className="card">
              <div className="card-icon">📊</div>
              <h3>Long-term Capital Appreciation</h3>
              <p>Infrastructure-led development always drives land prices up. Early movers capture the entire upside.</p>
            </div>
            <div className="card">
              <div className="card-icon">🤝</div>
              <h3>Trusted & Transparent</h3>
              <p>Dholera Bhoomi ensures clear title, proper documentation, and complete transparency in every transaction.</p>
            </div>
            <div className="card">
              <div className="card-icon">🏠</div>
              <h3>Future Home or Business</h3>
              <p>Suitable for building your dream home, a business hub, or holding as a high-value investment asset.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--dark)', padding: '80px 0' }} id="news">
        <div className="container">
          <h2 className="section-title">Latest Dholera News</h2>
          <p className="section-sub">Stay updated with the latest developments from Dholera SIR.</p>
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
            <Link to="/news" className="btn-primary">
              View All News →
            </Link>
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
                <h2 style={{ color: 'var(--white)', fontSize: '1.7rem', fontWeight: 800, marginBottom: 8 }}>Download Site Brochure</h2>
                <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: 480 }}>
                  Get the complete project details — masterplan, plot layout, pricing, amenities, and location map — all in one document.
                </p>
                <ul style={{ listStyle: 'none', marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <li style={{ color: 'var(--text)', fontSize: '0.9rem' }}>✔ Civil Lines Phase-1 Masterplan</li>
                  <li style={{ color: 'var(--text)', fontSize: '0.9rem' }}>✔ Plot Layout & Pricing Details</li>
                  <li style={{ color: 'var(--text)', fontSize: '0.9rem' }}>✔ Location Map & Connectivity</li>
                  <li style={{ color: 'var(--text)', fontSize: '0.9rem' }}>✔ Amenities & Infrastructure Overview</li>
                </ul>
              </div>
            </div>
            <div className="brochure-right">
              <a href="/dholera-brochure.pdf" download="Dholera-Bhoomi-Brochure.pdf" className="btn-primary brochure-btn">
                ⬇ Download Brochure
              </a>
              <a href="/dholera-brochure.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline brochure-btn" style={{ marginTop: 12 }}>
                👁 View Online
              </a>
              <p style={{ color: 'var(--muted)', fontSize: '0.75rem', marginTop: 14, textAlign: 'center' }}>PDF • Free Download</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container contact-inner">
          <div className="contact-text">
            <h2>Book Your Plot Today!</h2>
            <p style={{ color: 'var(--gold)', fontWeight: 600, fontSize: '1rem', marginBottom: 8 }}>
              ⚡ Grab the opportunity before it&apos;s too late — Limited Plots Available
            </p>
            <p>Our team will personally guide you through the site and help you select the best plot for your needs and budget.</p>
            <div className="contact-details">
              <p>📍 Civil Lines Phase-1, Dholera SIR, Gujarat</p>
              <p>🕘 Site Visit Available (T&C Apply)</p>
              <p>💳 Easy Payment Options Available</p>
            </div>
            <div className="team-box">
              <p className="team-box-title">A Project by Dholera Bhoomi</p>
              <div className="team-list">
                <div className="team-row">
                  <span className="team-name">Mohit Thakur</span>
                  <a href="tel:7009457653" className="team-number">
                    +91 70094 57653
                  </a>
                </div>
                <div className="team-row">
                  <span className="team-name">Jeevan Singh</span>
                  <a href="tel:+919877445622" className="team-number">
                    +91 98774 45622
                  </a>
                </div>
                <div className="team-row">
                  <span className="team-name">Neeraj Kumar</span>
                  <a href="tel:+919685124562" className="team-number">
                    +91 96851 24562
                  </a>
                </div>
                <div className="team-row">
                  <span className="team-name">Bhanu Pratap Singh</span>
                  <a href="tel:+918968060758" className="team-number">
                    +91 89680 60758
                  </a>
                </div>
              </div>
              <p className="team-tagline">Plots at ₹9,000 Per Gaj/Sq.Yd Only</p>
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
          <p>© 2026 Dholera Bhoomi. All rights reserved. | Civil Lines Phase-1, Dholera SIR, Gujarat</p>
          <p className="disclaimer">*Prices are indicative and subject to change. Images are for representation purposes only. Please verify all details at site visit.</p>
        </div>
      </footer>
    </>
  );
}
