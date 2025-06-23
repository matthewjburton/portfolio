import { ProjectType } from '@/components/projects/types'

export const fullStackOpen: ProjectType = {
  id: 10,
  title: 'Full Stack Open',
  description:
    'A suite of full-stack web apps for the University of Helsinki’s Full Stack Open course on modern web development, DevOps, and testing.',
  link: 'https://github.com/matthewjburton/full-stack-open',
  stack: [
    { label: 'React / TS', iconClass: 'devicon-react-plain' },
    { label: 'Node / Express', iconClass: 'devicon-nodejs-plain' },
    { label: 'PostgreSQL / MongoDB', iconClass: 'devicon-postgresql-plain' },
    { label: 'Docker', iconClass: 'devicon-docker-plain' },
    { label: 'Testing / CI', iconClass: 'devicon-githubactions-plain' },
  ],
  year: 2024,
  banner: '/images/projects/full-stack-open/banner.png',
  purpose: {
    type: 'Personal',
    purpose:
      'Completed as a self-guided education project, this course gave me foundational experience in modern full-stack web development using JavaScript, TypeScript, and multiple backend stacks.',
    goals: [
      'Master both MERN and PERN stacks through hands-on projects',
      'Learn to build, test, and deploy real-world full-stack applications',
      'Understand modern DevOps practices including CI/CD and containerization',
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
          'Built responsive and interactive frontends using React, Redux, React Query, TypeScript, and custom form validation libraries like Zod and Yup.',
        media: '/images/projects/full-stack-open/react.mp4',
      },
      {
        header: 'Robust Backend APIs',
        description:
          'Developed scalable REST and GraphQL APIs using Node, Express, and integrated PostgreSQL or MongoDB for persistence, with support for middleware, authentication, and error handling.',
        media: '/images/projects/full-stack-open/rest.png',
      },
      {
        header: 'Authentication & Security',
        description:
          'Implemented secure authentication with JWT, bcrypt password hashing, and protected routes for role-based access control.',
        media: '/images/projects/full-stack-open/auth.png',
      },
      {
        header: 'CI/CD & Containerization',
        description:
          'Configured GitHub Actions for automated testing and deployment. Used Docker to containerize applications and manage development environments.',
        media: '/images/projects/full-stack-open/devops.png',
      },
      {
        header: 'Comprehensive Testing',
        description:
          'Practiced test-driven development with unit, integration, and end-to-end testing using tools like Jest, Cypress, and Supertest.',
        media: '/images/projects/full-stack-open/tests.png',
      },
    ],
  },
  challenges: {
    challenges: [
      {
        challenge:
          'Learning and switching between both PERN (PostgreSQL) and MERN (MongoDB) stacks.',
        solution:
          'Created multiple full-stack projects with both technologies and studied key architectural differences and similarities.',
      },
      {
        challenge: 'Maintaining code quality across frontend and backend.',
        solution:
          'Applied consistent typing with TypeScript, schema validation with Zod/Yup, and modular code architecture with services, routes, and controllers.',
      },
      {
        challenge:
          'Managing application complexity while introducing new tech (e.g., GraphQL, container orchestration).',
        solution:
          'Iteratively added tools and patterns from the course into real project scenarios, applying DevOps concepts incrementally.',
      },
    ],
  },
  learned: {
    learned: [
      'Full-Stack Development',
      'React',
      'Redux',
      'React Query',
      'TypeScript',
      'Node.js',
      'Express',
      'REST APIs',
      'MongoDB',
      'PostgreSQL',
      'Database Migrations',
      'CI/CD Pipelines',
      'Docker',
      'Automated Testing',
    ],
  },
  state: {
    state: 'Complete',
    conclusion:
      'The Full Stack Open course was pivotal in helping me solidify my understanding of full-stack development. It prepared me to confidently build, test, and deploy professional-grade web applications.',
  },
}
