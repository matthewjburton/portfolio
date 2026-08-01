import React from 'react'
import FadeInSection from '../../FadeInSection'
import { Link } from 'react-router-dom'
import { slugify } from '@/router/utils/slugify'
import TechStack from './TechStack'
import Card from './Card'
import CardMedia from './CardMedia'
import { ProjectType } from '../types'

interface ProjectCardProps {
  project: ProjectType
}

const typeBadgeStyles: Record<string, string> = {
  Professional:
    'border-accent/40 text-accent dark:border-dark-accent/40 dark:text-dark-accent',
  Personal:
    'border-secondary/40 text-secondary dark:border-dark-secondary/50 dark:text-dark-secondary',
  Academic:
    'border-border text-text-muted dark:border-dark-border dark:text-dark-text-muted',
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const preview = project.features?.features.find((feature) =>
    feature.media.endsWith('.mp4'),
  )?.media
  const type = project.purpose?.type

  return (
    <div
      key={project.id}
      className="transition-transform duration-300 ease-in-out hover:scale-103"
    >
      <FadeInSection>
        <Link to={`/${slugify(project.title)}`}>
          <Card
            media={
              <CardMedia
                banner={project.banner}
                preview={preview}
                title={project.title}
              />
            }
          >
            <div className="flex w-full flex-col gap-2">
              <div className="flex items-start justify-between gap-2">
                <div className="text-start text-xl font-bold md:text-2xl lg:text-3xl">
                  {project.title}
                </div>
                {type && (
                  <span
                    className={`mt-1 shrink-0 rounded-full border px-3 py-1 text-xs ${typeBadgeStyles[type]}`}
                  >
                    {type}
                  </span>
                )}
              </div>

              <span className="text-text-muted dark:text-dark-text-muted text-sm italic">
                {project.year.toString()}
              </span>
            </div>

            <div className="text-lg">{project.description}</div>

            <TechStack stack={project.stack} />
          </Card>
        </Link>
      </FadeInSection>
    </div>
  )
}

export default ProjectCard
