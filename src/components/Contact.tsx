import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">
        Let's Work Together?
      </h2>
      <p className="text-center text-gray-600 text-lg mb-10">
        I'm always open to new challenges and opportunities to create amazing things.
      </p>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
        <a
          href="mailto:alessandro.nascimento@email.com"
          className="text-xl text-blue-600 hover:underline font-medium"
        >
          alessandro.nascimento@email.com
        </a>
        <p className="text-gray-700 mt-3 text-lg">(11) 99999-9999</p>
        <p className="text-gray-500 mt-1">Brazil</p>
        <a
          href="mailto:alessandro.nascimento@email.com"
          className="inline-block mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Contact;