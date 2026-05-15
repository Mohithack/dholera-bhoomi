import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PlatformNavbar } from '../components/PlatformNavbar.jsx';
import { BrandLogo } from '../components/BrandLogo.jsx';
import { PROJECTS } from '../data/projectsData.js';
import { NEWS_ARTICLES } from '../data/newsData.js';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

const NEWS_PREVIEW = NEWS_ARTICLES.slice(0, 3);

const FAQ_ITEMS = [
  {
    q: 'Are your projects 100% legally approved?',
    a: 'Yes. Every project we offer carries full government approvals — RERA registration, NA (Non-Agricultural) status, clear title deeds, and all necessary regulatory clearances. You can verify documentation with our team before booking.',
  },
  {
    q: 'What is the minimum investment to get started?',
    a: 'Our entry-level plots in Dholera SIR start at ₹10.80 Lakh for a 120 Gaj residential plot. We also offer flexible payment plans to suit different budgets. Contact our team for a personalised investment plan.',
  },
  {
    q: 'Do you charge any brokerage or hidden fees?',
    a: 'Zero brokerage — guaranteed. You pay exactly what the developer charges. There are no hidden markups, no commission layers, and no surprise fees at registration. Full cost transparency from day one.',
  },
  {
    q: 'Can I visit the site before investing?',
    a: 'Absolutely. We arrange free guided site visits to all our projects. Our team will accompany you, walk you through the master plan, show you plot demarcation, and answer every question on-ground.',
  },
  {
    q: 'How does the registration and paperwork process work?',
    a: 'We manage the complete process end-to-end — from allotment letter and sale agreement to stamp duty payment and sub-registrar registration. Our legal team ensures all documents are in order before you sign anything.',
  },
  {
    q: 'What is the expected return on investment?',
    a: 'Dholera SIR plots have seen 3–5× appreciation over the last 5 years as infrastructure development accelerates. While past performance doesn\'t guarantee future returns, government-backed smart city projects in early stages historically offer strong long-term appreciation.',
  },
  {
    q: 'Is there an EMI or instalment payment option?',
    a: 'Yes. We offer structured payment plans directly with the developer — typically 20–30% booking amount and the balance spread over 12–24 months. Bank loan assistance is also available for eligible buyers.',
  },
  {
    q: 'What makes Dholera SIR different from other investments?',
    a: 'Dholera is India\'s first and largest Greenfield Smart City — a ₹1 lakh crore government project backed by the DMIC (Delhi-Mumbai Industrial Corridor). It has an international airport, metro rail, industrial zones, and dedicated freight corridors already under construction. It\'s not speculation — it\'s infrastructure-driven growth.',
  },
];

