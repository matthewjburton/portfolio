import React from 'react'
import FadeInSection from '../FadeInSection'
import { Link } from 'react-router-dom'
import { slugify } from '@/router/utils/slugify'
import SkillPill from '../skills/SkillPill'

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    link: string
    tags: { label: string; iconClass: string }[]
    year: number
  }
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div key={project.id} className="h-full">
      <FadeInSection>
        {/*<a href={project.link} target="_blank" rel="noopener noreferrer">*/}
        <Link to={`/projects/${slugify(project.title)}`}>
          <div className="bg-container dark:bg-container-dark group flex h-full flex-col items-center justify-center overflow-hidden rounded-lg p-8 shadow-xl transition duration-300 ease-in-out hover:shadow-[0_0_10px_#8fcf45] hover:dark:shadow-[0_0_10px_#82db4f]">
            <div className="flex h-full w-full flex-col items-center justify-between gap-4 rounded-lg p-4 lg:gap-8 lg:p-8">
              <div className="flex w-full flex-col items-start gap-4">
                <div className="flex flex-col gap-2">
                  <div className="text-start text-xl font-bold md:text-2xl lg:text-3xl">
                    {project.title}
                  </div>

                  <span className="text-secondary-text dark:text-secondary-text-dark text-sm italic">
                    {project.year.toString()}
                  </span>
                </div>

                <div className="text-lg">{project.description}</div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <SkillPill key={tag.label} skill={tag} variant="outlined" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Link>
        {/*</a>*/}
      </FadeInSection>
    </div>
  )
}

export default ProjectCard
