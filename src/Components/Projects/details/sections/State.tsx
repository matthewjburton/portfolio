import { ProjectType } from '../../types'
import Card from '../Card'
import { sections } from './sections'

const sectionIndex = 5

interface StateProps {
  project: ProjectType
}

const State = ({ project }: StateProps) => {
  if (!project.state) return null

  const { state, conclusion } = project.state

  if (!project.link) return null
  const { link } = project

  return (
    <Card title={sections[sectionIndex].label}>
      {state && (
        <h3
          className={`text-sm uppercase italic ${state === 'Complete' ? 'text-accent-gradient' : 'text-secondary-text dark:text-secondary-text-dark'}`}
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
