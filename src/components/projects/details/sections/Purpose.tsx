import { ProjectType } from '../../types'
import Card from '../Card'
import { sections } from './sections'

const sectionIndex = 0

interface PurposeProps {
  project: ProjectType
}

const Purpose = ({ project }: PurposeProps) => {
  return (
    <Card title={sections[sectionIndex]}>
      <p className="text-secondary-text dark:text-secondary-text-dark mb-6 text-lg italic">
        {project.purpose}
      </p>

      <div className="flex flex-col gap-4">
        <h3 className="text-sm uppercase">Goals</h3>
        <ul className="text-primary-text dark:text-primary-text-dark list-none text-left md:text-lg">
          {project.goals?.map((goal) => <li key={goal}>{goal}</li>)}
        </ul>
      </div>
    </Card>
  )
}

export default Purpose
