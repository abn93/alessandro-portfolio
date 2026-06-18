import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  techs: string[];
  demoLink: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techs,
  demoLink,
  githubLink,
}) => {
  return (
    <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {techs.map((tech) => (
          <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a href={demoLink} className="text-blue-600 hover:underline">View project →</a>
        <a href={githubLink} className="text-blue-600 hover:underline">GitHub →</a>
      </div>
    </div>
  );
};

export default ProjectCard;