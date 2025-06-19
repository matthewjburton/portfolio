import { ProjectType } from '@/components/projects/types'
import { cavesOfCombat } from './projects/caves-of-combat'
import { warehouseInventory } from './projects/warehouse-inventory'
import { businessCaseForm } from './projects/business-case-form'
import { comfortAirlines } from './projects/comfort-airlines'
import { superMassive } from './projects/super-massive'

export const projects: ProjectType[] = [
  comfortAirlines,
  businessCaseForm,
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
  superMassive,
  cavesOfCombat,
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
  warehouseInventory,
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
