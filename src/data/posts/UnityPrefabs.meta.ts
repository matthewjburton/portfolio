import { PostMetaType } from './types'

export const unityPrefabs: PostMetaType = {
  title: 'Unity Prefabs Breaking on Refactor',
  slug: 'unity-prefabs-breaking',
  date: '2026-01-22',
  tags: ['unity', 'refactoring', 'architecture', 'prefabs'] as const,
  author: 'Matt Burton',
  readingTime: '5 min read',
  summary:
    'Why serialized fields resetting taught me to respect Unity’s data model.',
} as const
