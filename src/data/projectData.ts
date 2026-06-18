export interface Project {
  id: number;
  title: string;
  description: string;
  techs: string[];
  demoLink: string;
  githubLink: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Dashboard Analytics',
    description: 'Responsive dashboard with metrics, charts, and dynamic filters.',
    techs: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    demoLink: '#',
    githubLink: '#',
  },
  {
    id: 2,
    title: 'Task Manager',
    description: 'Task management application with authentication and categories.',
    techs: ['React', 'Node.js', 'MongoDB'],
    demoLink: '#',
    githubLink: '#',
  },
  {
    id: 3,
    title: 'E-Commerce',
    description: 'Complete online store with cart, payments, and admin panel.',
    techs: ['Next.js', 'Stripe', 'PostgreSQL'],
    demoLink: '#',
    githubLink: '#',
  },
];