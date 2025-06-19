import { ProjectType } from '@/components/projects/types'

export const businessCaseForm: ProjectType = {
  id: 2,
  title: 'Business Case Form',
  description:
    'A dynamic form system for analyzing investment opportunities, with real-time data validation, custom UI components, and PDF export capabilities.',
  link: 'https://udig-business-case-form-test.netlify.app/',
  skills: [
    { label: 'React / TS', iconClass: 'devicon-react-plain' },
    { label: 'GraphQL', iconClass: 'devicon-graphql-plain' },
    { label: 'PostgreSQL', iconClass: 'devicon-postgresql-plain' },
    { label: 'Figma', iconClass: 'devicon-figma-plain' },
  ],
  year: 2023,
  banner: '/images/projects/business-case-form/banner.png',
  purpose: {
    purpose:
      'Built to support internal decision-making at a consulting firm, the Business Case Form digitizes a formerly manual process of evaluating investments. The goal was to streamline data collection, improve accuracy, and ensure consistent formatting for downstream analysis and presentation.',
    goals: [
      'Create a user-friendly, responsive web form',
      'Visualize valuation metrics with interactive charts',
    ],
    type: 'Professional',
  },
  role: {
    role: 'Team of 4',
    responsibilities: [
      'Front End Development',
      'Responsive Layouts',
      'Database Schema Design',
    ],
  },
  features: {
    features: [
      {
        header: 'User Information Collection',
        description:
          'Collects user information at the beginning of the process, allowing UDig to follow up with prospective clients on their business strategies.',
        media: '/images/projects/business-case-form/user-info.png',
      },
      {
        header: 'Intelligent Navigation',
        description:
          'Form sections are grouped into logical steps. Users must complete the current step to proceed, improving data completeness and flow.',
        media: '/images/projects/business-case-form/navigation.mp4',
      },
      {
        header: 'Dynamic Forms',
        description:
          'Form fields adjust in real-time based on user input, ensuring only relevant sections and inputs are shown.',
        media: '/images/projects/business-case-form/forms.mp4',
      },
      {
        header: 'Data Visualization',
        description:
          'A final dashboard presents key financial metrics and charts, with export-to-PDF functionality for easy sharing.',
        media: '/images/projects/business-case-form/data.mp4',
      },
      {
        header: 'Session-Based URLs',
        description:
          'Generates shareable session URLs so multiple users can collaboratively view and evaluate the same business strategy.',
        media: '/images/projects/business-case-form/sessions.mp4',
      },
    ],
  },
  challenges: {
    challenges: [
      {
        challenge: 'Presenting complex form content in a digestible structure.',
        solution:
          'Used visual hierarchy and card layouts to group related elements clearly and reduce cognitive load.',
      },
      {
        challenge: 'Managing dynamic form fields and user data cleanly.',
        solution:
          'Leveraged `react-hook-form` to handle dynamic field arrays, conditional logic, and schema validation with minimal boilerplate.',
      },
      {
        challenge:
          'Allowing multiple stakeholders to collaborate on the same business case submission.',
        solution:
          'Implemented session-based, shareable URLs that persist form data server-side, enabling others to access and continue editing the same session without duplicating input.',
      },
    ],
  },
  learned: {
    learned: [
      'React',
      'GraphQL',
      'PostgreSQL',
      'Dynamic Forms',
      'Frontend Architecture',
      'Agile Development',
      'Design Collaboration with Figma',
    ],
  },
  state: {
    state: 'Complete',
    conclusion:
      'At the conclusion of our internship at UDig, this project launched publicly and began generating leads from clients seeking strategic consulting — validating both the product and its impact.',
  },
}
