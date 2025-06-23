import { ProjectType } from '../../types'
import Card from '../Card'
import { sections } from './sections'

const sectionIndex = 6

interface StateProps {
  project: ProjectType
}

const State = ({ project }: StateProps) => {
  if (!project.state) return null

  const { state, conclusion } = project.state
  const { link } = project

  return (
    <Card title={sections[sectionIndex].label}>
      {state && (
        <h3
          className={`text-sm uppercase italic ${state === 'Complete' ? 'text-gradient-accent' : 'text-secondary-text dark:text-secondary-text-dark'}`}
        >
          {state}
        </h3>
      )}

      {conclusion && <p>{conclusion}</p>}

      {link && (
        <span className="text-gradient-accent flex items-center gap-2">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View project
          </a>
          <i className="fa fa-external-link" aria-hidden="true"></i>
        </span>
      )}
    </Card>
  )
}

export default State
