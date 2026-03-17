import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass-panel">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-icon">🌲</span>
            <span className="logo-text">SABON SAKE</span>
          </div>
          <p className="footer-tagline">
            Dedicated to promoting regenerative agriculture, boosting soil health, and enhancing farmer livelihoods in Ghana.
          </p>
        </div>
        
        <div className="footer-links">
          <h4>Contact Us</h4>
          <ul>
            <li><a href="mailto:hello@sabonsake.com">hello@sabonsake.com</a></li>
            <li><a href="mailto:support@sabonsake.com">support@sabonsake.com</a></li>
            <li><a href="https://www.sabonsake.com" target="_blank" rel="noreferrer">www.sabonsake.com</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h4>Operations Office</h4>
          <p>Lead: Audrey S-Darko</p>
          <p>Phone: +233 20 760 3335</p>
          <p>Alt Phone: +233 20 740 5150</p>
          <p>Location: Ghana</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Sabon Sake. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
