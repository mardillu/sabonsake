import React from 'react';
import './VisionMission.css';

const VisionMission = () => {
  return (
    <section className="section container">
      <div className="vision-mission-grid">
        <div className="glass-panel vm-card text-center">
          <div className="vm-icon glass-pill">🚀</div>
          <h3>Vision</h3>
          <p>
            Landscapes and farmers are climate resilient, equipped with the tools, resources to navigate 
            the climate crisis and increase agricultural productivity and nutrient dense food.
          </p>
        </div>

        <div className="glass-panel vm-card text-center">
          <div className="vm-icon glass-pill">🎯</div>
          <h3>Mission</h3>
          <p>
            To accelerate the transition from conventional farming into regenerative farming with ease, 
            restoring degrading landscapes into thriving ecosystems and transforming mindsets on climate.
          </p>
        </div>

        <div className="glass-panel vm-card text-center">
          <div className="vm-icon glass-pill">🤝</div>
          <h3>Core Values</h3>
          <ul className="values-list">
            <li><strong>Regeneration:</strong> Teaching and applying regen farming practices.</li>
            <li><strong>Resilience:</strong> Providing climate resilient tech and products.</li>
            <li><strong>Thrive:</strong> Creating thriving farming livelihoods.</li>
            <li><strong>Community:</strong> Fulfilling relationship-driven partnerships.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
