import { ProjectCard } from './card/ProjectCard'
import { useSortedProjects } from './hooks/useSortedProjects'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/router/routes'
import { SECTIONS } from '@/content/sections'

const NUMBER_OF_PROJECTS_TO_SHOW = 3

const Projects = () => {
  const { projects } = useSortedProjects()

  return (
    <section id={SECTIONS.projects} className="scroll-mt-32">
      <div className="flex flex-col items-center gap-16">
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, NUMBER_OF_PROJECTS_TO_SHOW).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <Link
          to={ROUTES.PROJECTS.ROOT}
          className="inline-flex items-center gap-2 rounded-lg gradient-accent z-10 cursor-pointer px-6 py-3 font-semibold text-background dark:text-dark-background transition-all duration-200 hover:opacity-85 hover:scale-102">
          View All Projects <i className="fa-solid fa-arrow-right text-sm" />
        </Link>
      </div>
    </section>
  )
}

export { Projects }
