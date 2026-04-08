import { ProjectType } from '@/components/projects/types'

export const fullStackOpen: ProjectType = {
  id: 10,
  title: 'Full Stack Open',
  description:
    'Full-stack web apps covering MERN/PERN stacks, CI/CD, Docker, and testing through Helsinki\'s Full Stack Open.',
  link: 'https://github.com/matthewjburton/full-stack-open',
  stack: [
    { label: 'React', iconClass: 'devicon-react-plain' },
    { label: 'TypeScript', iconClass: 'devicon-typescript-plain' },
    { label: 'Node.js', iconClass: 'devicon-nodejs-plain' },
    { label: 'Express', iconClass: 'devicon-express-original' },
    { label: 'PostgreSQL', iconClass: 'devicon-postgresql-plain' },
    { label: 'MongoDB', iconClass: 'devicon-mongodb-plain' },
    { label: 'Docker', iconClass: 'devicon-docker-plain' },
    { label: 'CI/CD', iconClass: 'devicon-githubactions-plain' },
  ],
  year: 2024,
  banner: `${import.meta.env.BASE_URL}images/projects/full-stack-open/banner.png`,
  purpose: {
    type: 'Personal',
    purpose:
      'Self-guided deep dive into modern full-stack development across both MERN and PERN stacks.',
    goals: [
      'Build, test, and deploy full-stack applications end-to-end',
      'Apply CI/CD, Docker, and automated testing in real projects',
    ],
  },
  role: {
    role: 'Full-Stack Developer',
    responsibilities: [
      'Frontend',
      'Backend API',
      'Authentication Flows',
      'Validation',
      'DevOps',
    ],
  },
  features: {
    features: [
      {
        header: 'Modern Frontend Stack',
        description:
          'React, Redux, React Query, and TypeScript with Zod/Yup validation.',
        media: `${import.meta.env.BASE_URL}images/projects/full-stack-open/react.mp4`,
      },
      {
        header: 'Robust Backend APIs',
        description:
          'REST and GraphQL APIs with Node/Express, PostgreSQL, and MongoDB.',
        media: `${import.meta.env.BASE_URL}images/projects/full-stack-open/rest.png`,
      },
      {
        header: 'Authentication & Security',
        description:
          'JWT, bcrypt hashing, and role-based access control.',
        media: `${import.meta.env.BASE_URL}images/projects/full-stack-open/auth.png`,
      },
      {
        header: 'CI/CD & Containerization',
        description:
          'GitHub Actions pipelines with Docker-based environments.',
        media: `${import.meta.env.BASE_URL}images/projects/full-stack-open/devops.png`,
      },
      {
        header: 'Comprehensive Testing',
        description:
          'Unit, integration, and E2E testing with Jest, Cypress, and Supertest.',
        media: `${import.meta.env.BASE_URL}images/projects/full-stack-open/tests.png`,
      },
    ],
  },
  challenges: {
    challenges: [
      {
        challenge: 'Switching between PERN and MERN stacks across projects.',
        solution:
          'Built parallel projects in both stacks to internalize architectural differences.',
      },
      {
        challenge: 'Layering new tech (GraphQL, Docker) without losing code quality.',
        solution:
          'Incremental adoption with consistent TypeScript typing and schema validation throughout.',
      },
    ],
  },
  learned: {
    learned: [
      'Full-Stack Development (MERN & PERN)',
      'CI/CD & Docker',
      'Automated Testing',
      'Database Migrations',
    ],
  },
  state: {
    state: 'Complete',
    conclusion:
      'Built the foundation I used to ship production apps at AdvanceTEC.',
  },
}
