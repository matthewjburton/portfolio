import { Link } from 'react-router-dom'
import { ROUTES } from '@/router/routes'

interface BreadcrumbsProps {
  project: string
}

const Breadcrumbs = ({ project }: BreadcrumbsProps) => (
  <nav aria-label="breadcrumb" style={{ marginBottom: '1rem' }}>
    <span className="text-text-muted dark:text-dark-text-muted hover:underline">
      <Link to={ROUTES.HOME}>Home</Link>
    </span>
    <span className="text-text dark:text-dark-text"> / {project}</span>
  </nav>
)

export { Breadcrumbs }
