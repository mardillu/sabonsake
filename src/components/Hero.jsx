import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <h1 className="hero-title">
            REGENERATIVE <br />
            <span className="text-gradient no-wrap">SOIL SOLUTIONS</span>
          </h1>
          <p className="hero-subtitle glass-panel">
            Transforming local resources into value-added products and regenerative services. 
            Restoring degraded landscapes and building soil capital for a climate-resilient future.
          </p>
          <div className="hero-actions">
            <a href="#solutions" className="btn btn-primary">Explore Sabon Terra</a>
            <a href="#about" className="btn btn-glass">Learn About Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
