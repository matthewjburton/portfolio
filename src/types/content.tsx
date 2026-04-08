import { SkillType } from '@/components/skills/types'
import { ComponentType } from 'react'

export interface ProjectType {
  id: number
  title: string
  description: string
  link?: string
  stack: SkillType[]
  year: number

  banner?: string
  purpose?: {
    purpose?: string
    goals?: string[]
    type?: 'Personal' | 'Professional' | 'Academic'
  }
  role?: {
    role?: string
    responsibilities?: string[]
  }
  mediaOrientation?: 'portrait' | 'landscape'
  features?: {
    features: { header: string; description: string; media: string }[]
  }
  challenges?: {
    challenges?: { challenge: string; solution: string }[]
  }
  learned?: {
    learned?: string[]
  }
  state?: {
    state?: 'Complete' | 'In Progress' | 'On Hold' | 'Prototype'
    lastUpdated?: string
    conclusion?: string
  }
}
export interface PostType {
  post: ComponentType
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
