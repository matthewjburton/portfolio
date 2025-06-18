import { Link } from 'react-router-dom'

interface BreadcrumbsProps {
  project: string
}

const Breadcrumbs = ({ project }: BreadcrumbsProps) => (
  <nav aria-label="breadcrumb" style={{ marginBottom: '1rem' }}>
    <span className="text-secondary-text dark:text-secondary-text-dark">
      <Link to="/">Home</Link> /{' '}
    </span>
    <span className="text-primary-text dark:text-primary-text-dark">
      {project}
    </span>
  </nav>
)

export default Breadcrumbs
