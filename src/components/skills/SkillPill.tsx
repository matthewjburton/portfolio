import { SkillType } from './types'

const contained = 'gradient-accent text-background dark:text-dark-background'
const outlined = 'border-accent text-gradient-accent hover:bg-accent border'

interface SkillPillProps {
  skill: SkillType
  variant: 'contained' | 'outlined'
  className?: string
}

const SkillPill = ({
  skill,
  variant = 'contained',
  className = '',
}: SkillPillProps) => {
  return (
    <div
      className={`${variant === 'contained' ? contained : outlined} flex items-center gap-x-2 rounded-full px-4 py-2 ${className}`}
    >
      {skill.iconClass && <i className={`${skill.iconClass} text-xl`} />}

      {skill.label}
    </div>
  )
}

export default SkillPill
