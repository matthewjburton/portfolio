import SkillPill from '@/components/skills/SkillPill'
import { SkillType } from '@/components/skills/types'

interface TechStackProps {
  tags: SkillType[]
}

const TechStack = ({ tags }: TechStackProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <SkillPill key={tag.label} skill={tag} variant="outlined" />
      ))}
    </div>
  )
}

export default TechStack
