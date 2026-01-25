import { ProjectType } from '@/types/content'
import { useSortedProjects } from '../hooks/useSortedProjects'
import { Link } from 'react-router-dom'
import { slugify } from '@/router/utils/slugify'
import { ROUTES } from '@/router/routes'
import { useMemo } from 'react'

interface OtherProjectsProps {
  project: ProjectType
}

const OtherProjects = ({ project }: OtherProjectsProps) => {
  const { projects } = useSortedProjects()

  const randomProjects = useMemo(() => {
    const filtered = projects.filter((p) => p.id !== project.id)
    if (filtered.length === 0) return []

    const currentIndex = projects.findIndex((p) => p.id === project.id)
    const result: ProjectType[] = []
    const maxProjects = Math.min(3, filtered.length)

    for (let i = 1; i <= maxProjects; i++) {
      const nextIndex = (currentIndex + i) % filtered.length
      if (filtered[nextIndex].id !== project.id) {
        result.push(filtered[nextIndex])
      }
    }

    return result
  }, [projects, project.id])

  return (
    <section className="mt-12 flex flex-col gap-8 pb-12">
      <h2 className="text-text dark:text-dark-text text-xl font-semibold">
        Explore More Projects
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {randomProjects.map((nextProject) => (
          <div
            key={nextProject.id}
            className="bg-background dark:bg-dark-background dark:border-t-dark-highlight border-t-highlight border-border dark:border-dark-border flex h-full flex-col rounded-lg border p-8 shadow-lg transition"
          >
            <h3 className="mb-2 font-bold">{nextProject.title}</h3>
            <p className="text-text-muted dark:text-dark-te xt-muted mb-4 text-sm">
              {nextProject.description}
            </p>
            <Link
              to={ROUTES.PROJECTS.DETAIL(slugify(nextProject.title))}
              className="text-gradient-accent items:center mt-auto hover:underline"
            >
              View Case Study <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export { OtherProjects }
