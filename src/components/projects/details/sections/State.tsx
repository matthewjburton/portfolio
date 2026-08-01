import { ProjectType } from '../../types'
import Card from '../Card'
import { sections } from './sections'

const sectionIndex = 3

interface StateProps {
  project: ProjectType
}

const getLinkLabel = (url: string): string => {
  if (url.includes('github.com')) return 'View on GitHub'
  if (url.includes('itch.io')) return 'Play on itch.io'
  if (url.includes('steampowered.com') || url.includes('store.steam'))
    return 'View on Steam'
  if (url.includes('testflight.apple.com')) return 'Join TestFlight'
  if (url.includes('netlify.app')) return 'Try it live'
  return 'View project'
}

const State = ({ project }: StateProps) => {
  if (!project.state) return null

  const { state, lastUpdated, conclusion } = project.state
  const { link } = project
  const learned = project.learned?.learned

  return (
    <Card title={sections[sectionIndex].label}>
      {state && (
        <h3
          className={`flex items-center gap-2 text-sm uppercase italic ${state === 'Complete' ? 'text-gradient-accent' : 'text-text-muted dark:text-dark-text-muted'}`}
        >
          {state}
          {lastUpdated && (
            <span className="text-text-muted dark:text-dark-text-muted text-xs normal-case not-italic">
              · Updated {lastUpdated}
            </span>
          )}
        </h3>
      )}

      {conclusion && <p>{conclusion}</p>}

      {learned && learned.length > 0 && (
        <div className="flex flex-col gap-3">
          <h3 className="text-text-muted dark:text-dark-text-muted text-sm uppercase">
            What I Learned
          </h3>
          <p className="text-text dark:text-dark-text">
            {learned.join(' · ')}
          </p>
        </div>
      )}

      {link && (
        <span className="text-gradient-accent flex items-center gap-2">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {getLinkLabel(link)}
          </a>
          <i className="fa fa-external-link" aria-hidden="true"></i>
        </span>
      )}
    </Card>
  )
}

export default State
