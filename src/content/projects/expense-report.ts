import { ProjectType } from '@/types/content'

export const expenseReport: ProjectType = {
  id: 12,
  title: 'Expense Report',
  description: 'Replaced a manual Excel workflow with a web app now used company-wide for expense submissions.',
  link: 'https://github.com/AdvanceTEC-LLC/expense-report',
  stack: [
    { label: 'React', iconClass: 'devicon-react-plain' },
    { label: 'TypeScript', iconClass: 'devicon-typescript-plain' },
    { label: 'Node.js', iconClass: 'devicon-nodejs-plain' },
    { label: 'Express', iconClass: 'devicon-express-original' },
    { label: 'Docker', iconClass: 'devicon-docker-plain' },
    { label: 'MongoDB', iconClass: 'devicon-mongodb-plain' },
    { label: 'CI/CD', iconClass: 'devicon-githubactions-plain' },
  ],
  year: 2024,
  banner: `${import.meta.env.BASE_URL}images/projects/expense-report/banner.jpg`,
  purpose: {
    purpose:
      'Replaced an Excel-based expense workflow with a secure web app for submitting and approving employee reimbursements.',
    goals: [
      'Dynamic form with real-time validation and PDF generation',
      'Auth0-secured access for internal employees only',
    ],
    type: 'Professional',
  },
  role: {
    role: 'Solo Developer',
    responsibilities: [
      'Full Stack Development',
      'Authentication and Authorization',
      'CI/CD Pipeline and Testing',
      'Infrastructure and Deployment',
    ],
  },
  features: {
    features: [
      {
        header: 'Dynamic Expense Form',
        description:
          'Real-time validation with conditional fields across multiple expense types.',
        media: `${import.meta.env.BASE_URL}images/projects/expense-report/form.mp4`,
      },
      {
        header: 'PDF Report Generation',
        description:
          'Generates downloadable PDF summaries for review and email delivery.',
        media: `${import.meta.env.BASE_URL}images/projects/expense-report/pdf.mp4`,
      },
      {
        header: 'Google Maps Mileage Calculation',
        description:
          'Auto-calculates mileage reimbursement via Google Maps API with manual override.',
        media: `${import.meta.env.BASE_URL}images/projects/expense-report/maps.mp4`,
      },
      {
        header: 'Admin Config Panel',
        description:
          'Admins adjust expense types and reimbursement rates without code changes.',
        media: `${import.meta.env.BASE_URL}images/projects/expense-report/settings.mp4`,
      },
      {
        header: 'Secure Auth with Auth0',
        description:
          'Auth0 restricts access to verified internal employees.',
        media: `${import.meta.env.BASE_URL}images/projects/expense-report/auth.mp4`,
      },
    ],
  },
  challenges: {
    challenges: [
      {
        challenge: 'Teammate dropped out early in development.',
        solution:
          'Took full ownership, refactored core features, and shipped solo.',
      },
      {
        challenge: 'Sensitive data in a browser-accessible app.',
        solution:
          'Auth0 with strict access control on both frontend and backend routes.',
      },
      {
        challenge: 'Maintaining quality during rapid solo development.',
        solution:
          'Full-stack and E2E tests wired into a CI/CD pipeline via GitHub Actions.',
      },
    ],
  },
  learned: {
    learned: [
      'Solo Project Ownership',
      'Google Maps API Integration',
      'Auth0 & Secure Access Control',
      'CI/CD with E2E Testing',
    ],
  },
  state: {
    state: 'Complete',
    conclusion:
      'Live and actively used at AdvanceTEC. Replaced the spreadsheet process and improved accuracy and submission time company-wide.',
  },
}
