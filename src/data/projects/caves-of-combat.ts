import { ProjectType } from '@/components/projects/types'

export const cavesOfCombat: ProjectType = {
  id: 9,
  title: 'Caves of Combat',
  description:
    '2D action roguelike with procedural generation, modular combat systems, and a live Steam page.',
  link: 'https://store.steampowered.com/app/3589810/Caves_of_Combat/',
  stack: [
    { label: 'C#', iconClass: 'devicon-csharp-plain' },
    { label: 'Unity', iconClass: 'devicon-unity-plain' },
  ],
  year: 2025,
  banner: `${import.meta.env.BASE_URL}images/projects/caves-of-combat/ruins.png`,
  purpose: {
    purpose:
      'Exploring procedural generation and roguelike combat that rewards player mastery.',
    goals: [
      'Enemies with distinct movement and attack behaviors via state machines',
      'Procedural level generation with environment-aware population',
      'Decoupled architecture using ScriptableObjects and event-driven design',
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
          'Random walk algorithm carves levels, then sequenced steps populate platforms, decorations, and objects.',
        media: `${import.meta.env.BASE_URL}images/projects/caves-of-combat/generation.mp4`,
      },
      {
        header: 'Modular projectiles',
        description:
          'Composable targeting, movement, trigger, and effect components. Supports linear, homing, and orbital patterns.',
        media: `${import.meta.env.BASE_URL}images/projects/caves-of-combat/projectiles.mp4`,
      },
      {
        header: 'Intelligent enemies',
        description:
          'State machine governs movement, attacks, and animations. Observer pattern handles damage and death events.',
        media: `${import.meta.env.BASE_URL}images/projects/caves-of-combat/boss.mp4`,
      },
    ],
  },
  challenges: {
    challenges: [
      {
        challenge: 'Systems needed to stay decoupled as complexity grew.',
        solution:
          'ScriptableObjects, interfaces, and events decouple input, AI, projectiles, and abilities.',
      },
      {
        challenge: 'Combat felt flat early on.',
        solution:
          'Screen shake, hit pause, particles, and color flashes amplify every hit.',
      },
    ],
  },
  learned: {
    learned: [
      'Procedural Generation',
      'Finite State Machines',
      'Data-Driven Design',
      'Shader Graph',
    ],
  },
  state: {
    state: 'On Hold',
    lastUpdated: 'Apr 2026',
    conclusion: 'Free public demo is live on Steam with core combat, procedural environments, and enemy AI. Further development is on hold.',
  },
}
