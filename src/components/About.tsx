import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
      <div className="bg-white shadow-md rounded-lg p-8">
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          I'm a full stack developer focused on building robust, performant 
          applications with clean code. I enjoy turning ideas into real, 
          functional products.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div>
            <span className="block text-sm text-gray-500">Age</span>
            <span className="text-xl font-semibold">26 years</span>
          </div>
          <div>
            <span className="block text-sm text-gray-500">Location</span>
            <span className="text-xl font-semibold">Brazil</span>
          </div>
          <div>
            <span className="block text-sm text-gray-500">Availability</span>
            <span className="text-xl font-semibold text-green-600">Freelance Projects</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;