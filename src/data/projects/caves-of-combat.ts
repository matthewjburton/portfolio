import { ProjectType } from '@/components/projects/types'

export const cavesOfCombat: ProjectType = {
  id: 9,
  title: 'Caves of Combat',
  description:
    'A 2D action roguelike currently in development with fast-paced combat, procedural content, and custom ability systems.',
  link: 'https://store.steampowered.com/app/3589810/Caves_of_Combat/',
  stack: [
    { label: 'C#', iconClass: 'devicon-csharp-plain' },
    { label: 'Unity', iconClass: 'devicon-unity-plain' },
  ],
  year: 2025,
  banner: `${import.meta.env.BASE_URL}images/projects/caves-of-combat/ruins.png`,
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
        media: `${import.meta.env.BASE_URL}images/projects/caves-of-combat/generation.mp4`,
      },
      {
        header: 'Modular projectiles',
        description:
          'Components for targeting, movement, triggers, and effects. Movement patterns range include linear, homing and even orbitals.',
        media: `${import.meta.env.BASE_URL}images/projects/caves-of-combat/projectiles.mp4`,
      },
      {
        header: 'Intelligent enemies',
        description:
          'Movement, attacks, and animations governed by a state machine and conditions. Observer pattern used in damage and death event responses.',
        media: `${import.meta.env.BASE_URL}images/projects/caves-of-combat/boss.mp4`,
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
        challenge: 'Combat felt flat and lacked satisfying feedback early on.',
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
}
