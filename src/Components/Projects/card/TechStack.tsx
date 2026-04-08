import { SkillType } from '@/components/skills/types'
import { Tooltip } from '@/components/Tooltip'

interface TechStackProps {
  stack: SkillType[]
}

const TechStack = ({ stack }: TechStackProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((skill) => (
        <Tooltip key={skill.label} tooltip={skill.label}>
          {skill.iconClass && (
            <i className={`${skill.iconClass} text-gradient-accent text-xl`} />
          )}
        </Tooltip>
      ))}
    </div>
  )
}

export { TechStack }
