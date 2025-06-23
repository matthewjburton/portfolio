import { ProjectType } from '../../types'
import Card from '../Card'
import { sections } from './sections'

const sectionIndex = 0

interface PurposeProps {
  project: ProjectType
}

const Purpose = ({ project }: PurposeProps) => {
  if (!project.purpose) return null

  const { type, purpose, goals } = project.purpose

  return (
    <Card title={sections[sectionIndex].label}>
      <h3
        className={`text-text-muted dark:text-dark-text-muted text-sm uppercase italic`}
      >
        {type} Project
      </h3>

      <p className="text-text dark:text-dark-text">{purpose}</p>

      {goals && (
        <div className="flex flex-col gap-4">
          <h3 className="text-text-muted dark:text-dark-text-muted text-sm uppercase">
            Goals
          </h3>
          <ul className="text-text dark:text-dark-text list-none text-left md:text-lg">
            {goals.map((goal) => (
              <li key={goal} className="flex items-center gap-2">
                <span className="text-gradient-accent text-sm">◆</span>
                <span>{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  )
}

export default Purpose
