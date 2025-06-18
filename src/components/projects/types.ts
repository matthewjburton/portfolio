import { SkillType } from '../skills/types'

export interface ProjectType {
  id: number
  title: string
  description: string
  link: string
  tags: SkillType[]
  banner?: string
  type?: 'Personal' | 'Professional' | 'Academic'
  purpose?: string
  goals?: string[]
  role?: string
  responsibilities?: string[]
  features?: { description: string; media: string }[]
  year: number
}
