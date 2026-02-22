import { ComponentType } from 'react'
import { PostMetaType, PostType } from '@/types/content'

interface PostModule {
  default: ComponentType
}

interface MetaModule {
  default: PostMetaType
}

const postModules = import.meta.glob<PostModule>('./posts/**/index.tsx', {
  eager: true,
})

const metaModules = import.meta.glob<MetaModule>('./posts/**/meta.ts', {
  eager: true,
})

export const posts: PostType[] = Object.keys(postModules)
  .map((path) => {
    const basePath = path.replace('/index.tsx', '')
    const metaPath = `${basePath}/meta.ts`

    const metaModule = metaModules[metaPath]

    if (!metaModule) {
      console.warn(`Missing meta.ts for post: ${basePath}`)
      return null
    }

    const meta = metaModule.default ?? metaModule

    if (!meta?.slug || !meta.title) {
      console.warn(`Invalid meta structure for ${basePath}:`, meta)
      return null
    }

    return {
      post: postModules[path].default,
      meta,
    }
  })
  .filter((item): item is PostType => item !== null)
