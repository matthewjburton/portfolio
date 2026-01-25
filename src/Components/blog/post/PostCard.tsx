import { Link } from 'react-router-dom'
import { slugify } from '@/router/utils/slugify'
import { ROUTES } from '@/router/routes'

import { FadeInSection } from '../../FadeInSection'
import { PostType } from '@/types/content'
import { Card } from '../../Card'
import { formatDate } from '@/utils/formatDate'

interface PostCardProps {
  post: PostType
}

const PostCard = ({ post }: PostCardProps) => {
    const { title, slug, summary, date, tags } = post.meta
  return (
    <div
      key={slug}
      className="h-full transition-transform duration-300 ease-in-out hover:scale-103"
    >
      <FadeInSection>
        <Link to={ROUTES.BLOG.DETAIL(slugify(slug))}>
          <Card>
            <div className="flex flex-col gap-2">
              <div className="text-start text-xl font-bold md:text-2xl lg:text-3xl">
                {title}
              </div>

              <span className="text-text-muted dark:text-dark-text-muted text-sm italic">
                {formatDate(date)}
              </span>
            </div>

            <div className="text-lg">{summary}</div>

            <div className="mt-auto flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-accent/10 dark:bg-dark-accent/10 text-accent dark:text-dark-accent inline-block rounded-full px-3 py-1 text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
          </Card>
        </Link>
      </FadeInSection>
    </div>
  )
}

export { PostCard }
