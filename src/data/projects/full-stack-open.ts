import { ProjectType } from '@/components/projects/types'

export const fullStackOpen: ProjectType = {
  id: 10,
  title: 'Full Stack Open',
  description:
    'A suite of full-stack web apps for the University of Helsinki’s Full Stack Open course on modern web development, DevOps, and testing.',
  link: 'https://github.com/matthewjburton/full-stack-open',
  skills: [
    { label: 'React / TS', iconClass: 'devicon-react-plain' },
    { label: 'Node / Express', iconClass: 'devicon-nodejs-plain' },
    { label: 'PostgreSQL / MongoDB', iconClass: 'devicon-postgresql-plain' },
    { label: 'Docker', iconClass: 'devicon-docker-plain' },
    { label: 'Testing / CI', iconClass: 'devicon-githubactions-plain' },
  ],
  year: 2024,
  purpose: {
    type: 'Personal',
  },
}
