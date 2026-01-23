import { JSX } from 'react'
import { PostMetaType } from './posts/types'
import { UnityPrefabs } from './posts/UnityPrefabs'
import { unityPrefabs } from './posts/UnityPrefabs.meta'

export const posts: { post: () => JSX.Element; meta: PostMetaType }[] = [
  {
    post: UnityPrefabs,
    meta: unityPrefabs,
  },
]
