import React from 'react'
import { Element } from 'react-scroll'
import Header from '../Header'
import ProjectContainer from './ProjectContainer'
import { useSortedProjects } from './useSortedProjectsHook'

const Projects: React.FC = () => {
  const { projects } = useSortedProjects()

  return (
    <Element name="Projects" className="flex w-full justify-center pt-8">
      <div className="flex flex-col items-center gap-12 pt-12">
        <Header text="Projects" />
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectContainer key={project.id} project={project} />
          ))}
        </div>{' '}
      </div>
    </Element>
  )
}

export default Projects
