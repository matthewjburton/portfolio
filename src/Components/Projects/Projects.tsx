import React from 'react'
import { Element } from 'react-scroll'
import Header from '../Header'
import ProjectCard from './card/ProjectCard'
import ProjectFilters from './ProjectFilters'
import { useSortedProjects } from './hooks/useSortedProjectsHook'

const Projects: React.FC = () => {
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
    <Element name="Projects" className="flex w-full justify-center">
      <div className="flex w-full flex-col items-center gap-12">
        <Header text="Projects" />
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
    </Element>
  )
}

export default Projects
