import { PostMetaType } from '@/data/posts/types'
import React from 'react'

interface PostMetaProps {
  meta: PostMetaType
}

const PostMeta: React.FC<PostMetaProps> = ({ meta }) => {
  const { date, tags, author, readingTime } = meta

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <>
      <h1 className="mb-4 text-4xl font-bold">{meta.title}</h1>
      <div className="text-text-muted dark:text-dark-text-muted mb-8 flex flex-wrap items-center gap-4 text-sm">
        <span>{formatDate(date)}</span>
        {author && <span>by {author}</span>}
        {readingTime && <span>{readingTime}</span>}
        {tags && tags.length > 0 && (
          <div className="flex gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-accent/10 dark:bg-dark-accent/10 text-accent dark:text-dark-accent inline-block rounded-full px-3 py-1 text-xs font-semibold"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default PostMeta
