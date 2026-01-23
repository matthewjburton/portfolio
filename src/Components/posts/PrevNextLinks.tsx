import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/router/routes'

interface PrevNextLinksProps {
  prevPost?: {
    title: string
    slug: string
  }
  nextPost?: {
    title: string
    slug: string
  }
}

const PrevNextLinks: React.FC<PrevNextLinksProps> = ({
  prevPost,
  nextPost,
}) => (
  <div className="border-border dark:border-dark-border mt-12 flex justify-between border-t pt-8">
    {prevPost ? (
      <Link
        to={ROUTES.POSTS.DETAIL(prevPost.slug)}
        className="text-gradient-accent flex items-center gap-2 transition hover:underline"
      >
        <i className="fa-solid fa-arrow-left" />
        {prevPost.title}
      </Link>
    ) : (
      <div />
    )}
    {nextPost ? (
      <Link
        to={ROUTES.POSTS.DETAIL(nextPost.slug)}
        className="text-gradient-accent flex items-center gap-2 transition hover:underline"
      >
        {nextPost.title}
        <i className="fa-solid fa-arrow-right" />
      </Link>
    ) : (
      <div />
    )}
  </div>
)

export default PrevNextLinks
