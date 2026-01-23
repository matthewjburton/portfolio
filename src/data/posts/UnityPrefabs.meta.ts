import { PostMeta } from './types'

export const unityPrefabs: PostMeta = {
  title: 'Unity Prefabs Breaking on Refactor',
  slug: 'unity-prefabs-breaking',
  date: new Date('2026-01-22'),
  tags: ['unity', 'refactoring', 'architecture', 'prefabs'] as const,
  summary:
    'Why serialized fields resetting taught me to respect Unity’s data model.',
} as const
