/**
 * Centralized route definitions for the application
 * Use these constants instead of magic strings throughout the app
 */

export const ROUTES = {
  HOME: '/',
  PROJECTS: {
    ROOT: '/projects',
    PATTERN: 'projects/:slug',
    DETAIL: (slug: string) => `/projects/${slug}`,
  },
  POSTS: {
    ROOT: '/posts',
    PATTERN: 'posts/:slug',
    DETAIL: (slug: string) => `/posts/${slug}`,
  },
} as const
