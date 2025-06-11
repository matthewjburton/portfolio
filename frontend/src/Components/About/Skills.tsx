import React from 'react'
import SubHeader from '../SubHeader'

interface SkillCategory {
  category: string
  skills: string[]
}

interface SkillsProps {
  title: string
  skills: SkillCategory[]
}

const Skills: React.FC<SkillsProps> = ({ title, skills }) => {
  return (
    <>
      <SubHeader text={title} />
      <div className="bg-container dark:bg-container-dark flex w-full flex-col gap-8 rounded-lg p-12">
        {skills.map((category) => (
          <div
            key={category.category}
            className="flex flex-col items-center gap-4 lg:flex-row"
          >
            <div className="text-center font-bold lg:text-left">
              {category.category}
            </div>
            <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-lg bg-gray-200 px-4 py-2 dark:bg-gray-700"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Skills
