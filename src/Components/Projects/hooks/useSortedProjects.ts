import { projects } from '@/content/projects'
import { ProjectType } from '@/types/content'

export const useSortedProjects = () => {
  const sorted: ProjectType[] = [...projects].sort((a, b) => b.year - a.year)
  return { projects: sorted }
}
