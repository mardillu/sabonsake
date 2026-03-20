import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar glass-nav">
      <div className="container nav-container">
        <div className="logo">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }} onClick={closeMenu}>
            <span className="logo-icon">🌲</span>
            <span className="logo-text">SABON SAKE</span>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle navigation">
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'nav-active' : ''}`}>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/flagships" onClick={closeMenu}>Flagships</NavLink>
          <NavLink to="/solutions" onClick={closeMenu}>Solutions</NavLink>
          <NavLink to="/impact" onClick={closeMenu}>Impact</NavLink>
          
          <div className="nav-actions mobile-only-action">
            <Link to="/contact" className="btn btn-primary" onClick={closeMenu}>Contact Us</Link>
          </div>
        </nav>
        
        <div className="nav-actions desktop-only-action">
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </div>
      
      {/* Overlay to close menu when clicking outside */}
      {isMenuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Navbar;
