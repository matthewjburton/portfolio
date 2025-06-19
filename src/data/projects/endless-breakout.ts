import { ProjectType } from '@/components/projects/types'

export const endlessBreakout: ProjectType = {
  id: 6,
  title: 'Endless Breakout',
  description:
    'An infinite arcade brick breaker with dynamic difficulty scaling and a retro aesthetic built in Unity.',
  link: 'https://matt-burton.itch.io/endless-breakout',
  skills: [
    { label: 'Unity', iconClass: 'devicon-unity-plain' },
    { label: 'C#', iconClass: 'devicon-csharp-plain' },
    { label: 'Illustrator', iconClass: 'devicon-illustrator-plain' },
  ],
  year: 2023,
  banner: '/images/projects/endless-breakout/banner.png',
  purpose: {
    purpose:
      'Created after completing the Envision Game Development Program at George Mason University, this project was a personal challenge to reimagine a classic game with modern mechanics and polish.',
    goals: [
      'Experiment with endless gameplay loops',
      'Practice Unity physics, UI, and mobile controls',
      'Rebuild a lost game from scratch in a two-week sprint',
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
          'Unlike traditional level-based brick breakers, bricks descend slowly over time and new challenges are introduced at score thresholds.',
        media: '/images/projects/endless-breakout/endless.mp4',
      },
      {
        header: 'Dynamic Brick Types',
        description:
          'Special bricks include metal-edged bricks (which can only be broken from exposed sides) and multi-hit bricks with increasing durability.',
        media: '/images/projects/endless-breakout/bricks.mp4',
      },
      {
        header: 'Cross-Platform Controls',
        description:
          'Supports both desktop and mobile. Paddle can follow the cursor/finger or be dragged manually for precision.',
        media: '/images/projects/endless-breakout/controls.mp4',
      },
      {
        header: 'Aimable Bounce Physics',
        description:
          'The bounce angle of the ball is dynamically calculated based on where it hits the paddle, encouraging skillful control.',
        media: '/images/projects/endless-breakout/aim.mp4',
      },
      {
        header: 'Combo System & Stats',
        description:
          'Score combos are tracked for hitting multiple bricks without touching the paddle, along with a full game loop and real-time stat tracking.',
        media: '/images/projects/endless-breakout/combos.mp4',
      },
    ],
  },
  challenges: {
    challenges: [
      {
        challenge:
          'Creating paddle bounce mechanics that felt intuitive and rewarding.',
        solution:
          'Calculated bounce direction using the relative contact point between ball and paddle to allow skill-based aiming.',
      },
      {
        challenge:
          'Ensuring special brick types couldn’t spawn in unwinnable patterns.',
        solution:
          'Added logic to prevent metal-edged bricks from forming completely impenetrable formations along the bottom row.',
      },
      {
        challenge:
          'Rebuilding lost project files without original source or assets.',
        solution:
          'Rebuilt the game entirely from scratch in under two weeks using a focused development sprint.',
      },
      {
        challenge:
          'Maintaining gameplay balance as the bricks descend lower over time.',
        solution:
          'Implemented a system where the height of the lowest brick determines the delay between spawning the next row, preventing the player from being overwhelmed and keeping the difficulty fair but challenging.',
      },
    ],
  },
  learned: {
    learned: [
      'Unity Physics & Collision',
      'Endless Game Design',
      'Custom Input Systems for Mobile/Desktop',
      'Game Feel & Juice',
      'Polishing Game Loops',
    ],
  },
  state: {
    state: 'Complete',
    conclusion:
      'While I had plans to expand Endless Breakout further with power-ups and game modes, I ultimately reached a satisfying version that demonstrated polished gameplay, solid mechanics, and cross-platform support.',
  },
}
