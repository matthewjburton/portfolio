import { ProjectType } from '@/components/projects/types'

export const expenseReport: ProjectType = {
  id: 12,
  title: 'Expense Report',
  description: `A streamlined web form to submit and generate PDF's of employee expenses.`,
  stack: [
    { label: 'React / TS', iconClass: 'devicon-react-plain' },
    { label: 'Node / Express', iconClass: 'devicon-nodejs-plain' },
    { label: 'Docker', iconClass: 'devicon-docker-plain' },
    { label: 'MongoDB', iconClass: 'devicon-mongodb-plain' },
    { label: 'Testing / CI', iconClass: 'devicon-githubactions-plain' },
  ],
  year: 2024,
  banner: `${import.meta.env.BASE_URL}images/projects/expense-report/banner.jpg`,
  purpose: {
    purpose:
      'Designed to replace the company’s previous Excel-based expense reporting workflow, this tool streamlines the submission and approval process for employee reimbursements. The aim was to create a more intuitive, secure, and scalable experience.',
    goals: [
      'Replace manual spreadsheets with a dynamic web form',
      'Improve clarity, usability, and form feedback',
      'Secure sensitive project data with proper authentication',
      'Generate and store finalized expense reports as PDFs',
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
          'Built with `react-hook-form` and `yup`, the form validates user input in real time and supports multiple expense types with conditional fields.',
        media: `${import.meta.env.BASE_URL}images/projects/expense-report/form.mp4`,
      },
      {
        header: 'PDF Report Generation',
        description:
          'Generates a professional PDF summary of the entered expenses, ready for review, download, and email delivery to management.',
        media: `${import.meta.env.BASE_URL}images/projects/expense-report/pdf.mp4`,
      },
      {
        header: 'Google Maps Mileage Calculation',
        description:
          'Integrates with the Google Maps API to automatically calculate mileage reimbursement between two locations, with optional manual override.',
        media: `${import.meta.env.BASE_URL}images/projects/expense-report/maps.mp4`,
      },
      {
        header: 'Admin Config Panel',
        description:
          'Admins can configure application behavior such as available expense types or reimbursement rates via a dedicated settings page, without code changes.',
        media: `${import.meta.env.BASE_URL}images/projects/expense-report/settings.mp4`,
      },
      {
        header: 'Secure Auth with Auth0',
        description:
          'Auth0 integration ensures only internal employees can view or submit reports, protecting access to confidential project data.',
        media: `${import.meta.env.BASE_URL}images/projects/expense-report/auth.mp4`,
      },
    ],
  },
  challenges: {
    challenges: [
      {
        challenge: 'Migrating users from an unclear Excel-based system.',
        solution:
          'Focused on creating a clean, user-friendly UI with field-specific validation and helpful guidance at every step.',
      },
      {
        challenge:
          'Protecting sensitive project data in a publicly accessible app.',
        solution:
          'Integrated Auth0 with strict access control to enforce authenticated usage across both frontend and backend routes.',
      },
      {
        challenge:
          'Calculating travel mileage reliably while accounting for alternate routes.',
        solution:
          'Used Google Maps API to determine distances, while allowing manual mileage overrides for user flexibility.',
      },
      {
        challenge:
          'Maintaining quality and reliability during rapid development.',
        solution:
          'Wrote full-stack tests, including end-to-end test flows, and wired them into a CI/CD pipeline using GitHub Actions.',
      },
      {
        challenge:
          'Adapting the project after a teammate dropped out early in development.',
        solution:
          'Refactored core features, improved code quality, and rewrote major components to ensure maintainability and consistency.',
      },
    ],
  },
  learned: {
    learned: [
      'React Hook Form + Yup Validation',
      'Google Maps API Integration',
      'MongoDB Schema Design',
      'Secure Authentication with Auth0',
      'CI/CD and End-to-End Testing',
      'Solo Project Ownership',
      'Scalable App Configuration',
    ],
  },
  state: {
    state: 'Complete',
    conclusion:
      'The Expense Report app is live and actively used at AdvanceTEC. It successfully replaced the old spreadsheet process and improved accuracy, usability, and submission time across the company.',
  },
}
