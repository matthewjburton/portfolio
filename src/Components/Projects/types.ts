import { SkillType } from '../skills/types'

export interface ProjectType {
  id: number
  title: string
  description: string
  link: string
  tags: SkillType[]
  year: number
}
