import { Element } from 'react-scroll'
import { Header } from '../Header'
import { ProjectCard } from './card/ProjectCard'
import { useSortedProjects } from './hooks/useSortedProjects'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/router/routes'
import { SECTIONS } from '@/content/sections'

const NUMBER_OF_PROJECTS_TO_SHOW = 3

const Projects = () => {
  const { projects } = useSortedProjects()

  return (
    <Element name={SECTIONS.projects} className="flex w-full justify-center">
      <div className="flex flex-col items-center gap-12">
        <Header text={SECTIONS.projects} />
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, NUMBER_OF_PROJECTS_TO_SHOW).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <Link
          to={ROUTES.PROJECTS.ROOT}
          className="text-gradient-accent hover:underline"
        >
          View All Projects <i className="fa-solid fa-arrow-right" />
        </Link>
      </div>
    </Element>
  )
}

export { Projects }
