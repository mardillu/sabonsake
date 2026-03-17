import React from 'react';
import './Flagships.css';

const Flagships = () => {
  return (
    <section id="flagships" className="section container">
      <div className="section-header">
        <h2 className="section-title">Flagships and Initiatives</h2>
        <div className="section-line"></div>
      </div>

      <div className="flagships-grid">
        <div className="glass-panel flagship-card">
          <div className="flagship-header">
            <h3>Sabon Terra</h3>
            <span className="glass-pill badge">Product Initiative</span>
          </div>
          <p className="italic mb-1">"To Renew the Earth"</p>
          <p>
            Our biochar based organic fertilizer is manufactured by leveraging clean technology to harness 
            the power of biomass waste (found on/off farmlands or factories) converting them into value added products. 
            Simultaneously sequestering stable carbon and promoting sustainable food production.
          </p>
        </div>

        <div className="glass-panel flagship-card">
          <div className="flagship-header">
            <h3>DweeTerra</h3>
            <span className="glass-pill badge">Tech Platform</span>
          </div>
          <p>
            Our tech platform for partners that increases awareness of high-quality land restoration projects, 
            accelerates carbon financing and monitoring of Regenerative Agriculture project activities for 
            climate vulnerable farming communities and climate conscious organizations.
          </p>
        </div>

        <div className="glass-panel flagship-card">
          <div className="flagship-header">
            <h3>Green Nomads in Residence</h3>
            <span className="glass-pill badge">Capacity Building</span>
          </div>
          <p>
            Our training/capacity building initiative where we move from one community to another virtually 
            and/or physically promoting Regenerative Agriculture, sustainable soil health management, its best practices 
            and addressing climate threats. Validating a network of passionate farming communities.
          </p>
        </div>

        <div className="glass-panel flagship-card">
          <div className="flagship-header">
            <h3>Sabon AgriClimate Report</h3>
            <span className="glass-pill badge">Data & Insights</span>
          </div>
          <p>
            This is our data hub and feedback sharing outlet that speaks to various agriculture projects activities, 
            assessments across farming communities and the industry in different report formats, providing insight 
            for better operations, decision making and policy configuration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Flagships;
