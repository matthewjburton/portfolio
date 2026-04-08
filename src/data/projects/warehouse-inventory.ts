import { ProjectType } from '@/components/projects/types'

export const warehouseInventory: ProjectType = {
  id: 13,
  title: 'Warehouse Inventory',
  description:
    'Production inventory system that unified fragmented warehouse tracking into a single platform.',
  link: 'https://github.com/AdvanceTEC-LLC/inventory',
  stack: [
    { label: 'React', iconClass: 'devicon-react-plain' },
    { label: 'TypeScript', iconClass: 'devicon-typescript-plain' },
    { label: 'Node.js', iconClass: 'devicon-nodejs-plain' },
    { label: 'Express', iconClass: 'devicon-express-original' },
    { label: 'Docker', iconClass: 'devicon-docker-plain' },
    { label: 'PostgreSQL', iconClass: 'devicon-postgresql-plain' },
    { label: 'CI/CD', iconClass: 'devicon-githubactions-plain' },
  ],
  year: 2025,
  banner: `${import.meta.env.BASE_URL}images/projects/warehouse-inventory/banner.jpg`,
  purpose: {
    purpose:
      'Unified fragmented warehouse tracking into one platform, reducing errors and improving shipment identification speed.',
    goals: [
      'Real-time shipment tracking with full traceability',
      'Material lookup by project, crate, and shelf location',
      'Prefabrication workflow tracking from materials to assembly',
    ],
    type: 'Professional',
  },
  role: {
    role: 'Solo Developer',
    responsibilities: [
      'Architecture',
      'End to End Development',
      'CI/CD Pipeline',
    ],
  },
  features: {
    features: [
      {
        header: 'Internal Catalog System',
        description:
          'Centralized database of manufacturers, projects, and materials used system-wide.',
        media: `${import.meta.env.BASE_URL}images/projects/warehouse-inventory/catalog.mp4`,
      },
      {
        header: 'Shipment Tracking',
        description:
          'Track incoming and outgoing shipments with who, what, and when metadata.',
        media: `${import.meta.env.BASE_URL}images/projects/warehouse-inventory/shipping.mp4`,
      },
      {
        header: 'Crate & Packaging Logistics',
        description:
          'Group assemblies into crates, relocate to shelving, and stage by project.',
        media: `${import.meta.env.BASE_URL}images/projects/warehouse-inventory/staging.mp4`,
      },
      {
        header: 'Prefabrication Management',
        description:
          'Track prefab status, identify required materials, and link them to assemblies.',
        media: `${import.meta.env.BASE_URL}images/projects/warehouse-inventory/prefab.mp4`,
      },
      {
        header: 'Responsive Form Feedback',
        description:
          'Inline, field-specific error messages with instant validation.',
        media: `${import.meta.env.BASE_URL}images/projects/warehouse-inventory/forms.mp4`,
      },
      {
        header: 'Integrated Form Modals',
        description:
          'Add new entries directly from dropdowns via inline modals, eliminating context switching.',
        media: `${import.meta.env.BASE_URL}images/projects/warehouse-inventory/modals.mp4`,
      },
    ],
  },
  challenges: {
    challenges: [
      {
        challenge: 'Schema changes on a live production database.',
        solution:
          'Versioned migration scripts for incremental changes with zero data loss.',
      },
      {
        challenge: 'Dependent database operations needed atomic consistency.',
        solution:
          'Unit of work pattern via transactions to enforce data integrity.',
      },
      {
        challenge: 'UX had to be better than existing processes to drive adoption.',
        solution:
          'Inline modals and dropdown-integrated actions to minimize friction.',
      },
    ],
  },
  learned: {
    learned: [
      'Test-Driven Development',
      'Unit of Work Pattern',
      'Production Deployment & Migrations',
      'Stakeholder Communication',
    ],
  },
  state: {
    state: 'On Hold',
    lastUpdated: 'Jan 2025',
    conclusion: 'Advised leadership to pivot to a commercial solution after assessing long-term strategy, reducing maintenance risk and in-house dependency.',
  },
}
