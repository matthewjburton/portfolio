/**
 * Utility functions for content lookup and manipulation
 */

import { slugify } from '@/router/utils/slugify'
import { posts, projects } from './registry'
import { PostType, ProjectType } from '@/types/content'

/**
 * Find a post by its slug
 * @param slug - The URL-safe slug
 * @returns The post object or undefined
 */
export const findPostBySlug = (slug: string) => {
  return posts.find(({ meta }) => slugify(meta.slug) === slug)
}

/**
 * Find a project by its slug (derived from title)
 * @param slug - The URL-safe slug
 * @returns The project object or undefined
 */
export const findProjectBySlug = (slug: string): ProjectType | undefined => {
  return projects.find((p) => slugify(p.title) === slug)
}

/**
 * Find content by type and slug
 * @param type - 'post' or 'project'
 * @param slug - The URL-safe slug
 * @returns The content object or undefined
 */
export const findContentBySlug = (
  type: 'post' | 'project',
  slug: string
): PostType | ProjectType | undefined => {
  if (type === 'post') {
    return findPostBySlug(slug)
  } else if (type === 'project') {
    return findProjectBySlug(slug)
  }
}

/**
 * Get related projects (by shared tech stack)
 * @param currentProject - The project to find related projects for
 * @param limit - Maximum number of related projects to return (default 3)
 * @returns Array of related projects
 */
export const getRelatedProjects = (
  currentProject: ProjectType,
  limit = 3
): ProjectType[] => {
  const currentStackLabels = new Set(currentProject.stack.map((s) => s.label))

  const related = projects
    .filter((p) => p.id !== currentProject.id)
    .map((p) => ({
      project: p,
      sharedCount: p.stack.filter((s) => currentStackLabels.has(s.label))
        .length,
    }))
    .filter((item) => item.sharedCount > 0)
    .sort((a, b) => b.sharedCount - a.sharedCount)
    .slice(0, limit)
    .map((item) => item.project)

  return related
}

/**
 * Get all unique tags from posts
 * @returns Sorted array of unique tags
 */
export const getAllPostTags = (): string[] => {
  const tags = new Set<string>()
  posts.forEach(({ meta }) => {
    meta.tags.forEach((tag) => tags.add(tag))
  })
  return Array.from(tags).sort()
}

/**
 * Get posts filtered by tag
 * @param tag - The tag to filter by
 * @returns Array of posts with the given tag
 */
export const getPostsByTag = (tag: string): PostType[] => {
  return posts.filter(({ meta }) => meta.tags.includes(tag))
}
