import { JSX } from 'react'
import { PostMetaType } from './posts/types'
import PrefabSerializationMitigation from './posts/PrefabSerializationMitigation'
import { prefabSerializationMitigation } from './posts/PrefabSerializationMitigation.meta'

export const posts: { post: () => JSX.Element; meta: PostMetaType }[] = [
  {
    post: PrefabSerializationMitigation,
    meta: prefabSerializationMitigation,
  },
]
