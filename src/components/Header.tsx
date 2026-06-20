import React from 'react';

const Header: React.FC = () => {
  return (
    <header id="home" className="flex items-center justify-center min-h-screen px-4 bg-[#030514] pt-20">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Alessandro Nascimento
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mb-6 text-[#9F7BFF]">
            Full Stack Developer
          </p>
          <p className="text-lg max-w-2xl mb-8 text-gray-300">
            Passionate developer focused on creating modern, scalable web solutions
            centered on incredible experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-8 py-3 rounded-lg font-medium transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="bg-[#4C1D95] hover:bg-[#5B21B6] text-white px-8 py-3 rounded-lg font-medium transition"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] max-w-full rounded-full overflow-hidden shadow-xl shadow-[#7C3AED]/30">
            <img
              src="/images/Me.png"
              alt="Alessandro Nascimento"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;