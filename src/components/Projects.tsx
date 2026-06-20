import React from 'react';
import { projects } from '../data/projectData';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    <div className="bg-[#030514]">
      
      <section id="projects" className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </div>

  );
};

export default Projects;