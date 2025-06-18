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
  features?: { header: string; description: string; media: string }[]
  challenges?: { challenge: string; solution: string }[]
  learned?: string[]
  state?: 'Complete' | 'In Progress' | 'On Hold' | 'Prototype'
  conclusion?: string
  year: number
}
