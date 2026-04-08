import { ProjectType } from '@/components/projects/types'

export const superMassive: ProjectType = {
  id: 8,
  title: 'Super Massive',
  description:
    'Solo 48-hour game jam entry. Top 7% in enjoyment out of 7,642 submissions in GMTK 2024.',
  link: 'https://matt-burton.itch.io/super-massive',
  stack: [
    { label: 'C#', iconClass: 'devicon-csharp-plain' },
    { label: 'Unity', iconClass: 'devicon-unity-plain' },
  ],
  year: 2024,
  banner: `${import.meta.env.BASE_URL}images/projects/super-massive/banner.png`,
  purpose: {
    purpose:
      'Solo submission for the GMTK 2024 Game Jam (theme: "Built to Scale"). Complete end-to-end experience built under extreme time constraints.',
    goals: [
      'Ship a complete, polished game in under 48 hours',
      'Stand out among 7,600+ submissions through game feel and polish',
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
          'Like-sized particles merge to grow in scale, rewarding spatial awareness and planning.',
        media: `${import.meta.env.BASE_URL}images/projects/super-massive/gameplay.mp4`,
      },
      {
        header: 'Intro Cutscene & Tutorial',
        description:
          'Brief cutscene sets the premise; contextual prompts guide new players.',
        media: `${import.meta.env.BASE_URL}images/projects/super-massive/cutscene.mp4`,
      },
      {
        header: 'Dynamic Camera System',
        description:
          'Camera zooms out as your largest particle grows, reinforcing the scale theme.',
        media: `${import.meta.env.BASE_URL}images/projects/super-massive/camera.mp4`,
      },
      {
        header: 'Antimatter Setbacks',
        description:
          'Antimatter particles shrink your progress on contact, adding risk and urgency.',
        media: `${import.meta.env.BASE_URL}images/projects/super-massive/antimatter.mp4`,
      },
      {
        header: 'Dynamic Environments',
        description:
          'Hot and cold space regions alter particle speed, creating dynamic pacing between high-pressure moments.',
        media: `${import.meta.env.BASE_URL}images/projects/super-massive/environment.mp4`,
      },
    ],
  },
  challenges: {
    challenges: [
      {
        challenge: 'Shipping a polished, complete experience in 48 hours.',
        solution:
          'Started with one core mechanic, then layered polish only after gameplay was solid.',
      },
      {
        challenge: 'Standing out among 7,600+ submissions.',
        solution:
          'Prioritized game feel and a unique theme interpretation, then actively promoted post-jam.',
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
    lastUpdated: 'Aug 2024',
    conclusion:
      'Top 7% in Enjoyment, Top 15% Overall. Received strong community feedback and remains playable in its post-jam form.',
  },
}
