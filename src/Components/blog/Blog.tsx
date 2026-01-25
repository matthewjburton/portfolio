import { useSortedPosts } from './post/hooks/useSortedPosts'
import { PostCard } from './post/PostCard'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/router/routes'
import { SECTIONS } from '@/content/sections'

const NUMBER_OF_POSTS_TO_SHOW = 3

const Blog = () => {
  const { posts } = useSortedPosts()

  return (
    <section id={SECTIONS.blog} className="scroll-mt-32">
      <div className="flex flex-col items-center gap-16">
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, NUMBER_OF_POSTS_TO_SHOW).map((post) => (
            <PostCard key={post.meta.slug} post={post} />
          ))}
        </div>
        <Link
          to={ROUTES.BLOG.ROOT}
          className="inline-flex items-center gap-2 rounded-lg gradient-accent z-10 cursor-pointer px-6 py-3 font-semibold text-background dark:text-dark-background transition-all duration-200 hover:opacity-85 hover:scale-102">
          View All Posts <i className="fa-solid fa-arrow-right text-sm" />
        </Link>
      </div>
    </section>
  )
}

export { Blog }
