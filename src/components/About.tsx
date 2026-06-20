import React from 'react';

const About: React.FC = () => {
  return (
    <div className="text-center md:text-left">
      <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
      <p className="text-gray-300 text-lg leading-relaxed">
        I'm a full stack developer with <strong className="text-white">3+ years of experience</strong> building scalable web applications using React, Django, and C#.
        I delivered a <strong className="text-white">gamified platform</strong> end-to-end in just 1 month, and optimized data architectures to reduce response time by <strong className="text-white">30%</strong>.
        I enjoy solving real-world problems with clean, efficient code and continuously learning new technologies.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-center">
        <div>
          <span className="block text-sm text-[#A78BFA]">Age</span>
          <span className="text-xl font-semibold text-white">33 years</span>
        </div>
        <div>
          <span className="block text-sm text-[#A78BFA]">Location</span>
          <span className="text-xl font-semibold text-white">Dublin, Ireland</span>
        </div>
        <div>
          <span className="block text-sm text-[#A78BFA]">Availability</span>
          <span className="text-xl font-semibold text-white">Open to work</span>
        </div>
      </div>
    </div>
  );
};

export default About;