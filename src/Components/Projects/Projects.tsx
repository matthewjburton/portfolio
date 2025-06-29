import React from 'react'
import { Element } from 'react-scroll'
import Header from '../Header'
import ProjectCard from './card/ProjectCard'
import { useSortedProjects } from './hooks/useSortedProjectsHook'

const Projects: React.FC = () => {
  const { projects } = useSortedProjects()

  return (
    <Element name="Projects" className="flex w-full justify-center">
      <div className="flex flex-col items-center gap-12">
        <Header text="Projects" />
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>{' '}
      </div>
    </Element>
  )
}

export default Projects
