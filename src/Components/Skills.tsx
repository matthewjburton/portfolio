import React from 'react'
import { skills } from '../Content/skills'
import FadeInSection from './FadeInSection'

const Skills: React.FC = () => {
  return (
    <FadeInSection>
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {skills.skills.map((skill) => (
          <div
            key={skill.label}
            className="gradient-accent text-container dark:text-container-dark flex items-center gap-x-2 rounded-full px-4 py-2"
          >
            {skill.iconClass && <i className={`${skill.iconClass} text-xl`} />}

            {skill.label}
          </div>
        ))}
      </div>
    </FadeInSection>
  )
}

export default Skills
