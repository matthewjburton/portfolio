import { useParams } from 'react-router-dom'
import { Container } from '@/components/Container'
import { posts } from '@/data/posts'
import { slugify } from '@/router/utils/slugify'

const PostPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const { post: Post } =
    posts.find(({ meta }) => slugify(meta.slug) === slug) ?? {}
  if (!Post) return

  return (
    <div className="flex flex-col gap-12">
      <Container>
        <Post />
      </Container>
    </div>
  )
}

export { PostPage }
