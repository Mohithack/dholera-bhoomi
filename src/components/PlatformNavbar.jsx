import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BrandLogo } from './BrandLogo.jsx';

export function PlatformNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const closeMenu = () => setMenuOpen(false);

  function goToContact(e) {
    e.preventDefault();
    closeMenu();
    if (location.pathname === '/contact') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/contact');
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container nav-inner">
        <Link to="/" className="logo logo-mark" onClick={closeMenu} aria-label="BhoomiTree Realty — Home">
          <BrandLogo variant="nav" />
        </Link>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#about" onClick={closeMenu}>About Us</a></li>
          <li><Link to="/news" onClick={closeMenu}>News</Link></li>
          <li><a href="#faq" onClick={closeMenu}>FAQ</a></li>
          <li>
            <a href="/contact" className="btn-nav" onClick={goToContact}>Contact Us</a>
          </li>
        </ul>
        <button
          type="button"
          className="hamburger"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          &#9776;
        </button>
      </div>
    </nav>
  );
}
