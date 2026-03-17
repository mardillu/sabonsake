import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar glass-nav">
      <div className="container nav-container">
        <div className="logo">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            <span className="logo-icon">🌲</span>
            <span className="logo-text">SABON SAKE</span>
          </Link>
        </div>
        <nav className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/flagships">Flagships</NavLink>
          <NavLink to="/solutions">Solutions</NavLink>
          <NavLink to="/impact">Impact</NavLink>
        </nav>
        <div className="nav-actions">
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
