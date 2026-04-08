import { ProjectType } from '@/components/projects/types'

export const fabricationDashboard: ProjectType = {
  id: 14,
  title: 'Fabrication Dashboard',
  description:
    'Floor-mounted display used daily across departments to track weekly fabrication goals.',
  link: 'https://github.com/AdvanceTEC-LLC/fabrication-dashboard',
  stack: [
    { label: 'React', iconClass: 'devicon-react-plain' },
    { label: 'TypeScript', iconClass: 'devicon-typescript-plain' },
  ],
  year: 2025,
  banner: `${import.meta.env.BASE_URL}images/projects/fabrication-dashboard/banner.jpg`,
  purpose: {
    purpose:
      'Centralized weekly fabrication goals that were previously scattered or communicated verbally, causing missed targets.',
    goals: [
      'Centralized, real-time view of weekly goals and progress',
      'Supervisor task assignment with live status tracking',
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
          'Assign goals to teams and track completion live.',
        media: `${import.meta.env.BASE_URL}images/projects/fabrication-dashboard/tasks.mp4`,
      },
      {
        header: 'Live Status Updates',
        description:
          'Status icons update automatically relative to deadlines and completion.',
        media: `${import.meta.env.BASE_URL}images/projects/fabrication-dashboard/status.mp4`,
      },
      {
        header: 'Simple, Familiar Interface',
        description:
          'Google Sheets as the backend with real-time updates every minute.',
        media: `${import.meta.env.BASE_URL}images/projects/fabrication-dashboard/interface.mp4`,
      },
      {
        header: 'Project Color Customization',
        description:
          'Associate any hex color with a project name via the config sheet.',
        media: `${import.meta.env.BASE_URL}images/projects/fabrication-dashboard/customization.mp4`,
      },
      {
        header: 'Message Marquee',
        description:
          'Scrolling banner for announcements and motivational messages.',
        media: `${import.meta.env.BASE_URL}images/projects/fabrication-dashboard/marquee.mp4`,
      },
    ],
  },
  challenges: {
    challenges: [
      {
        challenge: 'Google Sheets data needed to drive a live UI.',
        solution:
          'Built a CSV parser that fetches and displays sheet data in real-time.',
      },
      {
        challenge: 'Screen Cloud Chromium restrictions broke Tailwind rendering.',
        solution:
          'Rewrote affected styles as standard CSS for browser compatibility.',
      },
      {
        challenge: 'Non-interactive display with tasks overflowing the screen.',
        solution:
          'Priority sorting by deadline, status, and project keeps critical items visible.',
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
      'Deployed on floor displays and used daily. Reduced missed goals and improved cross-department visibility.',
  },
}