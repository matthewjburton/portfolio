import PrefabSerializationMitigation from './posts/PrefabSerializationMitigation'
import { prefabSerializationMitigation } from './posts/PrefabSerializationMitigation.meta'
import { PostType } from '@/components/blog/types'

export const posts: PostType[] = [
  {
    post: PrefabSerializationMitigation,
    meta: prefabSerializationMitigation,
  },
]
