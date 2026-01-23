import { useParams } from 'react-router-dom'
import { Container } from '@/components/posts/Container'
import { posts } from '@/data/posts'
import { slugify } from '@/router/utils/slugify'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import PostMeta from '@/components/posts/PostMeta'

const PostPage = () => {
  const { slug } = useParams<{ slug: string }>()
  if (!slug) return
  const { post: Post, meta } =
    posts.find(({ meta }) => slugify(meta.slug) === slug) ?? {}
  if (!Post || !meta) return

  return (
    <div className="flex flex-col p-8">
      <Breadcrumbs project={slug} />
      <Container>
        <PostMeta meta={meta} />
        <Post />
      </Container>
    </div>
  )
}

export { PostPage }
