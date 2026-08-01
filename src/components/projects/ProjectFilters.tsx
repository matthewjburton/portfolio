import { useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'

const projectTypes = ['Personal', 'Professional', 'Academic'] as const

const typeFilterStyles: Record<string, { active: string; inactive: string }> = {
  Professional: {
    active:
      'bg-accent dark:bg-dark-accent text-background dark:text-dark-background border-transparent',
    inactive:
      'border-accent text-accent dark:border-dark-accent dark:text-dark-accent hover:bg-accent/10 dark:hover:bg-dark-accent/10',
  },
  Personal: {
    active:
      'bg-secondary dark:bg-dark-secondary text-background dark:text-dark-background border-transparent',
    inactive:
      'border-secondary text-secondary dark:border-dark-secondary dark:text-dark-secondary hover:bg-secondary/10 dark:hover:bg-dark-secondary/10',
  },
  Academic: {
    active:
      'bg-text-muted dark:bg-dark-text-muted text-background dark:text-dark-background border-transparent',
    inactive:
      'border-border text-text-muted dark:border-dark-border dark:text-dark-text-muted hover:bg-text-muted/10 dark:hover:bg-dark-text-muted/10',
  },
}

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
  const [filtersOpen, setFiltersOpen] = useState(false)
  const hasFilters = search.length > 0 || activeType !== null || activeTech !== null

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => {
            onSearchChange(e.target.value)
          }}
          className="bg-background dark:bg-dark-background-light border-border dark:border-dark-border text-text dark:text-dark-text placeholder:text-text-muted dark:placeholder:text-dark-text-muted w-full rounded-full border px-5 py-3 outline-none transition-colors focus:border-accent dark:focus:border-dark-accent"
        />
        <button
          onClick={() => {
            setFiltersOpen((prev) => !prev)
          }}
          type="button"
          className={`relative cursor-pointer rounded-full border px-4 py-3 text-sm transition-colors ${
            filtersOpen
              ? 'border-accent text-accent dark:border-dark-accent dark:text-dark-accent'
              : 'border-border dark:border-dark-border text-text-muted dark:text-dark-text-muted hover:border-accent hover:text-accent dark:hover:border-dark-accent dark:hover:text-dark-accent'
          }`}
          aria-label="Toggle filters"
        >
          <SlidersHorizontal className="size-4" />
          {hasFilters && (
            <span className="gradient-accent absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full" />
          )}
        </button>
      </div>

      {filtersOpen && (
        <>
          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            {projectTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => {
                  onTypeChange(activeType === type ? null : type)
                }}
                className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors ${
                  activeType === type
                    ? typeFilterStyles[type].active
                    : typeFilterStyles[type].inactive
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            {allTech.map((tech) => (
              <button
                key={tech}
                type="button"
            onClick={() => {
              onTechChange(activeTech === tech ? null : tech)
            }}
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
        </>
      )}

      {hasFilters && (
        <div className="text-text-muted dark:text-dark-text-muted flex items-center justify-center gap-2 text-sm md:justify-start">
          <span>
            {filteredCount} of {totalCount} projects
          </span>
          <button
            type="button"
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
