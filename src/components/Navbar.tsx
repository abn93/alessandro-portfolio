import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50 py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Nome */}
        <a href="#home" className="text-xl font-bold text-gray-800">
          Alessandro
        </a>

        {/* Links do menu - versão desktop */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <li><a href="#home" className="hover:text-blue-600 transition">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600 transition">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600 transition">Projects</a></li>
          <li><a href="#technologies" className="hover:text-blue-600 transition">Skills</a></li>
          <li><a href="#experience" className="hover:text-blue-600 transition">Experience</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
        </ul>

        {/* Botão Download CV */}
        <div className="flex items-center gap-4">
          <a
            href="/cv.pdf" // Substitua pelo caminho real do seu CV
            download
            className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
          >
            Download CV
          </a>

          {/* Menu hambúrguer (mobile) - opcional */}
          <button className="md:hidden text-gray-700 text-2xl focus:outline-none">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;