import { ProjectType } from '../../types'
import { sections } from './sections'
import Card from '../Card'

const sectionIndex = 2

interface ChallengesProps {
  project: ProjectType
}

const Challenges = ({ project }: ChallengesProps) => {
  if (!project.challenges) return null

  const { challenges } = project.challenges

  return (
    <Card title={sections[sectionIndex].label}>
      <div className="flex w-full flex-col gap-8">
        {challenges?.map((challenge, index) => (
          <div
            key={challenge.challenge}
            className={`grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 ${index > 0 ? 'border-border dark:border-dark-border border-t pt-8' : ''}`}
          >
            <div className="flex flex-col gap-1">
              <h4 className="text-text-muted dark:text-dark-text-muted text-sm font-semibold uppercase ">
                Challenge
              </h4>
              <p className="text-text dark:text-dark-text">
                {challenge.challenge}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-gradient-accent text-sm font-semibold uppercase ">
                Solution
              </h4>
              <p className="text-text dark:text-dark-text">
                {challenge.solution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default Challenges
