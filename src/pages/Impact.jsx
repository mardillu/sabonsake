import React from 'react';

const Impact = () => {
  return (
    <div className="section container" style={{ minHeight: '60vh', marginTop: '100px' }}>
      <div className="section-header">
        <h2 className="section-title">Impact Highlights</h2>
        <div className="section-line"></div>
      </div>
      
      <div className="impact-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginTop: '3rem'
      }}>
        <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '1rem', fontWeight: '700' }}>65%</div>
          <h3>Soil Degradation</h3>
          <p className="text-muted mt-1">Over 65% of soils are degraded across Sub-Saharan Africa. We provide biological restoration.</p>
        </div>

        <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '1rem', fontWeight: '700' }}>2.3kg</div>
          <h3>Carbon Sequestration</h3>
          <p className="text-muted mt-1">A kg of bagasse derived biochar could sequester an estimated 2.3 kg of CO2 equivalents.</p>
        </div>

        <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '1rem', fontWeight: '700' }}>30-75%</div>
          <h3>Yield Increase</h3>
          <p className="text-muted mt-1">Pilots indicate a significant 30-75% yield increase translating to better farmer livelihoods.</p>
        </div>
      </div>
    </div>
  );
};

export default Impact;
