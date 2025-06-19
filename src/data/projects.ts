import { ProjectType } from '@/components/projects/types'

export const projects: ProjectType[] = [
  {
    id: 1,
    title: 'Comfort Airlines',
    description:
      'Simulates realistic airline operations including route planning, cost analysis, and profitability modeling.',
    link: 'https://github.com/matthewjburton/comfort-airlines',
    skills: [
      { label: 'Python', iconClass: 'devicon-python-plain' },
      { label: 'MariaDB', iconClass: 'devicon-mariadb-plain' },
      { label: 'Docker', iconClass: 'devicon-docker-plain' },
    ],
    year: 2024,
    purpose: {
      type: 'Academic',
    },
  },
  {
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
    purpose: {
      type: 'Professional',
    },
  },
  {
    id: 3,
    title: 'Fine Dining Bot',
    description:
      'Python-based automation tool using Selenium to navigate login flows, check reservation availability, and auto-book tables. Developed in response to limited reservation windows and high demand.',
    link: 'https://github.com/matthewjburton/reservation-bot',
    skills: [
      { label: 'Python', iconClass: 'devicon-python-plain' },
      { label: 'Selenium', iconClass: 'devicon-selenium-plain' },
    ],
    year: 2024,
    purpose: {
      type: 'Personal',
    },
  },
  {
    id: 4,
    title: 'Blackjack',
    description: 'A CLI blackjack game.',
    link: 'https://github.com/matthewjburton/blackjack',
    skills: [{ label: 'C++', iconClass: 'devicon-cplusplus-plain' }],
    year: 2022,
    purpose: {
      type: 'Personal',
    },
  },
  {
    id: 5,
    title: 'Skate Park Finder',
    description:
      'Android app developed in Java using the Google Maps API and device GPS to display skate parks based on proximity. Focused on location services, UI responsiveness, and real-world testing.',
    link: 'https://github.com/matthewjburton/skate-park-finder',
    skills: [{ label: 'Java / Android', iconClass: 'devicon-java-plain' }],
    year: 2022,
    purpose: {
      type: 'Academic',
    },
  },
  {
    id: 6,
    title: 'Endless Breakout',
    description:
      'An infinite arcade brick breaker with power-ups, dynamic difficulty scaling, and a retro aesthetic built in Unity.',
    link: 'https://matt-burton.itch.io/endless-breakout',
    skills: [
      { label: 'Unity', iconClass: 'devicon-unity-plain' },
      { label: 'C#', iconClass: 'devicon-csharp-plain' },
      { label: 'Illustrator', iconClass: 'devicon-illustrator-plain' },
    ],
    year: 2023,
    purpose: {
      type: 'Personal',
    },
  },
  {
    id: 7,
    title: 'Messaging App',
    description: 'Send messages between clients across a server.',
    link: 'https://github.com/matthewjburton/network-app',
    skills: [{ label: 'C', iconClass: 'devicon-c-plain' }],
    year: 2023,
    purpose: {
      type: 'Academic',
    },
  },
  {
    id: 8,
    title: 'Super Massive',
    description:
      'Developed core gameplay, UI, and polish in under 48 hours using Unity. Placed top 7% for enjoyment out of 7,632 total submissions.',
    link: 'https://matt-burton.itch.io/super-massive',
    skills: [
      { label: 'C#', iconClass: 'devicon-csharp-plain' },
      { label: 'Unity', iconClass: 'devicon-unity-plain' },
    ],
    year: 2024,
    purpose: {
      type: 'Personal',
    },
  },
  {
    id: 9,
    title: 'Caves of Combat',
    description:
      'A 2D action roguelike currently in development with fast-paced combat, procedural content, and custom ability systems.',
    link: 'https://store.steampowered.com/app/3589810/Caves_of_Combat/',
    skills: [
      { label: 'C#', iconClass: 'devicon-csharp-plain' },
      { label: 'Unity', iconClass: 'devicon-unity-plain' },
    ],
    year: 2025,
    banner: '/images/projects/caves-of-combat/ruins.png',
    purpose: {
      purpose:
        'I wanted to make a video game exploring procedurally generated environments and roguelike combat that rewards player mastery.',
      goals: [
        'Develop a cast of enemies with unique movement and attack styles',
        'Experiment with procedural content generation in Unity',
        'Learn and apply architecture patterns like ECS or ScriptableObject-based design',
      ],
      type: 'Personal',
    },
    role: {
      role: 'Solo Developer',
      responsibilities: ['Design', 'Implementation', 'Deployment'],
    },
    features: {
      features: [
        {
          header: 'Procedural Generation',
          description:
            'Procedurally generated environments using a random walk algorithm to carve the levels. Sequenced population steps for environment aware platforms, decorations, and objects.',
          media: '/images/projects/caves-of-combat/generation.mp4',
        },
        {
          header: 'Modular projectiles',
          description:
            'Components for targeting, movement, triggers, and effects. Movement patterns range include linear, homing and even orbitals.',
          media: '/images/projects/caves-of-combat/projectiles.mp4',
        },
        {
          header: 'Intelligent enemies',
          description:
            'Movement, attacks, and animations governed by a state machine and conditions. Observer pattern used in damage and death event responses.',
          media: '/images/projects/caves-of-combat/boss.mp4',
        },
      ],
    },
    challenges: {
      challenges: [
        {
          challenge:
            'Avoid tightly coupled systems that would be difficult to maintain or expand.',
          solution:
            'Designed gameplay logic around ScriptableObjects, interfaces, and events to decouple input, AI, projectiles, and ability effects.',
        },
        {
          challenge:
            'Encourage replayability through meaningful variation without overwhelming the player.',
          solution:
            'Layered procedural content: random layouts, enemy spawns, and ability shops, with tuned difficulty ramps across runs.',
        },
        {
          challenge:
            'Combat felt flat and lacked satisfying feedback early on.',
          solution:
            'Added screen shake, hit pause, particles, and color flashes to amplify feedback for player hits and damage.',
        },
      ],
    },
    learned: {
      learned: [
        'Decoupling',
        'Modularity',
        'Encapsulation',
        'Observer Pattern',
        'Singleton Pattern',
        'Finite State Machines',
        'Procedural Generation',
        'Shader Graph',
        'Data Driven Design',
      ],
    },
    state: {
      state: 'In Progress',
      conclusion: `I'm currently working toward a playable public demo with core combat, procedural environments, and enemy AI systems in place. A Steam page is live and the project is starting to gain traction through devlogs and social media promotion. My focus over the next few months is polishing moment-to-moment gameplay and building content for the first few zones.`,
    },
  },
  {
    id: 10,
    title: 'Full Stack Open',
    description:
      'A suite of full-stack web apps for the University of Helsinki’s Full Stack Open course on modern web development, DevOps, and testing.',
    link: 'https://github.com/matthewjburton/full-stack-open',
    skills: [
      { label: 'React / TS', iconClass: 'devicon-react-plain' },
      { label: 'Node / Express', iconClass: 'devicon-nodejs-plain' },
      { label: 'PostgreSQL / MongoDB', iconClass: 'devicon-postgresql-plain' },
      { label: 'Docker', iconClass: 'devicon-docker-plain' },
      { label: 'Testing / CI', iconClass: 'devicon-githubactions-plain' },
    ],
    year: 2024,
    purpose: {
      type: 'Professional',
    },
  },
  {
    id: 11,
    title: 'Company Dashboard',
    description: `Designed and implemented a centralized landing page to link AdvanceTEC’s internal tools.`,
    link: 'https://app.advancetecllc.com',
    skills: [
      { label: 'React', iconClass: 'devicon-react-plain' },
      { label: 'Typescript', iconClass: 'devicon-typescript-plain' },
      { label: 'Docker', iconClass: 'devicon-docker-plain' },
      { label: 'Github Actions', iconClass: 'devicon-githubactions-plain' },
    ],
    year: 2024,
    purpose: {
      type: 'Professional',
    },
  },
  {
    id: 12,
    title: 'Expense Report',
    description: `A streamlined web form to submit and generate PDF's of employee expenses.`,
    link: 'https://expense-report.advancetecllc.com',
    skills: [
      { label: 'React / TS', iconClass: 'devicon-react-plain' },
      { label: 'Node / Express', iconClass: 'devicon-nodejs-plain' },
      { label: 'Docker', iconClass: 'devicon-docker-plain' },
      { label: 'MongoDB', iconClass: 'devicon-mongodb-plain' },
      { label: 'Testing / CI', iconClass: 'devicon-githubactions-plain' },
    ],
    year: 2024,
    purpose: {
      type: 'Professional',
    },
  },
  {
    id: 13,
    title: 'Warehouse Inventory',
    description:
      'Designed and delivered a full-featured inventory management system for warehouse logistics, used in a live production environment.',
    skills: [
      { label: 'React / TS', iconClass: 'devicon-react-plain' },
      { label: 'Node / Express', iconClass: 'devicon-nodejs-plain' },
      { label: 'Docker', iconClass: 'devicon-docker-plain' },
      { label: 'PostgreSQL', iconClass: 'devicon-postgresql-plain' },
      { label: 'Testing / CI', iconClass: 'devicon-githubactions-plain' },
    ],
    year: 2025,
    banner: '/images/projects/warehouse-inventory/banner.jpg',
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
          media: '/images/projects/warehouse-inventory/catalog.mp4',
        },
        {
          header: 'Shipment Tracking',
          description:
            'Track incoming and outgoing shipments with rich metadata: who was involved, what was delivered, and when. Ensures traceability and accountability.',
          media: '/images/projects/warehouse-inventory/shipping.mp4',
        },
        {
          header: 'Crate & Packaging Logistics',
          description:
            'Group assemblies into outbound crates, relocate crates to shelving, and stage them by project — improving efficiency in the shipping process.',
          media: '/images/projects/warehouse-inventory/staging.mp4',
        },
        {
          header: 'Prefabrication Management',
          description:
            'Track prefabrication status, identify required materials, and link materials to specific assemblies for a clear production workflow.',
          media: '/images/projects/warehouse-inventory/prefab.mp4',
        },
        {
          header: 'Responsive Form Feedback',
          description:
            'Instant validation feedback with inline, field-specific error messages for a smoother user experience.',
          media: '/images/projects/warehouse-inventory/forms.mp4',
        },
        {
          header: 'Integrated Form Modals',
          description:
            'Allow users to add new entries (e.g., manufacturers, materials) directly from dropdowns via reusable modal components — reducing context switching and streamlining workflows.',
          media: '/images/projects/warehouse-inventory/modals.mp4',
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
      ],
    },
    learned: {
      learned: [
        'Test-Driven Development (TDD)',
        'Continuous Integration and Deployment (CI/CD)',
        'Scalable Full Stack Architecture',
        'Cloud Hosting & Production Deployment',
        'Agile Project Management',
        'Stakeholder Communication',
      ],
    },
    state: {
      state: 'On Hold',
      conclusion: `After assessing AdvanceTEC’s long-term strategy, I advised leadership to pivot from custom development to a commercial solution. This helped reduce future maintenance risk and eliminated the dependency on in-house software expertise.`,
    },
  },
  {
    id: 14,
    title: 'Caves of Combat Website',
    description:
      'Marketing site for the indie game Caves of Combat, built to grow its online presence and drive social engagement.',
    link: 'https://cavesofcombat.com',
    skills: [
      { label: 'React', iconClass: 'devicon-react-plain' },
      { label: 'Typescript', iconClass: 'devicon-typescript-plain' },
      { label: 'Tailwind', iconClass: 'devicon-tailwindcss-plain' },
    ],
    year: 2025,
    purpose: {
      type: 'Personal',
    },
  },
  // Add more programs as needed
]
