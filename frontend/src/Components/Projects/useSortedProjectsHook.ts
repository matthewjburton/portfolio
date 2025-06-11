import { projects } from '../../Content/Projects/Projects'

export const useSortedProjects = () => {
  const sorted = [...projects].sort((a, b) => b.year - a.year)
  return { projects: sorted }
}
