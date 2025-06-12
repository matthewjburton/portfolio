import React from 'react'

interface SkillType {
  label: string
  iconClass: string
}

interface SkillsProps {
  title: string
  skills: SkillType[]
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {skills.map((skill) => (
        <div
          key={skill.label}
          className="gradient-accent text-container dark:text-container-dark flex items-center gap-x-2 rounded-full px-4 py-2"
        >
          {skill.iconClass && <i className={`${skill.iconClass} text-xl`} />}

          {skill.label}
        </div>
      ))}
    </div>
  )
}

export default Skills
