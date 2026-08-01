import React from 'react'
import { skills } from '../../data/skills'
import FadeInSection from '../FadeInSection'
import SkillPill from './SkillPill'

const Skills: React.FC = () => {
  return (
    <FadeInSection>
      <div className="my-12 flex flex-wrap justify-center gap-2">
        {skills.map((skill) => (
          <SkillPill key={skill.label} skill={skill} variant="contained" />
        ))}
      </div>
    </FadeInSection>
  )
}

export default Skills
