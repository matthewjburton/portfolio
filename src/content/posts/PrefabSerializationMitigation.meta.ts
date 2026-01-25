import { PostMetaType } from './types'

export const prefabSerializationMitigation: PostMetaType = {
  title: 'The Hidden Cost of Refactoring Unity Components',
  slug: 'unity-prefab-serialization-mitigation',
  date: '2026-01-22',
  tags: [
    'unity',
    'refactoring',
    'architecture',
    'prefabs',
    'serialization',
  ] as const,
  author: 'Matt Burton',
  readingTime: '10 min read',
  summary:
    'How serialized field changes break prefabs in Unity, and practical strategies to design systems that are safe to refactor.',
} as const
