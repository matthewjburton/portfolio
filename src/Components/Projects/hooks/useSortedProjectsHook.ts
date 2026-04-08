import { useMemo, useState } from 'react'
import { projects as allProjects } from '@/data/projects'


export const useSortedProjects = () => {
  const [search, setSearch] = useState('')
  const [activeType, setActiveType] = useState<string | null>(null)
  const [activeTech, setActiveTech] = useState<string | null>(null)

  const allTech = useMemo(() => {
    const techSet = new Set<string>()
    allProjects.forEach((p) => p.stack.forEach((s) => techSet.add(s.label)))
    return [...techSet].sort()
  }, [])

  const projects = useMemo(() => {
    const query = search.toLowerCase()

    return [...allProjects]
      .filter((p) => {
        if (query) {
          const matchesTitle = p.title.toLowerCase().includes(query)
          const matchesDesc = p.description.toLowerCase().includes(query)
          const matchesStack = p.stack.some((s) =>
            s.label.toLowerCase().includes(query),
          )
          if (!matchesTitle && !matchesDesc && !matchesStack) return false
        }

        if (activeType && p.purpose?.type !== activeType) return false

        if (activeTech && !p.stack.some((s) => s.label === activeTech))
          return false

        return true
      })
      .sort((a, b) => b.year - a.year)
  }, [search, activeType, activeTech])

  return {
    projects,
    totalCount: allProjects.length,
    search,
    setSearch,
    activeType,
    setActiveType,
    activeTech,
    setActiveTech,
    allTech,
  }
}
