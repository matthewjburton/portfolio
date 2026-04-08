const projectTypes = ['Personal', 'Professional', 'Academic'] as const

interface ProjectFiltersProps {
  search: string
  onSearchChange: (value: string) => void
  activeType: string | null
  onTypeChange: (type: string | null) => void
  activeTech: string | null
  onTechChange: (tech: string | null) => void
  allTech: string[]
  filteredCount: number
  totalCount: number
}

const ProjectFilters = ({
  search,
  onSearchChange,
  activeType,
  onTypeChange,
  activeTech,
  onTechChange,
  allTech,
  filteredCount,
  totalCount,
}: ProjectFiltersProps) => {
  const hasFilters = search || activeType || activeTech

  return (
    <div className="flex w-full flex-col gap-4">
      <input
        type="text"
        placeholder="Search projects..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="bg-background dark:bg-dark-background-light border-border dark:border-dark-border text-text dark:text-dark-text placeholder:text-text-muted dark:placeholder:text-dark-text-muted w-full rounded-full border px-5 py-3 outline-none transition-colors focus:border-accent dark:focus:border-dark-accent"
      />

      <div className="flex flex-wrap gap-2">
        {projectTypes.map((type) => (
          <button
            key={type}
            onClick={() => onTypeChange(activeType === type ? null : type)}
            className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors ${
              activeType === type
                ? 'gradient-accent text-background dark:text-dark-background border-transparent'
                : 'border-accent text-accent dark:border-dark-accent dark:text-dark-accent hover:bg-accent/10 dark:hover:bg-dark-accent/10'
            }`}
          >
            {type}
          </button>
        ))}

        <div className="border-border dark:border-dark-border mx-1 border-l" />

        {allTech.map((tech) => (
          <button
            key={tech}
            onClick={() => onTechChange(activeTech === tech ? null : tech)}
            className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors ${
              activeTech === tech
                ? 'gradient-accent text-background dark:text-dark-background border-transparent'
                : 'border-border dark:border-dark-border text-text-muted dark:text-dark-text-muted hover:border-accent dark:hover:border-dark-accent hover:text-accent dark:hover:text-dark-accent'
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {hasFilters && (
        <div className="text-text-muted dark:text-dark-text-muted flex items-center gap-2 text-sm">
          <span>
            {filteredCount} of {totalCount} projects
          </span>
          <button
            onClick={() => {
              onSearchChange('')
              onTypeChange(null)
              onTechChange(null)
            }}
            className="text-accent dark:text-dark-accent cursor-pointer underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  )
}

export default ProjectFilters
