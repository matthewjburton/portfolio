import { ProjectCard } from './card/ProjectCard'
import { ProjectFilters } from './ProjectFilters'
import { useSortedProjects } from './hooks/useSortedProjects'
import { SECTIONS } from '@/content/sections'

const Projects = () => {
  const {
    projects,
    totalCount,
    search,
    setSearch,
    activeType,
    setActiveType,
    activeTech,
    setActiveTech,
    allTech,
  } = useSortedProjects()

  return (
    <section id={SECTIONS.projects} className="scroll-mt-32">
      <div className="flex w-full flex-col items-center gap-12">
        <ProjectFilters
          search={search}
          onSearchChange={setSearch}
          activeType={activeType}
          onTypeChange={setActiveType}
          activeTech={activeTech}
          onTechChange={setActiveTech}
          allTech={allTech}
          filteredCount={projects.length}
          totalCount={totalCount}
        />
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {projects.length === 0 && (
          <p className="text-text-muted dark:text-dark-text-muted text-lg">
            No projects match your filters.
          </p>
        )}
      </div>
    </section>
  )
}

export { Projects }
