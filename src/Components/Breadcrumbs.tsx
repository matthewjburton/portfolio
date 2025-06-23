import { Link } from 'react-router-dom'

interface BreadcrumbsProps {
  project: string
}

const Breadcrumbs = ({ project }: BreadcrumbsProps) => (
  <nav aria-label="breadcrumb" style={{ marginBottom: '1rem' }}>
    <span className="text-text-muted dark:text-dark-text-muted hover:underline">
      <Link to="/">Home</Link>
    </span>
    <span className="text-text dark:text-dark-text"> / {project}</span>
  </nav>
)

export default Breadcrumbs
