import { ProjectType } from '@/components/projects/types'

export const superMassive: ProjectType = {
  id: 8,
  title: 'Super Massive',
  description:
    'Developed core gameplay, UI, and polish in under 48 hours using Unity. Placed top 7% for enjoyment out of 7,642 total submissions in the GMTK 2024 Game Jam.',
  link: 'https://matt-burton.itch.io/super-massive',
  stack: [
    { label: 'C#', iconClass: 'devicon-csharp-plain' },
    { label: 'Unity', iconClass: 'devicon-unity-plain' },
  ],
  year: 2024,
  banner: `${import.meta.env.BASE_URL}images/projects/super-massive/banner.png`,
  purpose: {
    purpose:
      'Created as a solo submission for the GMTK 2024 Game Jam, where the theme was "Built to Scale." The project was an opportunity to challenge myself under time constraints and practice building a complete experience end-to-end—from prototyping to polish.',
    goals: [
      'Build a complete game in under 48 hours',
      'Align gameplay mechanics to the jam theme',
      'Practice rapid iteration and scope management',
      'Learn how to market and launch a playable web game',
    ],
    type: 'Personal',
  },
  role: {
    role: 'Solo Developer',
    responsibilities: [
      'Game Design',
      'Programming',
      'Art & Sound Integration',
      'UI/UX',
      'Submission & Promotion',
    ],
  },
  features: {
    features: [
      {
        header: 'Core Game Mechanics',
        description:
          'Simple, accessible gameplay where like-sized particles merge to grow in scale, rewarding spatial awareness and planning.',
        media: `${import.meta.env.BASE_URL}images/projects/super-massive/gameplay.mp4`,
      },
      {
        header: 'Intro Cutscene & Tutorial',
        description:
          'A brief cutscene introduces the world and gameplay premise, while contextual tutorial prompts guide new players intuitively.',
        media: `${import.meta.env.BASE_URL}images/projects/super-massive/cutscene.mp4`,
      },
      {
        header: 'Dynamic Camera System',
        description:
          'The camera automatically zooms out as your largest particle grows, reinforcing the scale-based theme visually and mechanically.',
        media: `${import.meta.env.BASE_URL}images/projects/super-massive/camera.mp4`,
      },
      {
        header: 'Antimatter Setbacks',
        description:
          'Antimatter particles appear intermittently, shrinking your progress if collected—adding challenge and urgency.',
        media: `${import.meta.env.BASE_URL}images/projects/super-massive/antimatter.mp4`,
      },
      {
        header: 'Dynamic Environments',
        description:
          'As you drift through space, you encounter warm and cold regions that affect particle behavior—hot zones accelerate particle movement, while cold zones slow things down. This adds dynamic pacing and moments of reprieve between high-pressure situations.',
        media: `${import.meta.env.BASE_URL}images/projects/super-massive/environment.mp4`,
      },
    ],
  },
  challenges: {
    challenges: [
      {
        challenge: 'Balancing scope within the 48-hour time limit.',
        solution:
          'Started with a minimal viable mechanic, then layered features and polish only if core gameplay was working well.',
      },
      {
        challenge:
          'Creating a complete experience with onboarding, feedback, and replayability.',
        solution:
          'Added a cutscene, tutorial prompt, sound effects, combo feedback, and subtle progression cues to elevate the experience.',
      },
      {
        challenge: 'Standing out in a massive pool of over 7,600 submissions.',
        solution:
          'Prioritized visual polish, game feel, and a unique spin on the theme—then promoted the game actively post-jam.',
      },
    ],
  },
  learned: {
    learned: [
      'Rapid Prototyping',
      'Scope Management',
      'Game Feel & Juice',
      'Unity UI System',
      'Post-Jam Marketing',
    ],
  },
  state: {
    state: 'On Hold',
    conclusion:
      'Super Massive placed Top 7% in Enjoyment, Top 15% Overall, and received fantastic feedback from the community. While I had plans to evolve it into a mobile release, the project remains in its post-jam form as a fun, polished experience I’m proud of.',
  },
}
