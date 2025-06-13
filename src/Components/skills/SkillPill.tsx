import { SkillType } from './types'

const contained = 'gradient-accent text-container dark:text-container-dark'
const outlined = 'border-accent text-gradient-accent hover:bg-accent'

interface SkillPillProps {
  skill: SkillType
  variant: 'contained' | 'outlined'
}

const SkillPill = ({ skill, variant = 'contained' }: SkillPillProps) => {
  if (variant === 'contained')
    return (
      <div
        className={`${contained} flex items-center gap-x-2 rounded-full px-4 py-2`}
      >
        {skill.iconClass && <i className={`${skill.iconClass} text-xl`} />}

        {skill.label}
      </div>
    )

  return (
    <span
      className={`${outlined} flex items-center gap-1 rounded-full border px-4 py-2 text-sm transition hover:scale-105`}
    >
      {skill.iconClass && <i className={`${skill.iconClass} text-xl`} />}
      {skill.label}
    </span>
  )
}

export default SkillPill
