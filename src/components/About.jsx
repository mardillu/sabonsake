import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section container">
      <div className="section-header">
        <h2 className="section-title">Profile of Sabon Sake</h2>
        <div className="section-line"></div>
      </div>

      <div className="about-layout mb-4">
        <div className="about-image-wrapper animate-fade-in glass-panel" style={{ overflow: 'hidden', padding: 0 }}>
             <img src="https://images.unsplash.com/photo-1592982537447-6f2ab0c2e915?q=80&w=1200&auto=format&fit=crop" 
                  alt="Regenerative agriculture placeholder" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        
        <div className="glass-panel about-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h3>Sabon Sake meaning <span className="highlight-text italic">"To transform or make something new again"</span> in Hausa</h3>
          <p>
            Sabon Sake is a climate tech organization at the intersection of Regenerative Agriculture and Carbon Finance. 
            We transform local resources into value-added products and regenerative services whilst transforming 
            the mindsets and livelihoods of the communities and organizations we partner with. 
          </p>
          <p>
            As a project developer, we deliver high impact carbon reduction/removal projects, 
            positively impacting the environment, and placing jewels (<em>Dweete</em>) in the hands of farmers 
            and the earth (<em>Terra</em>).
          </p>
          <div className="about-tags mt-1">
            <span className="glass-pill tag">Locally Adaptive</span>
            <span className="glass-pill tag">Research Driven</span>
            <span className="glass-pill tag">Collaborative</span>
          </div>
        </div>
      </div>

      <div className="about-layout">
        <div className="glass-panel about-card animate-fade-in" style={{ animationDelay: '0.2s', order: 2 }}>
          <h3>Meet the Chief Regenerative Officer</h3>
          <div className="profile-content">
            <div className="profile-text">
              <h4>Audrey S-Darko</h4>
              <p className="text-muted text-sm mb-1">Climate tech entrepreneur</p>
              <p>
                Passionate about food security and rural community development. Audrey accelerates the transition 
                towards climate resilient farming via Sabon Terra (regenerative soil solution) and DweeTerra 
                (financing tool). She coaches startups and speaks internationally on youth, agriculture, and climate.
              </p>
            </div>
          </div>
        </div>
        
        <div className="about-image-wrapper animate-fade-in glass-panel" style={{ overflow: 'hidden', padding: 0, order: 1 }}>
             <img src="https://images.unsplash.com/photo-1581579186913-461d3e23c8a5?q=80&w=800&auto=format&fit=crop" 
                  alt="Audrey S-Darko placeholder" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </section>
  );
};

export default About;
