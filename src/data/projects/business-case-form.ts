import { ProjectType } from '@/components/projects/types'

export const businessCaseForm: ProjectType = {
  id: 2,
  title: 'Business Case Form',
  description:
    'Investment analysis tool that digitized a manual evaluation process and launched to generate client leads.',
  link: 'https://udig-business-case-form-test.netlify.app/',
  stack: [
    { label: 'React / TS', iconClass: 'devicon-react-plain' },
    { label: 'GraphQL', iconClass: 'devicon-graphql-plain' },
    { label: 'PostgreSQL', iconClass: 'devicon-postgresql-plain' },
    { label: 'Figma', iconClass: 'devicon-figma-plain' },
  ],
  year: 2023,
  banner: `${import.meta.env.BASE_URL}images/projects/business-case-form/banner.png`,
  purpose: {
    purpose:
      'Digitized a manual investment evaluation process at a consulting firm to streamline data collection and ensure consistent formatting for analysis.',
    goals: [
      'Replace manual workflows with a responsive, validated web form',
      'Visualize valuation metrics with interactive charts and PDF export',
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
          'Captures client details upfront so UDig can follow up on business strategies.',
        media: `${import.meta.env.BASE_URL}images/projects/business-case-form/user-info.png`,
      },
      {
        header: 'Intelligent Navigation',
        description:
          'Step-by-step progression ensures data completeness before advancing.',
        media: `${import.meta.env.BASE_URL}images/projects/business-case-form/navigation.mp4`,
      },
      {
        header: 'Dynamic Forms',
        description:
          'Fields adjust in real-time based on input, showing only relevant sections.',
        media: `${import.meta.env.BASE_URL}images/projects/business-case-form/forms.mp4`,
      },
      {
        header: 'Data Visualization',
        description:
          'Dashboard of key financial metrics and charts with PDF export.',
        media: `${import.meta.env.BASE_URL}images/projects/business-case-form/data.mp4`,
      },
      {
        header: 'Session-Based URLs',
        description:
          'Shareable URLs let multiple stakeholders collaborate on the same submission.',
        media: `${import.meta.env.BASE_URL}images/projects/business-case-form/sessions.mp4`,
      },
    ],
  },
  challenges: {
    challenges: [
      {
        challenge: 'Complex form content needed to feel simple.',
        solution:
          'Visual hierarchy and card layouts to group related elements and reduce cognitive load.',
      },
      {
        challenge: 'Multiple stakeholders needed to collaborate on the same submission.',
        solution:
          'Session-based shareable URLs that persist form data server-side.',
      },
    ],
  },
  learned: {
    learned: [
      'React & GraphQL',
      'Dynamic Forms',
      'Frontend Architecture',
      'Design Collaboration with Figma',
    ],
  },
  state: {
    state: 'Complete',
    conclusion:
      'Launched publicly at the end of the UDig internship and began generating client leads for strategic consulting.',
  },
}
