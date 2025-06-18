import { ProjectType } from '../../types'
import Card from '../Card'
import { sections } from './sections'

const sectionIndex = 5

interface StateProps {
  project: ProjectType
}

const State = ({ project }: StateProps) => {
  return (
    <Card title={sections[sectionIndex]}>
      <h3
        className={`text-sm uppercase italic ${project.state === 'Complete' ? 'text-accent-gradient' : 'text-secondary-text dark:text-secondary-text-dark'}`}
      >
        {project.state}
      </h3>

      <p>{project.conclusion}</p>

      <span className="text-gradient-accent flex items-center gap-2">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          View project
        </a>
        <i className="fa fa-external-link" aria-hidden="true"></i>
      </span>
    </Card>
  )
}

export default State
