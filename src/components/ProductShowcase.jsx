import React from 'react';
import './ProductShowcase.css';

const ProductShowcase = () => {
  return (
    <section id="solutions" className="section container showcase-section">
      <div className="section-header">
        <h2 className="section-title">Sabon Terra</h2>
        <div className="section-line"></div>
        <p className="mt-1 text-muted text-center" style={{maxWidth: '600px', margin: '1rem auto'}}>
          Natural Soil Booster. Plant-derived Biochar-based organic fertilizer (NPK) and Raw Biochar in 5kg, 10kg, and 25kg.
        </p>
      </div>

      <div className="product-layout">
        <div className="glass-panel animate-fade-in product-image" style={{ overflow: 'hidden', padding: 0 }}>
             <img src="https://images.unsplash.com/photo-1589139268798-232537cd88c0?q=80&w=800&auto=format&fit=crop" 
                  alt="Sabon Terra Product packaging placeholder" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        <div className="showcase-grid">
          <div className="glass-panel showcase-card">
            <div className="card-icon">🌿</div>
            <h3>Application</h3>
            <p>
              Basal application at soil preparation stage. Apply as top dressing during growth stage or combined with other soil inputs.
            </p>
          </div>

          <div className="glass-panel showcase-card">
            <div className="card-icon">⚙️</div>
            <h3>Features</h3>
            <ul className="check-list">
              <li>Sequesters/fixes stable carbon in the ground</li>
              <li>Builds drought resilience</li>
              <li>Plant-derived biochar</li>
              <li>Good for poor soils</li>
            </ul>
          </div>

          <div className="glass-panel showcase-card">
            <div className="card-icon">✨</div>
            <h3>Benefits</h3>
            <ul className="check-list">
              <li>1kg biochar sequesters ~2.3kg CO2 eq.</li>
              <li>Pilots indicate 30-75% yield increase</li>
              <li>Improves Soil Ph and reclaims acidic soil</li>
              <li>Contains Major and Minor nutrients</li>
            </ul>
          </div>

          <div className="glass-panel showcase-card highlight-card">
            <div className="card-icon">🌍</div>
            <h3>Impact</h3>
            <ul className="check-list">
              <li>Repurpose biomass waste practicing circular operations</li>
              <li>Improved soil quality & moisture retention</li>
              <li>Nutrient dense & less contaminated food produce</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
