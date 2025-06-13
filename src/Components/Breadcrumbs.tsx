import { Link } from 'react-router-dom'

const Breadcrumbs = () => (
  <nav aria-label="breadcrumb" style={{ marginBottom: '1rem' }}>
    <Link to="/">Home</Link> / <span>Project</span>
  </nav>
)

export default Breadcrumbs
