import { ProjectType } from '@/components/projects/types'

export const comfortAirlines: ProjectType = {
  id: 1,
  title: 'Comfort Airlines',
  description:
    'Simulates realistic airline operations including route planning, cost analysis, and profitability modeling.',
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
      'Built as part of a senior capstone course, Comfort Airlines was a large-scale simulation project designed to mimic real-world airline operations. The objective was to build a modular simulation with a focus on realistic constraints, profitability analysis, and scalability. The client intentionally proposed a scope that was too large to complete in full to test our ability to prioritize, plan, and deliver under pressure.',
    goals: [
      'Simulate airline operations across multiple airports and aircraft',
      'Enable customization of aircraft, costs, timetables, and durations',
      'Analyze profitability and operational efficiency',
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
          'A day-by-day simulation system that tracks aircraft locations, fuel reserves, maintenance cycles, and passenger traffic, updating based on a user-configured flight timetable.',
        media: `${import.meta.env.BASE_URL}images/projects/comfort-airlines/simulation.mp4`,
      },
      {
        header: 'Customizable Scenarios',
        description:
          'Users can configure key simulation parameters like aircraft types, airport count, flight durations, operational costs, and simulation length through validated inputs.',
        media: `${import.meta.env.BASE_URL}images/projects/comfort-airlines/config.mp4`,
      },
      {
        header: 'CLI Interface with Nested Menus',
        description:
          'Built a fully interactive terminal-based UI with numbered selection options and nested menus to guide users through configuration and simulation steps.',
        media: `${import.meta.env.BASE_URL}images/projects/comfort-airlines/interface.mp4`,
      },
      {
        header: 'Flight Timetable Integration',
        description:
          'The simulation engine consumes a generated timetable that coordinates flights for maximum passenger throughput while respecting fuel, maintenance, and time constraints.',
        media: `${import.meta.env.BASE_URL}images/projects/comfort-airlines/timetable.png`,
      },
      {
        header: 'Dockerized Database',
        description:
          'Implemented a MariaDB container with preloaded data and SQL reset scripts to allow for consistent test environments and data resets.',
        media: `${import.meta.env.BASE_URL}images/projects/comfort-airlines/sql.png`,
      },
    ],
  },
  challenges: {
    challenges: [
      {
        challenge:
          'Coordinating complex flight schedules across multiple airports while respecting real-world operational limits.',
        solution:
          'Delegated the scheduling algorithm to a teammate while I focused on the simulation logic that enforced time windows, fuel limits, and maintenance cycles, ensuring realistic adherence to constraints.',
      },
      {
        challenge:
          'Scope management in a deliberately oversized project designed to exceed a semester’s workload.',
        solution:
          'Led agile sprints using Jira, prioritized features for MVP delivery, and facilitated scope reduction when needed to meet milestones.',
      },
      {
        challenge:
          'Onboarding teammates to agile workflows, GitHub, and version control best practices.',
        solution:
          'Provided training and guidance on GitHub collaboration, pull requests, and sprint planning. Took detailed meeting minutes and managed all agile ceremonies.',
      },
    ],
  },
  learned: {
    learned: [
      'Agile Project Management',
      'Software Documentation',
      'Python OOP Design',
      'Simulation Modeling',
      'Docker',
      'MariaDB',
      'Team Collaboration',
      'Terminal-Based UI Design',
    ],
  },
  state: {
    state: 'Complete',
    conclusion:
      'Our team won the capstone competition, receiving the highest rating from the client for scope management, functionality, and polish. I led the team in both development and documentation, managing sprints, writing the simulation engine, and coordinating all meetings and deliverables.',
  },
}
