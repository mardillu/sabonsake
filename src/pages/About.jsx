import React from 'react';
import AboutSection from '../components/About';
import VisionMission from '../components/VisionMission';

const About = () => {
  return (
    <>
      {/* Spacer to account for sticky navbar on pages without Hero */}
      <div style={{ height: '100px' }}></div>
      <AboutSection />
      <VisionMission />
    </>
  );
};

export default About;
