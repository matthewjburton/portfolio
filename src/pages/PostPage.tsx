import { useParams } from 'react-router-dom'
import { Container } from '@/components/Container'
import { getPostBySlug } from '@/utils/getPosts'
import * as MDXComponents from '@/components/mdx/MDXComponents'

const PostPage = () => {
  const { slug } = useParams<{ slug: string }>()

  if (!slug) return <p>Slug not found</p>

  const Post = getPostBySlug(slug)

  if (!Post) return <p>Post not found</p>

  return (
    <div className="flex flex-col gap-12">
      <Container>
        <Post components={MDXComponents} />
      </Container>
    </div>
  )
}

export { PostPage }
