import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-[#030514] scroll-mt-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Let's Work Together?
        </h2>
        <p className="text-center text-gray-400 text-lg mb-10">
          I'm always open to new challenges and opportunities to create amazing things.
        </p>

        <div className="bg-[#1A1A2E] border border-[#7C3AED]/30 rounded-lg p-8 shadow-lg hover:shadow-[#7C3AED]/20 transition-all duration-300">
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4 text-gray-300">
              <MdEmail className="text-[#7C3AED] text-2xl flex-shrink-0" />
              <a
                href="mailto:abritodev@outlook.com"
                className="text-[#A78BFA] hover:text-[#7C3AED] hover:underline transition font-medium"
              >
                abritodev@outlook.com
              </a>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <MdPhone className="text-[#7C3AED] text-2xl flex-shrink-0" />
              <span className="text-gray-300">+353 083 155 6456</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <MdLocationOn className="text-[#7C3AED] text-2xl flex-shrink-0" />
              <span className="text-gray-300">Dublin, Ireland</span>
            </div>
          </div>

          <div className="text-center">
            <a
              href="mailto:abritodev@outlook.com"
              className="inline-block bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-8 py-3 rounded-lg font-medium transition shadow-lg hover:shadow-[#7C3AED]/30"
            >
              Get in Touch
            </a>
          </div>

          <div className="flex justify-center gap-6 mt-8 pt-6 border-t border-[#7C3AED]/20">
            <a
              href="https://www.linkedin.com/in/alessandro-brito-26b021198/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#7C3AED] transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://github.com/abn93"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#7C3AED] transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;