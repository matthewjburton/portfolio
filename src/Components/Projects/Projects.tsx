import { Element } from 'react-scroll'
import { Header } from '../Header'
import { ProjectCard } from './card/ProjectCard'
import { useSortedProjects } from './hooks/useSortedProjects'
import { SECTIONS } from '@/content/sections'

const Projects = () => {
  const { projects } = useSortedProjects()

  return (
    <Element name={SECTIONS.projects} className="flex w-full justify-center">
      <div className="flex flex-col items-center gap-12">
        <Header text={SECTIONS.projects} />
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>{' '}
      </div>
    </Element>
  )
}

export { Projects }
