import React from 'react';

const Header: React.FC = () => {
  return (
    <header id="home" className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-gray-50 pt-20">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
        Alessandro Nascimento
      </h1>
      <p className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6">
        Full Stack Developer
      </p>
      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        Passionate developer focused on creating modern, scalable web solutions 
        centered on incredible experiences.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#projects"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-300 transition"
        >
          Get in Touch
        </a>
      </div>
    </header>
  );
};

export default Header;