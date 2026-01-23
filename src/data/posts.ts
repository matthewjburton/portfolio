import { JSX } from 'react'
import { PostMeta } from './posts/types'
import { UnityPrefabs } from './posts/UnityPrefabs'
import { unityPrefabs } from './posts/UnityPrefabs.meta'

export const posts: { post: () => JSX.Element; meta: PostMeta }[] = [
  {
    post: UnityPrefabs,
    meta: unityPrefabs,
  },
]
