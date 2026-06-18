import React from 'react';

const techList = [
  'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 
  'Next.js', 'Node.js', 'Tailwind CSS', 'Git', 'GitHub', 
  'PostgreSQL', 'Docker'
];

const Technologies: React.FC = () => {
  return (
    <section id="technologies" className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Technologies</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {techList.map((tech) => (
            <span
              key={tech}
              className="bg-white px-5 py-2 rounded-full shadow-sm border border-gray-200 text-gray-800 font-medium text-sm hover:shadow-md transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;