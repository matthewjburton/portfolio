import { projects } from '../../Content/projects'

export const useSortedProjects = () => {
  const sorted = [...projects].sort((a, b) => b.year - a.year)
  return { projects: sorted }
}
