import { ProjectType } from '../types'
import { useSortedProjects } from '../hooks/useSortedProjectsHook'
import { Link } from 'react-router-dom'
import { slugify } from '@/router/utils/slugify'

interface OtherProjectsProps {
  project: ProjectType
}

const OtherProjects = ({ project }: OtherProjectsProps) => {
  const { projects } = useSortedProjects()
  const otherProjects = projects.filter((p) => p.id !== project.id)

  const nextThree = otherProjects.slice(0, 3)

  return (
    <section className="mt-12 flex flex-col gap-8 pb-12">
      <h2 className="text-primary-text dark:text-primary-text-dark text-xl font-semibold">
        Other Projects
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {nextThree.map((nextProject) => (
          <div
            key={nextProject.id}
            className="bg-container dark:bg-container-dark rounded-lg p-8 shadow-sm transition hover:shadow-md"
          >
            <h3 className="mb-2 font-bold">{nextProject.title}</h3>
            <p className="text-secondary-text dark:text-secondary-text-dark mb-4 text-sm">
              {nextProject.description}
            </p>
            <Link
              to={`/${slugify(nextProject.title)}`}
              className="text-gradient-accent items:center hover:underline"
            >
              View Case Study <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OtherProjects
