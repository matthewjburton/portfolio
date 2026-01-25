import { PostMetaType } from '@/types/content'
import { formatDate } from '@/utils/formatDate'

interface PostMetaProps {
  meta: PostMetaType
}

const PostMeta = ({ meta }: PostMetaProps) => {
  const { date, tags, author, readingTime } = meta

  return (
    <>
      <h1 className="mb-4 text-4xl font-bold">{meta.title}</h1>
      <div className="text-text-muted dark:text-dark-text-muted mb-8 flex flex-wrap items-center gap-4 text-sm">
        <span>{formatDate(date)}</span>
        {author && <span>by {author}</span>}
        {readingTime && <span>{readingTime}</span>}
        
          <div className="flex gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-accent/10 dark:bg-dark-accent/10 text-accent dark:text-dark-accent inline-block rounded-full px-3 py-1 text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
      </div>
    </>
  )
}

export { PostMeta }
