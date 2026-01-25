import { Link } from 'react-router-dom'
import { ROUTES } from '@/router/routes'

interface BreadcrumbsProps {
  type?: 'projects' | 'blog'
  title?: string
}

const Breadcrumbs = ({ type = 'blog', title }: BreadcrumbsProps) => {
  const displayType = type === 'projects' ? 'Projects' : 'Blog'
  const linkPath = type === 'projects' ? ROUTES.PROJECTS.ROOT : ROUTES.BLOG.ROOT

  return (
    <nav aria-label="breadcrumb" style={{ marginBottom: '1rem' }}>
      <span className="text-text-muted dark:text-dark-text-muted hover:underline">
        <Link to={ROUTES.HOME}>Home</Link>
      </span>
      <span className="text-text dark:text-dark-text"> / </span>
      {title ? (
        <>
          <span className="text-text-muted dark:text-dark-text-muted hover:underline">
            <Link to={linkPath}>{displayType}</Link>
          </span>
          <span className="text-text dark:text-dark-text"> / {title}</span>
        </>
      ) : (
        <span className="text-text dark:text-dark-text">{displayType}</span>
      )}
    </nav>
  )
}

export { Breadcrumbs }
