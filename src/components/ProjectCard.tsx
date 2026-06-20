import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  techs: string[];
  demoLink: string;
  githubLink: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techs,
  demoLink,
  githubLink,
  image,
}) => {
  return (
    <div className="bg-[#1A1A2E] border border-[#7C3AED]/30 rounded-lg p-6 shadow-lg hover:shadow-[#7C3AED]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <img src={image} alt={title} className="w-full h-48 object-cover object-top border-b border-[#7C3AED]/30" />
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {techs.map((tech) => (
          <span
            key={tech}
            className="bg-[#7C3AED]/20 text-[#A78BFA] px-3 py-1 rounded-full text-sm border border-[#7C3AED]/30"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#A78BFA] hover:text-[#7C3AED] hover:underline transition font-medium"
        >
          View project →
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#A78BFA] hover:text-[#7C3AED] hover:underline transition font-medium"
        >
          GitHub →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;