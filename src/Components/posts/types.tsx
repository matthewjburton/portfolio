import { JSX } from 'react'

export interface PostType { 
    post: () => JSX.Element
    meta: PostMetaType 
}

export interface PostMetaType {
    title: string
    slug: string
    date: string
    tags: readonly string[]
    author: string
    readingTime: string
    summary: string
}
