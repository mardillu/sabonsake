import React from 'react';

const Contact = () => {
  return (
    <div className="section container" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      paddingTop: '120px'
    }}>
      <div className="glass-panel" style={{ padding: '4rem', maxWidth: '600px', width: '100%' }}>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '1rem' }}>Contact Us</h2>
        <p className="text-center text-muted" style={{ marginBottom: '3rem' }}>
          Please feel free to contact us for feedback and further information.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Email</h4>
            <p><a href="mailto:hello@sabonsake.com" className="text-muted">hello@sabonsake.com</a></p>
            <p><a href="mailto:support@sabonsake.com" className="text-muted">support@sabonsake.com</a></p>
          </div>

          <div>
            <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Phone</h4>
            <p className="text-muted">+233 20 760 3335</p>
            <p className="text-muted">+233 20 740 5150</p>
          </div>

          <div>
            <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Operations Office</h4>
            <p className="text-muted">Contact Personnel: Audrey S-Darko (Regenerative Lead)</p>
            <p className="text-muted">Location: Ghana</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
