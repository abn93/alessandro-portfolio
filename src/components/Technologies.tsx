import {
  HTML5,
  CSS3,
  JavaScript,
  TypeScript,
  React,
  TailwindCSS,
  Django,
  Python,
  Git,
  GitHubLight,
  PostgreSQL,
  Docker,
  Angular,
  PHP
} from 'developer-icons';

const techList = [
  { name: 'HTML', icon: HTML5, color: '#E34F26' },
  { name: 'CSS', icon: CSS3, color: '#1572B6' },
  { name: 'JavaScript', icon: JavaScript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: TypeScript, color: '#3178C6' },
  { name: 'React', icon: React, color: '#61DAFB' },
  { name: 'Angular', icon: Angular, color: '#DD0031' },
  { name: 'Tailwind CSS', icon: TailwindCSS, color: '#06B6D4' },
  { name: 'Django', icon: Django, color: '#092E20' },
  { name: 'Python', icon: Python, color: '#3776AB' },
  { name: 'Git', icon: Git, color: '#F05032' },
  { name: 'GitHub', icon: GitHubLight, color: '#181717' },
  { name: 'PostgreSQL', icon: PostgreSQL, color: '#336791' },
  { name: 'Docker', icon: Docker, color: '#2496ED' },
  { name: 'PHP', icon: PHP, color: '#777BB4' }
];

const Technologies: React.FC = () => {
  return (
    <div className="text-center md:text-left">
      <h2 className="text-3xl font-bold text-white mb-6">Technologies</h2>
      <div className="flex flex-wrap justify-center md:justify-start gap-4">
        {techList.map(({ name, icon: Icon, color }) => (
          <div
            key={name}
            className="flex flex-col items-center bg-[#1A1A2E] px-4 py-3 rounded-lg border border-[#7C3AED]/30 hover:bg-[#7C3AED]/20 transition group w-20"
          >
            <Icon size={36} color={color} />
            <span className="text-xs text-gray-400 mt-1 group-hover:text-[#A78BFA] transition">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;