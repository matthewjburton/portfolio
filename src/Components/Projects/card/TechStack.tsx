import { SkillType } from '@/components/skills/types'

interface TechStackProps {
  stack: SkillType[]
}

const TechStack = ({ stack }: TechStackProps) => {
  return (
    <div className="text-gradient-accent flex flex-wrap gap-2">
      {stack.map((skill) => (
        <div key={skill.iconClass}>
          {skill.iconClass && <i className={`${skill.iconClass} text-xl`} />}
        </div>
      ))}
    </div>
  )
}

export default TechStack
