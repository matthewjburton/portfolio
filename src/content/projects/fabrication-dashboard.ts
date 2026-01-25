import { ProjectType } from '@/components/projects/types'

export const fabricationDashboard: ProjectType = {
  id: 14,
  title: 'Fabrication Dashboard',
  description:
    'A work scheduling tool and display for quickly digesting the weekly fabrication goals.',
  link: 'https://github.com/AdvanceTEC-LLC/fabrication-dashboard',
  stack: [
    { label: 'React', iconClass: 'devicon-react-plain' },
    { label: 'Typescript', iconClass: 'devicon-typescript-plain' },
    { label: 'Tailwind', iconClass: 'devicon-tailwindcss-plain' },
    { label: 'CSS', iconClass: 'devicon-css3-plain' },
  ],
  year: 2025,
  banner: `${import.meta.env.BASE_URL}images/projects/fabrication-dashboard/banner.jpg`,
  purpose: {
    purpose:
      'Built to centralize and visually communicate weekly fabrication goals across production teams. Previously, this information was scattered or communicated verbally, leading to inconsistencies and missed targets.',
    goals: [
      'Display weekly fabrication goals in a centralized, accessible UI',
      'Enable supervisors to assign tasks and update progress in real-time',
      'Support visibility of schedule performance across teams',
      'Encourage alignment between planning and production execution',
    ],
    type: 'Professional',
  },
  role: {
    role: 'Solo Developer',
    responsibilities: [
      'Full Stack Development',
      'UI/UX Design',
      'Data Modeling & Scheduling Logic',
    ],
  },
  features: {
    features: [
      {
        header: 'Task Assignment & Tracking',
        description:
          'Supervisors can assign goals to teams and track completion status live, reducing ambiguity and aligning teams around priorities.',
        media: `${import.meta.env.BASE_URL}images/projects/fabrication-dashboard/tasks.mp4`,
      },
      {
        header: 'Live Status Updates',
        description:
          'Tasks automatically update their status icon relative to their deadline and completion status.',
        media: `${import.meta.env.BASE_URL}images/projects/fabrication-dashboard/status.mp4`,
      },
      {
        header: 'Simple, Familiar Interface',
        description:
          'Users can modify the backend data directly through a Google Sheet and see realtime updates every minute.',
        media: `${import.meta.env.BASE_URL}images/projects/fabrication-dashboard/interface.mp4`,
      },
      {
        header: 'Project Color Customization',
        description:
          'Users can associate any color with a project name using the project sheet and the corresponding hex value.',
        media: `${import.meta.env.BASE_URL}images/projects/fabrication-dashboard/customization.mp4`,
      },
      {
        header: 'Message Marquee',
        description:
          'A revolving list of messages pan across a marquee banner to display motivational and informative content.',
        media: `${import.meta.env.BASE_URL}images/projects/fabrication-dashboard/marquee.mp4`,
      },
    ],
  },
  challenges: {
    challenges: [
      {
        challenge: 'Visualizing work distribution clearly in a fast-paced environment.',
        solution:
          'Used color-coded project cards, icons, and groups to create an intuitive view of work progress and urgency.',
      },
      {
        challenge: 'Linking task data to reporting UI in a user perferred format.',
        solution:
          'I structured Google Sheets with restricted input tables and built a CSV parser to fetch and display the data live in the frontend.',
      },
      {
        challenge: 'Building custom UI compatible with Chromium restrictions.',
        solution:
          `Rewrote Tailwind CSS as a standard style sheet for gradients and colors to support rendering through Screen Cloud's supported browser.`,
      },
      {
        challenge: `Incomplete work from previous weeks is not included in the current work week's scope.`,
        solution:
          `Incomplete tasks from previous weeks are elevated to the top of the current work week's scope and maintain an overdue status.`,
      },
      {
        challenge: `The production environment provided by Screen Cloud does not support image assets in the project files.`,
        solution:
          `I published the required images through a public repository to fetch the required assets through their url instead or their path.`,
      },
      {
        challenge: `Some tasks render beyond the edge of the screen and the display does not support direct interactions.`,
        solution:
          `I sorted the cards by deadline, status, and project, so the highest priority items are always visible.`,
      },
    ],
  },
  learned: {
    learned: [
      'Collaborative UX design with production teams',
      'Real-time UI updates and sync strategies',
      'Google Sheets integrations',
    ],
  },
  state: {
    state: 'Complete',
    conclusion:
      'The dashboard is deployed on displays throughout the fabrication floor and is used daily to guide team workflows. It reduced missed goals and improved visibility across departments.',
  },
}