import { ProjectType } from '@/components/projects/types'

export const repIndex: ProjectType = {
  id: 15,
  title: 'Rep Index',
  description:
    'Mobile workout tracker with intelligent progression recommendations.',
  link: 'https://testflight.apple.com/join/CD2ebfMB',
  stack: [
    { label: 'React Native', iconClass: 'devicon-react-original' },
    { label: 'TypeScript', iconClass: 'devicon-typescript-plain' },
    { label: 'PostgreSQL', iconClass: 'devicon-postgresql-plain' },
    { label: 'CI/CD', iconClass: 'devicon-githubactions-plain' },
  ],
  year: 2026,
  banner: `${import.meta.env.BASE_URL}images/projects/rep-index/banner.png`,
  purpose: {
    purpose:
      'Most workout apps let you log sets but never tell you when to progress. Rep Index is simple, fast, and opinionated — it tracks what matters and tells you when to move up.',
    goals: [
      'Intelligent progression recommendations from real workout history',
      'Visual consistency and performance analytics',
    ],
    type: 'Personal',
  },
  role: {
    role: 'Solo Developer',
    responsibilities: [
      'Mobile Development',
      'Backend & Database Design',
      'Algorithm Design',
      'CI/CD Pipeline',
    ],
  },
  features: {
    features: [
      {
        header: 'Intelligent Progression Engine',
        description:
          'Recommends when to increase reps or add weight based on working set history across configurable exercise categories.',
        media: `${import.meta.env.BASE_URL}images/projects/rep-index/progression.png`,
      },
      {
        header: 'Set Classification System',
        description:
          'Auto-classifies sets as warmup, working, failure, or drop based on weight relative to benchmarks.',
        media: `${import.meta.env.BASE_URL}images/projects/rep-index/sets.mp4`,
      },
      {
        header: 'Workout Consistency Heatmap',
        description:
          'GitHub-style heatmap showing workout frequency, weekly goals, and streaks.',
        media: `${import.meta.env.BASE_URL}images/projects/rep-index/home.png`,
      },
      {
        header: 'Exercise Library with Stats',
        description:
          'Searchable library with last/best top sets per exercise and detailed performance history.',
        media: `${import.meta.env.BASE_URL}images/projects/rep-index/exercises.mp4`,
      },
      {
        header: 'Swipe-to-Delete Gesture Controls',
        description:
          'Swipe-to-delete with optimistic UI updates for instant feedback.',
        media: `${import.meta.env.BASE_URL}images/projects/rep-index/swipe-to-delete.mp4`,
      },
    ],
  },
  challenges: {
    challenges: [
      {
        challenge:
          'Progression recommendations needed to work across different exercise types and rep ranges.',
        solution:
          'Decision tree engine with configurable precision categories and distinct progression states.',
      },
      {
        challenge: 'Progression calculations slowed as workout history grew.',
        solution: 'AsyncStorage-backed cache with per-exercise invalidation.',
      },
      {
        challenge:
          'Complex server state across nested workout/exercise/set relationships.',
        solution:
          'TanStack React Query with structured key registry and prefix-based invalidation.',
      },
      {
        challenge:
          'Needed a hands-off release pipeline from code to App Store review.',
        solution:
          'GitHub tag-based builds trigger Xcode Cloud workflows that auto-increment build numbers and submit to App Store Connect.',
      },
    ],
  },
  learned: {
    learned: [
      'React Native + Expo',
      'Supabase Auth & RLS Policies',
      'TanStack React Query Caching',
      'Algorithm Design for Progression',
      'Xcode Cloud CI/CD',
    ],
  },
  state: {
    state: 'In Progress',
    lastUpdated: 'Apr 2026',
    conclusion:
      'Fully functional and in daily personal use with 8 real testers through word of mouth. Refining the progression engine and analytics.',
  },
}
