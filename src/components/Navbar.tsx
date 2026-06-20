import React, { useState } from 'react';
import {GitHubLight} from 'developer-icons';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about-skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#about-skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#030514] text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <img src="/images/AN.PNG" alt="Alessandro Nascimento" className="h-12 w-auto" />

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-[#625AFB] transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">

            <a href="https://github.com/abn93" target="_blank" rel="noopener noreferrer">
            <GitHubLight size={32} />
            </a>

            <a
              href="/cv.pdf"
              download
              className="hidden md:inline-block bg-[#3D1F6D] hover:bg-[#4A2C7A] px-4 py-2 rounded-lg text-sm font-medium text-white transition shadow-md hover:shadow-lg"
            >
            
              Download CV
            </a>

            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;