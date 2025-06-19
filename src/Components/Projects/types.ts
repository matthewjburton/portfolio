import { SkillType } from '../skills/types'

export interface ProjectType {
  id: number
  title: string
  description: string
  link?: string
  skills: SkillType[]
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
    conclusion?: string
  }
}
