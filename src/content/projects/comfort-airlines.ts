import { ProjectType } from '@/types/content'

export const comfortAirlines: ProjectType = {
  id: 1,
  title: 'Comfort Airlines',
  description:
    'Airline operations simulator -- won the senior capstone competition for scope management, functionality, and polish.',
  link: 'https://github.com/matthewjburton/comfort-airlines',
  stack: [
    { label: 'Python', iconClass: 'devicon-python-plain' },
    { label: 'MariaDB', iconClass: 'devicon-mariadb-plain' },
    { label: 'Docker', iconClass: 'devicon-docker-plain' },
  ],
  year: 2024,
  banner: `${import.meta.env.BASE_URL}images/projects/comfort-airlines/banner.webp`,
  purpose: {
    purpose:
      'Senior capstone simulation of airline operations -- intentionally over-scoped by the client to test prioritization under pressure.',
    goals: [
      'Simulate operations across multiple airports and aircraft with realistic constraints',
      'Analyze profitability and operational efficiency per route',
    ],
    type: 'Academic',
  },
  role: {
    role: 'Team of 6',
    responsibilities: [
      'Project Management',
      'Simulation Engine',
      'UI / CLI Development',
      'Docker Setup',
      'Database Integration',
      'Software Documentation',
    ],
  },
  features: {
    features: [
      {
        header: 'Simulation Engine',
        description:
          'Day-by-day simulation tracking aircraft locations, fuel reserves, maintenance cycles, and passenger traffic.',
        media: `${import.meta.env.BASE_URL}images/projects/comfort-airlines/simulation.mp4`,
      },
      {
        header: 'Customizable Scenarios',
        description:
          'Configure aircraft types, airport count, flight durations, costs, and simulation length through validated inputs.',
        media: `${import.meta.env.BASE_URL}images/projects/comfort-airlines/config.mp4`,
      },
      {
        header: 'CLI Interface with Nested Menus',
        description:
          'Interactive terminal UI with numbered selections and nested menus for configuration and simulation control.',
        media: `${import.meta.env.BASE_URL}images/projects/comfort-airlines/interface.mp4`,
      },
      {
        header: 'Flight Timetable Integration',
        description:
          'Generated timetables coordinate flights for maximum throughput while respecting fuel, maintenance, and time constraints.',
        media: `${import.meta.env.BASE_URL}images/projects/comfort-airlines/timetable.png`,
      },
      {
        header: 'Dockerized Database',
        description:
          'MariaDB container with preloaded data and SQL reset scripts for consistent, reproducible environments.',
        media: `${import.meta.env.BASE_URL}images/projects/comfort-airlines/sql.png`,
      },
    ],
  },
  challenges: {
    challenges: [
      {
        challenge:
          'Deliberately oversized scope designed to exceed a semester.',
        solution:
          'Led agile sprints in Jira, prioritized MVP features, and cut scope at milestones to stay on track.',
      },
      {
        challenge:
          'Team unfamiliar with agile workflows and version control.',
        solution:
          'Ran training sessions on GitHub collaboration, PRs, and sprint planning; managed all agile ceremonies.',
      },
    ],
  },
  learned: {
    learned: [
      'Agile Project Management',
      'Simulation Modeling',
      'Python OOP Design',
      'Docker & MariaDB',
    ],
  },
  state: {
    state: 'Complete',
    conclusion:
      'Won the capstone competition with the highest client rating for scope management, functionality, and polish. I led development, documentation, and all sprint coordination.',
  },
}
