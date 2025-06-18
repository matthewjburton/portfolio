import { ProjectType } from '@/components/projects/types'

export const projects: ProjectType[] = [
  {
    id: 1,
    title: 'Comfort Airlines',
    description:
      'Simulates realistic airline operations including route planning, cost analysis, and profitability modeling.',
    link: 'https://github.com/matthewjburton/comfort-airlines',
    tags: [
      { label: 'Python', iconClass: 'devicon-python-plain' },
      { label: 'MariaDB', iconClass: 'devicon-mariadb-plain' },
      { label: 'Docker', iconClass: 'devicon-docker-plain' },
    ],
    type: 'Academic',
    year: 2024,
  },
  {
    id: 2,
    title: 'Business Case Form',
    description:
      'A dynamic form system for analyzing investment opportunities, with real-time data validation, custom UI components, and PDF export capabilities.',
    link: 'https://udig-business-case-form-test.netlify.app/',
    tags: [
      { label: 'React / TS', iconClass: 'devicon-react-plain' },
      { label: 'GraphQL', iconClass: 'devicon-graphql-plain' },
      { label: 'PostgreSQL', iconClass: 'devicon-postgresql-plain' },
      { label: 'Figma', iconClass: 'devicon-figma-plain' },
    ],
    type: 'Professional',
    year: 2023,
  },
  {
    id: 3,
    title: 'Fine Dining Bot',
    description:
      'Python-based automation tool using Selenium to navigate login flows, check reservation availability, and auto-book tables. Developed in response to limited reservation windows and high demand.',
    link: 'https://github.com/matthewjburton/reservation-bot',
    tags: [
      { label: 'Python', iconClass: 'devicon-python-plain' },
      { label: 'Selenium', iconClass: 'devicon-selenium-plain' },
    ],
    type: 'Personal',
    year: 2024,
  },
  {
    id: 4,
    title: 'Blackjack',
    description: 'A CLI blackjack game.',
    link: 'https://github.com/matthewjburton/blackjack',
    tags: [{ label: 'C++', iconClass: 'devicon-cplusplus-plain' }],
    type: 'Personal',
    year: 2022,
  },
  {
    id: 5,
    title: 'Skate Park Finder',
    description:
      'Android app developed in Java using the Google Maps API and device GPS to display skate parks based on proximity. Focused on location services, UI responsiveness, and real-world testing.',
    link: 'https://github.com/matthewjburton/skate-park-finder',
    tags: [{ label: 'Java / Android', iconClass: 'devicon-java-plain' }],
    type: 'Academic',
    year: 2022,
  },
  {
    id: 6,
    title: 'Endless Breakout',
    description:
      'An infinite arcade brick breaker with power-ups, dynamic difficulty scaling, and a retro aesthetic built in Unity.',
    link: 'https://matt-burton.itch.io/endless-breakout',
    tags: [
      { label: 'Unity', iconClass: 'devicon-unity-plain' },
      { label: 'C#', iconClass: 'devicon-csharp-plain' },
      { label: 'Illustrator', iconClass: 'devicon-illustrator-plain' },
    ],
    type: 'Personal',
    year: 2023,
  },
  {
    id: 7,
    title: 'Messaging App',
    description: 'Send messages between clients across a server.',
    link: 'https://github.com/matthewjburton/network-app',
    tags: [{ label: 'C', iconClass: 'devicon-c-plain' }],
    type: 'Academic',
    year: 2023,
  },
  {
    id: 8,
    title: 'Super Massive',
    description:
      'Developed core gameplay, UI, and polish in under 48 hours using Unity. Placed top 7% for enjoyment out of 7,632 total submissions.',
    link: 'https://matt-burton.itch.io/super-massive',
    tags: [
      { label: 'C#', iconClass: 'devicon-csharp-plain' },
      { label: 'Unity', iconClass: 'devicon-unity-plain' },
    ],
    type: 'Personal',
    year: 2024,
  },
  {
    id: 9,
    title: 'Caves of Combat',
    description:
      'A 2D action roguelike currently in development with fast-paced combat, procedural content, and custom ability systems.',
    link: 'https://store.steampowered.com/app/3589810/Caves_of_Combat/',
    tags: [
      { label: 'C#', iconClass: 'devicon-csharp-plain' },
      { label: 'Unity', iconClass: 'devicon-unity-plain' },
    ],
    banner: '/images/projects/caves-of-combat/ruins.png',
    type: 'Personal',
    purpose:
      'I wanted to make a video game exploring procedurally generated environments and roguelike combat that rewards player mastery.',
    goals: [
      'Develop a cast of enemies with unique movement and attack styles',
      'Experiment with procedural content generation in Unity',
      'Learn and apply architecture patterns like ECS or ScriptableObject-based design',
    ],
    role: 'Solo Developer',
    responsibilities: ['Design', 'Implementation', 'Deployment'],
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
        challenge: 'Combat felt flat and lacked satisfying feedback early on.',
        solution:
          'Added screen shake, hit pause, particles, and color flashes to amplify feedback for player hits and damage.',
      },
    ],
    year: 2025,
  },
  {
    id: 10,
    title: 'Full Stack Open',
    description:
      'A suite of full-stack web apps for the University of Helsinki’s Full Stack Open course on modern web development, DevOps, and testing.',
    link: 'https://github.com/matthewjburton/full-stack-open',
    tags: [
      { label: 'React / TS', iconClass: 'devicon-react-plain' },
      { label: 'Node / Express', iconClass: 'devicon-nodejs-plain' },
      { label: 'PostgreSQL / MongoDB', iconClass: 'devicon-postgresql-plain' },
      { label: 'Docker', iconClass: 'devicon-docker-plain' },
      { label: 'Testing / CI', iconClass: 'devicon-githubactions-plain' },
    ],
    type: 'Professional',
    year: 2024,
  },
  {
    id: 11,
    title: 'Company Dashboard',
    description: `Designed and implemented a centralized landing page to link AdvanceTEC’s internal tools.`,
    link: 'https://app.advancetecllc.com',
    tags: [
      { label: 'React', iconClass: 'devicon-react-plain' },
      { label: 'Typescript', iconClass: 'devicon-typescript-plain' },
      { label: 'Docker', iconClass: 'devicon-docker-plain' },
      { label: 'Github Actions', iconClass: 'devicon-githubactions-plain' },
    ],
    type: 'Professional',
    year: 2024,
  },
  {
    id: 12,
    title: 'Expense Report',
    description: `A streamlined web form to submit and generate PDF's of employee expenses.`,
    link: 'https://expense-report.advancetecllc.com',
    tags: [
      { label: 'React / TS', iconClass: 'devicon-react-plain' },
      { label: 'Node / Express', iconClass: 'devicon-nodejs-plain' },
      { label: 'Docker', iconClass: 'devicon-docker-plain' },
      { label: 'MongoDB', iconClass: 'devicon-mongodb-plain' },
      { label: 'Testing / CI', iconClass: 'devicon-githubactions-plain' },
    ],
    type: 'Professional',
    year: 2024,
  },
  {
    id: 13,
    title: 'Warehouse Inventory',
    description:
      'Sole developer on an inventory management system capable of tracking shipments, finding materials, and scheduling prefabrication.',
    link: 'https://inventory.advancetecllc.com',
    tags: [
      { label: 'React / TS', iconClass: 'devicon-react-plain' },
      { label: 'Node / Express', iconClass: 'devicon-nodejs-plain' },
      { label: 'Docker', iconClass: 'devicon-docker-plain' },
      { label: 'PostgreSQL', iconClass: 'devicon-postgresql-plain' },
      { label: 'Testing / CI', iconClass: 'devicon-githubactions-plain' },
    ],
    type: 'Professional',
    year: 2025,
  },
  {
    id: 14,
    title: 'Caves of Combat Website',
    description:
      'Marketing site for the indie game Caves of Combat, built to grow its online presence and drive social engagement.',
    link: 'https://cavesofcombat.com',
    tags: [
      { label: 'React', iconClass: 'devicon-react-plain' },
      { label: 'Typescript', iconClass: 'devicon-typescript-plain' },
      { label: 'Tailwind', iconClass: 'devicon-tailwindcss-plain' },
    ],
    type: 'Personal',
    year: 2025,
  },
  // Add more programs as needed
]
