import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from '../components/BrandLogo.jsx';
import { NEWS_ARTICLES } from '../data/newsData.js';
import './newsPage.css';

export function NewsPage() {
  useEffect(() => {
    document.title = 'Dholera SIR Latest News | Dholera Bhoomi';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Stay updated with the latest news and developments from Dholera SIR smart city — airport, expressway, Tata semiconductor plant, and more.',
      );
    }
  }, []);

  return (
    <div className="news-page-root">
      <nav className="navbar">
        <div className="nav-inner">
          <Link to="/" className="logo logo-mark" aria-label="BhoomiTree Realty — Home">
            <BrandLogo variant="nav" />
          </Link>
          <Link to="/" className="back-btn">
            ← Back to Main Site
          </Link>
        </div>
      </nav>

      <div className="news-hero">
        <h1>
          Dholera SIR <span>Latest News</span>
        </h1>
        <p>
          Stay updated with the most recent developments, investments, and infrastructure milestones from India&apos;s first Greenfield Smart City.
        </p>
      </div>

      <section className="news-section">
        <div className="container">
          <div className="news-grid">
            {NEWS_ARTICLES.map((article) => (
              <article className="news-card" key={article.title}>
                <div className="card-img" style={{ backgroundImage: `url('${article.image}')` }} />
                <div className="card-body">
                  <div className="card-meta">
                    <span className="card-date">{article.date}</span>
                    <span className="card-tag">{article.tag}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="news-footer">
        <p>
          © 2026 Dholera Bhoomi. All rights reserved. &nbsp;|&nbsp; <Link to="/">Back to Main Site</Link>
        </p>
      </footer>
    </div>
  );
}
