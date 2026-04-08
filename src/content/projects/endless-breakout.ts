import { ProjectType } from '@/types/content'

export const endlessBreakout: ProjectType = {
  id: 6,
  title: 'Endless Breakout',
  description:
    'Infinite arcade brick breaker with dynamic difficulty scaling, rebuilt from scratch in a two-week sprint.',
  link: 'https://matt-burton.itch.io/endless-breakout',
  stack: [
    { label: 'Unity', iconClass: 'devicon-unity-plain' },
    { label: 'C#', iconClass: 'devicon-csharp-plain' },
  ],
  year: 2023,
  banner: `${import.meta.env.BASE_URL}images/projects/endless-breakout/banner.png`,
  purpose: {
    purpose:
      'A personal challenge to reimagine a classic game with modern mechanics and polish, built after completing the Envision Game Development Program at GMU.',
    goals: [
      'Experiment with endless gameplay loops and dynamic difficulty',
      'Support both desktop and mobile with cross-platform controls',
    ],
    type: 'Personal',
  },
  role: {
    role: 'Solo Developer',
    responsibilities: ['Game Design', 'Programming', 'Art', 'Publishing'],
  },
  features: {
    features: [
      {
        header: 'Endless Arcade Mode',
        description:
          'Bricks descend over time with new challenges at score thresholds instead of traditional levels.',
        media: `${import.meta.env.BASE_URL}images/projects/endless-breakout/endless.mp4`,
      },
      {
        header: 'Dynamic Brick Types',
        description:
          'Metal-edged bricks breakable only from exposed sides, plus multi-hit bricks with increasing durability.',
        media: `${import.meta.env.BASE_URL}images/projects/endless-breakout/bricks.mp4`,
      },
      {
        header: 'Cross-Platform Controls',
        description:
          'Desktop and mobile support with cursor/finger tracking or manual drag for precision.',
        media: `${import.meta.env.BASE_URL}images/projects/endless-breakout/controls.mp4`,
      },
      {
        header: 'Aimable Bounce Physics',
        description:
          'Bounce angle calculated from paddle contact point, rewarding skillful aim.',
        media: `${import.meta.env.BASE_URL}images/projects/endless-breakout/aim.mp4`,
      },
      {
        header: 'Combo System & Stats',
        description:
          'Combo tracking for consecutive hits without touching the paddle, with real-time stats.',
        media: `${import.meta.env.BASE_URL}images/projects/endless-breakout/combos.mp4`,
      },
    ],
  },
  challenges: {
    challenges: [
      {
        challenge:
          'Special bricks could spawn in unwinnable patterns.',
        solution:
          'Validation logic prevents metal-edged bricks from forming impenetrable formations.',
      },
      {
        challenge:
          'Original project files lost with no source or assets.',
        solution:
          'Rebuilt the entire game from scratch in a two-week sprint.',
      },
      {
        challenge:
          'Difficulty balance as bricks descend toward the paddle.',
        solution:
          'Lowest brick height dynamically controls the spawn delay of new rows.',
      },
    ],
  },
  learned: {
    learned: [
      'Unity Physics & Collision',
      'Endless Game Design',
      'Cross-Platform Input Systems',
      'Game Feel & Polish',
    ],
  },
  state: {
    state: 'Complete',
    conclusion:
      'Polished, cross-platform release with solid mechanics. Published on itch.io.',
  },
}
