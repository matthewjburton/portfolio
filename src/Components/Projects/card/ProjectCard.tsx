import React from 'react'
import FadeInSection from '../../FadeInSection'
import { Link } from 'react-router-dom'
import { slugify } from '@/router/utils/slugify'
import TechStack from './TechStack'
import Card from './Card'
import { ProjectType } from '../types'

interface ProjectCardProps {
  project: ProjectType
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div
      key={project.id}
      className="h-full transition-transform duration-300 ease-in-out hover:scale-103"
    >
      <FadeInSection>
        <Link to={`/${slugify(project.title)}`}>
          <Card>
            <div className="flex flex-col gap-2">
              <div className="text-start text-xl font-bold md:text-2xl lg:text-3xl">
                {project.title}
              </div>

              <span className="text-text-muted dark:text-dark-text-muted text-sm italic">
                {project.year.toString()}
              </span>
            </div>

            <div className="text-lg">{project.description}</div>

            <div className="mt-auto">
              <TechStack stack={project.stack} />
            </div>
          </Card>
        </Link>
      </FadeInSection>
    </div>
  )
}

export default ProjectCard
