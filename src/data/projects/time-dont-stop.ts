import { ProjectType } from '@/components/projects/types'

export const timeDontStop: ProjectType = {
  id: 16,
  title: "Time Don't Stop",
  description:
    'A top-down arena shooter where time is your only resource, built solo in 96 hours for GMTK 2026. Ranked #126 in Enjoyment out of ~10,500 entries — the top 1.2%.',
  link: 'https://matt-burton.itch.io/time-dont-stop',
  stack: [
    { label: 'Unity', iconClass: 'devicon-unity-plain' },
    { label: 'C#', iconClass: 'devicon-csharp-plain' },
  ],
  year: 2026,
  banner: `${import.meta.env.BASE_URL}images/projects/time-dont-stop/banner.png`,
  purpose: {
    purpose:
      "Built for the GMTK 2026 game jam around the theme 'Count Down.' Rather than a timer bolted onto a shooter, time itself is the game: a single draining clock is your health, your resource, and the countdown you race — every dash, hit, and decision spends from it.",
    goals: [
      "Turn the 'Count Down' theme into the core mechanic, not just a UI element",
      'Ship a complete, polished game — tutorial, bosses, music, and meta systems — within the 96-hour window',
      'Iterate quickly on player feedback throughout the jam',
    ],
    type: 'Personal',
  },
  role: {
    role: 'Solo Developer',
    responsibilities: [
      'Game Design',
      'Programming',
      'Art',
      'Music',
      'Publishing',
    ],
  },
  features: {
    features: [
      {
        header: 'Time as a Resource',
        description:
          'Health, actions, and the countdown are one shared pool that constantly drains. Every move is a spend decision instead of a reflex.',
        media: `${import.meta.env.BASE_URL}images/projects/time-dont-stop/time-resource.mp4`,
      },
      {
        header: 'Overcharge Mode',
        description:
          'Banked too much time? Burn it in Overcharge for higher fire rate, more damage, and piercing shots — but the clock drains far faster, turning a surplus into a gamble.',
        media: `${import.meta.env.BASE_URL}images/projects/time-dont-stop/overcharge.mp4`,
      },
      {
        header: 'Seven Unique Bosses',
        description:
          'Not bullet-hell spam. Each of the seven bosses drains your time in its own way, forcing you to dash, conserve, focus targets, manage positioning, or commit to Overcharge.',
        media: `${import.meta.env.BASE_URL}images/projects/time-dont-stop/bosses.mp4`,
      },
      {
        header: 'Four Enemy Types',
        description:
          'A varied enemy roster that pressures positioning and keeps the time economy under constant threat.',
        media: `${import.meta.env.BASE_URL}images/projects/time-dont-stop/enemies.mp4`,
      },
      {
        header: 'Guided Onboarding',
        description:
          'A full tutorial eases new players into the time-as-resource loop before the pressure ramps up.',
        media: `${import.meta.env.BASE_URL}images/projects/time-dont-stop/tutorial.mp4`,
      },
      {
        header: 'Bestiary & High Scores',
        description:
          'A bestiary catalogs the enemies and bosses you face, while high-score tracking rewards mastery of the time economy.',
        media: `${import.meta.env.BASE_URL}images/projects/time-dont-stop/bestiary.png`,
      },
    ],
  },
  challenges: {
    challenges: [
      {
        challenge:
          "Playtesters couldn't tell the player was moving across an empty background.",
        solution:
          'Added a scrolling grid for spatial reference, then a large clock motif behind the action that doubles as a reminder of the countdown theme.',
      },
      {
        challenge:
          'Manual aiming demanded twitch skill the game was never about.',
        solution:
          'Switched to auto-aim so players focus on the real challenge — spending and conserving time — instead of execution.',
      },
      {
        challenge:
          'Dashing cost time, so players avoided it — but boss attacks required dashing to survive.',
        solution:
          'Tuned dashing to cost less time than the damage it avoids, making evasion always the correct play.',
      },
      {
        challenge:
          'Players could bank so much time that the countdown stopped feeling like a threat.',
        solution:
          'Added Overcharge mode: spend the surplus for a major power boost while the clock burns down faster, keeping time-pressure meaningful at every reserve level.',
      },
      {
        challenge: 'Multiple weapon types diluted the time-management focus.',
        solution:
          'Cut them so every remaining mechanic serves the countdown theme.',
      },
      {
        challenge:
          'The first soundtrack was eight repeating bars that grated quickly.',
        solution:
          'Rebuilt it as A/B variations per instrument with dynamic stems that adapt to Overcharge and danger states.',
      },
    ],
  },
  learned: {
    learned: [
      'Adaptive / Dynamic Music Systems',
      'Designing Mechanics Around a Theme',
      'Rapid Playtesting & Feedback Iteration',
      'Scope Management Under a Deadline',
    ],
  },
  state: {
    state: 'Complete',
    lastUpdated: 'Jul 2026',
    conclusion:
      'Designed, built, and shipped solo in 96 hours for GMTK 2026 — around a full work week, travel, and weekend commitments. Enjoyment was the goal, and community voting across ~10,500 entries delivered: #126 in Enjoyment (4.27 / 5) — the top 1.2% — with strong marks in Audio (#1,295) and Creativity (#1,742).',
  },
}
