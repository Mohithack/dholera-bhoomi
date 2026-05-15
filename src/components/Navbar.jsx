import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo.jsx';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="logo logo-mark" onClick={closeMenu} aria-label="BhoomiTree Realty — Home">
          <BrandLogo variant="nav" />
        </Link>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li>
            <a href="#why" onClick={closeMenu}>
              Why Dholera
            </a>
          </li>
          <li>
            <a href="#plots" onClick={closeMenu}>
              Plots
            </a>
          </li>
          <li>
            <a href="#usp" onClick={closeMenu}>
              Why Us
            </a>
          </li>
          <li>
            <a href="#gallery" onClick={closeMenu}>
              Gallery
            </a>
          </li>
          <li>
            <a href="#amenities" onClick={closeMenu}>
              Amenities
            </a>
          </li>
          <li>
            <a href="#location" onClick={closeMenu}>
              Location
            </a>
          </li>
          <li>
            <Link to="/news" onClick={closeMenu}>
              News
            </Link>
          </li>
          <li>
            <a href="#faq" onClick={closeMenu}>
              FAQ
            </a>
          </li>
          <li>
            <a href="#brochure" onClick={closeMenu}>
              Brochure
            </a>
          </li>
          <li>
            <Link to="/contact" className="btn-nav" onClick={closeMenu}>
              Book Now
            </Link>
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
