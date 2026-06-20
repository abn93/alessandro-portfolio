import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030514] border-t border-[#7C3AED]/30 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/alessandro-brito-26b021198/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#7C3AED] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/abn93"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#7C3AED] transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:abritodev@outlook.com"
            className="text-gray-400 hover:text-[#7C3AED] transition-colors"
            aria-label="Email"
          >
            <MdEmail size={24} />
          </a>
        </div>
        
        <p className="text-gray-500 text-sm text-center">
          &copy; {new Date().getFullYear()} Alessandro Brito Nascimento. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;