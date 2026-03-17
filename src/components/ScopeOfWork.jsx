import React from 'react';
import './ScopeOfWork.css';

const ScopeOfWork = () => {
  return (
    <section className="section container">
      <div className="section-header">
        <h2 className="section-title">Scope of Project Work</h2>
        <div className="section-line"></div>
      </div>

      <div className="scope-layout">
        <div className="scope-approach glass-panel">
          <h3 className="mb-1 text-center">Our Approach</h3>
          <ul className="approach-list">
            <li>
              <strong>Locally Adaptive</strong>
              <p>We place community, its leadership, history, and culture in context</p>
            </li>
            <li>
              <strong>Research & Tech Driven</strong>
              <p>Guided by regenerative agriculture principles, cutting edge technology and systems</p>
            </li>
            <li>
              <strong>Regenerative</strong>
              <p>Regenerative with our mindsets, farms, processes, and input production</p>
            </li>
            <li>
              <strong>Action</strong>
              <p>Demonstrate tangible impact</p>
            </li>
          </ul>
        </div>

        <div className="scope-services">
          <div className="service-item glass-panel">
            <div className="service-num">1</div>
            <div>
              <h3>Agriculture and Climate Advisory</h3>
              <p>Up-to-date industry information, technical guidance on climate strategy, policy contribution, and pre/post project evaluation.</p>
            </div>
          </div>

          <div className="service-item glass-panel">
            <div className="service-num">2</div>
            <div>
              <h3>Technological Innovation</h3>
              <p>Sustainable Organic Fertilizer & Biochar Production. Fabrication of Farm Machinery including hiring pyrolysis kilns to remediate degraded soils.</p>
            </div>
          </div>

          <div className="service-item glass-panel">
            <div className="service-num">3</div>
            <div>
              <h3>Capacity Building & Training</h3>
              <p>Theory and practical training workshops, curriculum development, establishing soil living labs (demo plots), and mobilizing farmers/youth.</p>
            </div>
          </div>

          <div className="service-item glass-panel">
            <div className="service-num">4</div>
            <div>
              <h3>Project Development</h3>
              <p>Co-create and execute projects, provide technical reports, and create access to alternative livelihoods via carbon market financing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScopeOfWork;
