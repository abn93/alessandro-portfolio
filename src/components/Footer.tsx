import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 text-center text-gray-500 border-t border-gray-200">
      <p>© {new Date().getFullYear()} Alessandro Nascimento. All rights reserved.</p>
    </footer>
  );
};

export default Footer;