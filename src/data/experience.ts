export interface ExperienceRole {
  title: string
  dates: string
  summary?: string
  highlights?: string[]
}

export interface ExperienceEntry {
  company: string
  type?: string
  location?: string
  roles: ExperienceRole[]
}

export const experience: ExperienceEntry[] = [
  {
    company: 'UDig',
    type: 'Full-time',
    location: 'Richmond, VA · Hybrid',
    roles: [
      {
        title: 'Consultant I',
        dates: 'Jul 2026 – Present',
        summary: 'Promoted into a technical ownership and delivery-leadership role.',
        highlights: [
          'Own end-to-end delivery of complex workstreams across React/TypeScript and Java/Spring WebFlux/GraphQL, resolving high-risk defects before release',
          'Lead a summer engineering program — scoped a greenfield proof-of-concept and mentored engineers and designers while standardizing PR-review and CI workflows',
          'Serve as technical liaison between delivery and client stakeholders in fast-moving consulting engagements',
        ],
      },
      {
        title: 'Associate Consultant II',
        dates: 'Sep 2025 – Jul 2026',
        summary:
          'Delivered high-impact, customer-facing software in complex, regulated domains.',
        highlights: [
          'Owned end-to-end payment and order flows (card-not-present and check) across React/TypeScript frontends and Java/GraphQL backends, handling partial payments and failure-prone edge cases in production',
          'Refactored critical frontend and E2E architecture, cutting technical debt in high-risk areas while preserving existing behavior',
          'Translated incomplete requirements into concrete implementations across product, design, and backend teams',
        ],
      },
    ],
  },
  {
    company: 'AdvanceTEC, LLC',
    type: 'Full-time',
    location: 'Midlothian, VA · On-site',
    roles: [
      {
        title: 'Lead Software Engineer',
        dates: 'Jul 2024 – Aug 2025',
        summary:
          'Lead developer building full-stack apps and internal tools that improved operational workflows.',
        highlights: [
          'Built multiple scalable web apps with React, TypeScript, Express, and MongoDB/PostgreSQL',
          'Shipped a real-time fabrication tracking dashboard that improved cross-team visibility and reduced missed goals on the production floor',
          'Designed CI/CD pipelines with GitHub Actions plus Vitest unit/integration and Playwright E2E testing',
        ],
      },
    ],
  },
  {
    company: 'UDig',
    type: 'Internship',
    location: 'Richmond, VA · Hybrid',
    roles: [
      {
        title: 'Software Engineer Intern',
        dates: 'Jun 2023 – Aug 2023',
        summary:
          'Built a full-stack app analyzing the ROI of new technology investments with a four-person team.',
        highlights: [
          'Interactive frontend in React, TypeScript, and Tailwind; GraphQL layer via Apollo and Hasura over PostgreSQL',
          'Delivered a functional MVP with end-to-end form handling and responsive UI in an Agile workflow',
        ],
      },
    ],
  },
]
