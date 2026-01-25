import PrefabSerializationMitigation from './posts/PrefabSerializationMitigation'
import { prefabSerializationMitigation } from './posts/PrefabSerializationMitigation.meta'
import { PostType } from '@/types/content'

export const posts: PostType[] = [
  {
    post: PrefabSerializationMitigation,
    meta: prefabSerializationMitigation,
  },
]
