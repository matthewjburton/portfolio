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
        className={`text-secondary-text dark:text-secondary-text-dark text-sm uppercase italic`}
      >
        {type} Project
      </h3>
      <p className="text-primary-text dark:text-primary-text-dark">{purpose}</p>

      {goals && (
        <div className="flex flex-col gap-4">
          <h3 className="text-secondary-text dark:text-secondary-text-dark text-sm uppercase">
            Goals
          </h3>
          <ul className="text-primary-text dark:text-primary-text-dark list-none text-left md:text-lg">
            {goals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  )
}

export default Purpose
