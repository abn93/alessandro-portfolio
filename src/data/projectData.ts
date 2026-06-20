export interface Project {
  id: number;
  title: string;
  description: string;
  techs: string[];
  demoLink: string;
  githubLink: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Club GVS',
    description: 'Official website for Club GVS – a modern platform for members.',
    techs: ['React', 'Django', 'Heroku', 'Tailwind CSS', 'PostgreSQL'],
    demoLink: 'https://clubgvs.com.br/',
    githubLink: '#',
    image: '/images/clubgvs.png',
  },
];