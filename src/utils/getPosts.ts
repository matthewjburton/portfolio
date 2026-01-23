import type { ComponentType } from 'react'
import { slugify } from '@/router/utils/slugify'
import type { MDXComponents } from 'mdx/types'

export interface MDXModule {
  default: ComponentType<{ components?: MDXComponents }>
  frontmatter?: {
    title: string
    slug: string
    date: string
    tags?: string[]
    summary?: string
  }
}

export const posts = import.meta.glob<MDXModule>('@/data/posts/*.mdx', {
  eager: true,
})

export const getPostBySlug = (slug: string) => {
  const entry = Object.entries(posts).find(([, module]) => {
    const fmSlug = module.frontmatter?.slug
    return slugify(fmSlug ?? '') === slug
  })

  if (!entry) return null
  const [, module] = entry
  return module.default
}

export const getPostMetaBySlug = (slug: string) => {
  const entry = Object.entries(posts).find(
    ([, module]) => slugify(module.frontmatter?.slug ?? '') === slug,
  )

  if (!entry) return null

  const [, module] = entry
  return module.frontmatter
}

export const getAllPostMeta = () =>
  Object.values(posts).map((m) => m.frontmatter)
