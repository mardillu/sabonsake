import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  
  const fullLine1 = "REGENERATIVE";
  const fullLine2 = "SOIL SOLUTIONS";

  useEffect(() => {
    let isMounted = true;
    let i = 0;
    let j = 0;
    let timeoutId;
    
    const typeLine2 = () => {
      if (!isMounted) return;
      if (j < fullLine2.length) {
        setLine2(fullLine2.substring(0, j + 1));
        j++;
        timeoutId = setTimeout(typeLine2, 80);
      }
    };

    const typeLine1 = () => {
      if (!isMounted) return;
      if (i < fullLine1.length) {
        setLine1(fullLine1.substring(0, i + 1));
        i++;
        timeoutId = setTimeout(typeLine1, 80);
      } else {
        timeoutId = setTimeout(typeLine2, 0); // 0ms pause before second line
      }
    };

    // Start typing after initial load
    timeoutId = setTimeout(typeLine1, 200);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, []);

  // Cursor logic: show cursor on line 1 while typing it. Show cursor on line 2 after line 1 is done.
  const showCursor1 = line1.length < fullLine1.length || (line1.length === fullLine1.length && line2.length === 0);
  const showCursor2 = line1.length === fullLine1.length && line2.length > 0;

  return (
    <section className="hero">
      <div className="hero-bg-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <h1 className="hero-title">
            {line1}{showCursor1 && <span className="cursor-blink">|</span>}
            <br />
            <span className="text-gradient no-wrap">
              {line2}{showCursor2 && <span className="cursor-blink">|</span>}
            </span>
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
