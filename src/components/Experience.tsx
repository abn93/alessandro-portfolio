import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold">Full Stack Developer</h3>
            <p className="text-gray-600">Freelance · 2022 – Present</p>
            <p className="text-gray-700 mt-2">
              Building web applications for clients using React, Node.js, and PostgreSQL.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold">Frontend Developer</h3>
            <p className="text-gray-600">Tech Company · 2020 – 2022</p>
            <p className="text-gray-700 mt-2">
              Developed responsive interfaces with React and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;