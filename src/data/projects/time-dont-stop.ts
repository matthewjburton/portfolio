import { ProjectType } from '@/components/projects/types'

export const timeDontStop: ProjectType = {
  id: 16,
  title: "Time Don't Stop",
  description:
    'A game built solo in 48 hours for the GMTK 2026 game jam and published on itch.io.',
  link: 'https://matt-burton.itch.io/time-dont-stop',
  stack: [
    { label: 'Unity', iconClass: 'devicon-unity-plain' },
    { label: 'C#', iconClass: 'devicon-csharp-plain' },
  ],
  year: 2026,
  purpose: {
    purpose:
      'A time-boxed challenge to design, build, and ship a complete game within the GMTK 2026 game jam constraints.',
    goals: [
      'Design and implement a full gameplay loop within the 48-hour jam window',
      'Ship a polished, playable build on itch.io before the deadline',
    ],
    type: 'Personal',
  },
  role: {
    role: 'Solo Developer',
    responsibilities: ['Game Design', 'Programming', 'Art', 'Publishing'],
  },
  state: {
    state: 'Complete',
    lastUpdated: 'Jul 2026',
    conclusion:
      'Submitted to the GMTK 2026 game jam and published on itch.io. Community scoring results to follow.',
  },
}
