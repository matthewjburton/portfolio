import { projects } from '../../data/projects'

export const useSortedProjects = () => {
  const sorted = [...projects].sort((a, b) => b.year - a.year)
  return { projects: sorted }
}
