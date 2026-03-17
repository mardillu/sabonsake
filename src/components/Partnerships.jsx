import React from 'react';
import './Partnerships.css';

const Partnerships = () => {
  return (
    <section className="section container">
      <div className="section-header">
        <h2 className="section-title">Areas for Potential Partnership</h2>
        <div className="section-line"></div>
        <p className="mt-1 text-muted text-center" style={{maxWidth: '700px', margin: '1rem auto'}}>
          What role we can play to support farmers, climate vulnerable farming communities, and restoration projects.
        </p>
      </div>

      <div className="partnerships-grid">
        <div className="partner-card glass-panel text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="partner-icon">🧑‍🏫</div>
          <h3>Theory & Practical Training</h3>
          <p>Workshops and courses on Regenerative Agriculture (Carbon Farming), Biochar production as green business, Biomass Waste Management, and Carbon Market Opportunities.</p>
        </div>

        <div className="partner-card glass-panel text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="partner-icon">🌱</div>
          <h3>Soil Restoration Projects</h3>
          <p>Setting up soil living labs, supplying locally produced organic soil inputs (biochar), and providing access to mobile clean technology for vulnerable communities.</p>
        </div>

        <div className="partner-card glass-panel text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="partner-icon">📊</div>
          <h3>Soil Health Assessments</h3>
          <p>Providing soil health monitoring and impact assessment services on agriculture projects to enhance food security and promote carbon farming.</p>
        </div>

        <div className="partner-card glass-panel text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="partner-icon">💡</div>
          <h3>Climate Change Advisory</h3>
          <p>Interlinkages with agriculture production and climate change, understanding market demand, and tracking the impact of environmental conditions on the agriculture sector.</p>
        </div>

        <div className="partner-card glass-panel text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="partner-icon">🔍</div>
          <h3>Monitoring & Evaluating</h3>
          <p>Providing M&E support to agriculture and carbon projects to assess the impact on food security, climate, and income in vulnerable communities.</p>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
