import { Element } from 'react-scroll'
import { Header } from '../Header'
import { useSortedPosts } from './post/hooks/useSortedPosts'
import { PostCard } from './post/PostCard'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/router/routes'
import { SECTIONS } from '@/content/sections'

const NUMBER_OF_POSTS_TO_SHOW = 3

const Blog = () => {
  const { posts } = useSortedPosts()

  return (
    <Element name={SECTIONS.blog} className="flex w-full justify-center">
      <div className="flex flex-col items-center gap-12">
        <Header text={SECTIONS.blog} />
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, NUMBER_OF_POSTS_TO_SHOW).map((post) => (
            <PostCard key={post.meta.slug} post={post} />
          ))}
        </div>
        <Link
          to={ROUTES.BLOG.ROOT}
          className="text-gradient-accent hover:underline"
        >
          View All Posts <i className="fa-solid fa-arrow-right" />
        </Link>
      </div>
    </Element>
  )
}

export { Blog }
