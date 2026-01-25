import { posts } from '@/content/posts'
import { PostType } from '../types'

export const useSortedPosts = () => {
  const sorted: PostType[] = [...posts].sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime())
  return { posts: sorted }
}
