import { Element } from 'react-scroll'
import { Header } from '../Header'
import { PostCard } from './PostCard'
import { useSortedPosts } from './hooks/useSortedPosts'

const Posts = () => {
  const { posts } = useSortedPosts()

  return (
    <Element name="Posts" className="flex w-full justify-center">
      <div className="flex flex-col items-center gap-12">
        <Header text="Posts" />
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.meta.slug} post={post} />
          ))}
        </div>
      </div>
    </Element>
  )
}

export { Posts }
