import { ProjectType } from '@/components/projects/types'

export const warehouseInventory: ProjectType = {
  id: 13,
  title: 'Warehouse Inventory',
  description:
    'Designed and delivered a full-featured inventory management system for warehouse logistics, used in a live production environment.',
  stack: [
    { label: 'React / TS', iconClass: 'devicon-react-plain' },
    { label: 'Node / Express', iconClass: 'devicon-nodejs-plain' },
    { label: 'Docker', iconClass: 'devicon-docker-plain' },
    { label: 'PostgreSQL', iconClass: 'devicon-postgresql-plain' },
    { label: 'Testing / CI', iconClass: 'devicon-githubactions-plain' },
  ],
  year: 2025,
  banner: `${import.meta.env.BASE_URL}images/projects/warehouse-inventory/banner.jpg`,
  purpose: {
    purpose:
      'Designed to unify fragmented warehouse tracking processes into a single platform, resulting in faster shipment identification, reduced errors, and improved employee efficiency.',
    goals: [
      'Support real-time tracking of shipments, including contents, status, and responsible personnel',
      'Empower staff to locate and manage materials by project, crate, and shelf location',
      'Support prefabrication workflows by identifying material needs and tracking assembly progress',
    ],
    type: 'Professional',
  },
  role: {
    role: 'Solo Developer',
    responsibilities: [
      'Architecutre',
      'End to End Development',
      'CI/CD Pipeline',
    ],
  },
  features: {
    features: [
      {
        header: 'Internal Catalog System',
        description:
          'Manage an internal database of manufacturers, projects, and materials for use throughout the system — eliminating redundancy and boosting data integrity.',
        media: `${import.meta.env.BASE_URL}images/projects/warehouse-inventory/catalog.mp4`,
      },
      {
        header: 'Shipment Tracking',
        description:
          'Track incoming and outgoing shipments with rich metadata: who was involved, what was delivered, and when. Ensures traceability and accountability.',
        media: `${import.meta.env.BASE_URL}images/projects/warehouse-inventory/shipping.mp4`,
      },
      {
        header: 'Crate & Packaging Logistics',
        description:
          'Group assemblies into outbound crates, relocate crates to shelving, and stage them by project — improving efficiency in the shipping process.',
        media: `${import.meta.env.BASE_URL}images/projects/warehouse-inventory/staging.mp4`,
      },
      {
        header: 'Prefabrication Management',
        description:
          'Track prefabrication status, identify required materials, and link materials to specific assemblies for a clear production workflow.',
        media: `${import.meta.env.BASE_URL}images/projects/warehouse-inventory/prefab.mp4`,
      },
      {
        header: 'Responsive Form Feedback',
        description:
          'Instant validation feedback with inline, field-specific error messages for a smoother user experience.',
        media: `${import.meta.env.BASE_URL}images/projects/warehouse-inventory/forms.mp4`,
      },
      {
        header: 'Integrated Form Modals',
        description:
          'Allow users to add new entries (e.g., manufacturers, materials) directly from dropdowns via reusable modal components — reducing context switching and streamlining workflows.',
        media: `${import.meta.env.BASE_URL}images/projects/warehouse-inventory/modals.mp4`,
      },
    ],
  },
  challenges: {
    challenges: [
      {
        challenge:
          'Managing growing project complexity during rapid development.',
        solution:
          'Integrated automated unit and integration tests into the deployment pipeline to catch regressions early and maintain system stability.',
      },
      {
        challenge:
          'Safely applying database schema changes in a live environment.',
        solution:
          'Used versioned migration scripts to apply incremental changes while preserving data integrity in production.',
      },
      {
        challenge:
          'Allowing browser based access while restricting authorization to only internal employees.',
        solution:
          'Implemented an Auth0 layer around the both ends of the stack preventing service without a verifiable token.',
      },
      {
        challenge:
          'The user experience must be better than the existing processes in order to convert users.',
        solution:
          'Streamlined user workflows with dropdown-integrated actions that launch reusable form modals, minimizing friction and redundant steps.',
      },
      {
        challenge:
          'Multiple database operations depended on eachother to succeed in order to accurately update the system.',
        solution:
          'Applied the unit of work pattern via transactions to wrap requests and enforce data integrity.',
      },
    ],
  },
  learned: {
    learned: [
      'Test-Driven Development (TDD)',
      'Continuous Integration and Deployment (CI/CD)',
      'Scalable Full Stack Architecture',
      'Unit of Work Pattern',
      'Cloud Hosting & Production Deployment',
      'Agile Project Management',
      'Stakeholder Communication',
    ],
  },
  state: {
    state: 'On Hold',
    conclusion: `After assessing AdvanceTEC’s long-term strategy, I advised leadership to pivot from custom development to a commercial solution. This helped reduce future maintenance risk and eliminated the dependency on in-house software expertise.`,
  },
}
