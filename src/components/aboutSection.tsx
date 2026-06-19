import React from 'react';
import About from './About';
import Technologies from './Technologies';

const AboutSection: React.FC = () => {
  return (
    <section id="about-skills" className="py-16 px-4 bg-[#030514]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <About />
        <Technologies />
      </div>
    </section>
  );
};

export default AboutSection;