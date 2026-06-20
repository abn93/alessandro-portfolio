import React from 'react';

const About: React.FC = () => {
  return (
    <div className="text-center md:text-left">
      <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
      <p className="text-gray-300 text-lg leading-relaxed">
        I'm a full stack developer focused on building robust, performant 
        applications with clean code. I enjoy turning ideas into real, 
        functional products.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-center">
        <div>
          <span className="block text-sm text-[#A78BFA]">Age</span>
          <span className="text-xl font-semibold text-white">33 years</span>
        </div>
        <div>
          <span className="block text-sm text-[#A78BFA]">Location</span>
          <span className="text-xl font-semibold text-white">Ireland</span>
        </div>
        <div>
          <span className="block text-sm text-[#A78BFA]">Availability</span>
          <span className="text-xl font-semibold text-white">Freelance</span>
        </div>
      </div>
    </div>
  );
};

export default About;