function PlatformFaq() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="pf-faq">
      <div className="container">
        <div className="pf-faq-header">
          <p className="pf-faq-label">Got Questions?</p>
          <h2 className="section-title pf-faq-title">Frequently Asked <span>Questions</span></h2>
          <p className="pf-faq-sub">Everything you need to know before making your investment decision.</p>
        </div>
        <div className="pf-faq-grid">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`pf-faq-item${isOpen ? ' pf-faq-item--open' : ''}`}>
                <button
                  type="button"
                  className="pf-faq-q"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="pf-faq-num">0{i + 1}</span>
                  <span className="pf-faq-qtext">{item.q}</span>
                  <span className="pf-faq-icon">{isOpen ? '−' : '+'}</span>
                </button>
                <div className="pf-faq-a" style={{ maxHeight: isOpen ? '300px' : '0' }}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="pf-faq-cta">
          <p>Still have questions?</p>
          <Link to="/contact" className="btn-primary">Talk to Our Team →</Link>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const isActive = project.status === 'active';
  return (
    <Link to={`/projects/${project.slug}`} className={`project-card${!isActive ? ' project-card--soon' : ''}`}>
      <div
        className="project-card-hero"
        style={project.heroImage ? {
          backgroundImage: `linear-gradient(to top, rgba(10,15,12,0.82) 0%, rgba(10,15,12,0.35) 55%, rgba(10,15,12,0.18) 100%), url('${project.heroImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        } : undefined}
      >
        <span className={`project-card-status${!isActive ? ' project-card-status--soon' : ''}`}>
          {isActive ? 'LIVE' : 'COMING SOON'}
        </span>
        <h3 className="project-card-name">{project.name}</h3>
        <p className="project-card-city">{project.city}, {project.state}</p>
      </div>
      <div className="project-card-body">
        <span className="project-card-type">{project.type}</span>
        {isActive && <p className="project-card-price">Starting {project.hero.stats[1].value}</p>}
        {!isActive && <p className="project-card-price" style={{ color: 'var(--muted)', fontWeight: 600 }}>Launching Soon</p>}
        <ul>
          {project.cardHighlights.map((h) => <li key={h}>{h}</li>)}
        </ul>
        <span className="project-card-cta">{isActive ? 'View Project →' : 'Notify Me →'}</span>
      </div>
    </Link>
  );
}

export function Home() {
  useScrollReveal();

  useEffect(() => {
    document.title = 'BhoomiTree Realty | Smart Real Estate Investment in India';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "BhoomiTree Realty offers curated real estate investment opportunities in India's fastest-growing smart cities. Explore Dholera SIR plots and more.",
      );
    }
    document.body.classList.add('light-theme');
    return () => document.body.classList.remove('light-theme');
  }, []);

  return (
    <>
      <PlatformNavbar />

      <section className="hero">
        <div className="hero-overlay" aria-hidden />
        <div className="container hero-content">
          <p className="hero-tag">BhoomiTree Realty</p>
          <h1>
            India&apos;s Smart <br />
            <span>Real Estate Investments</span>
          </h1>
          <p className="hero-sub">
            We curate high-growth real estate opportunities across India&apos;s smartest cities — government-backed, legally clear, and priced for early investors.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn-primary">Explore Projects</a>
            <a href="#contact" className="btn-outline">Talk to an Expert</a>
          </div>
          <div className="hero-stats">
            <div><strong>2000+</strong><span>Happy Investors</span></div>
            <div><strong>10+</strong><span>Live Projects</span></div>
            <div><strong>100%</strong><span>Legal & Clear</span></div>
            <div><strong>₹10L+</strong><span>Entry Price</span></div>
          </div>
        </div>
      </section>

      <div className="platform-stats-bar">
        <div className="container platform-stats-inner">
          <div className="platform-stat"><strong>2000+</strong><span>Families Invested</span></div>
          <div className="platform-stat"><strong>₹50Cr+</strong><span>Investment Facilitated</span></div>
          <div className="platform-stat"><strong>10+</strong><span>Smart City Projects</span></div>
          <div className="platform-stat"><strong>100%</strong><span>Legal Clearance</span></div>
        </div>
      </div>

      <section id="projects" style={{ padding: '60px 0', background: '#f8f6f1' }}>
        <div className="container">
          <h2 className="section-title">Our Projects</h2>
          <p className="section-sub">Carefully selected investment opportunities with strong growth fundamentals.</p>
          <div className="projects-grid">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#ffffff', padding: '80px 0' }} id="about">
        <div className="container">
          <h2 className="section-title">Why BhoomiTree Realty?</h2>
          <p className="section-sub">We don&apos;t just sell land — we partner with you through every step of your investment journey.</p>
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">🔍</div>
              <h3>Curated Projects Only</h3>
              <p>We only offer projects with government backing, clear title deeds, and strong infrastructure development already underway.</p>
            </div>
            <div className="card">
              <div className="card-icon">💰</div>
              <h3>Direct Developer Pricing</h3>
              <p>No broker markups. You get the best price directly — exactly what the developer charges, nothing more.</p>
            </div>
            <div className="card">
              <div className="card-icon">📋</div>
              <h3>End-to-End Support</h3>
              <p>From site visit to plot registration to resale assistance — our team is with you at every step.</p>
            </div>
            <div className="card">
              <div className="card-icon">🏛️</div>
              <h3>100% Legal & Transparent</h3>
              <p>Every project we offer has full regulatory clearance, NA status, and complete documentation — no surprises.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#f2efe8', padding: '80px 0' }} id="news">
        <div className="container">
          <h2 className="section-title">Latest News</h2>
          <p className="section-sub">Stay updated on India&apos;s real estate and smart city developments.</p>
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

      <PlatformFaq />

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
