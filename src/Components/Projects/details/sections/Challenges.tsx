import { ProjectType } from '@/types/content'
import { Card } from '../Card'
import { sections } from './sections'

const sectionIndex = 2

interface ChallengesProps {
  project: ProjectType
}

const Challenges = ({ project }: ChallengesProps) => {
  if (!project.challenges) return null

  const { challenges } = project.challenges
  const title = sections[sectionIndex].label

  return (
    <section id={title} className="scroll-mt-32">
      <Card title={title}>
        <div className="flex w-full flex-col gap-8">
          <div className="hidden grid-cols-2 gap-8 md:grid">
            <h4 className="text-text-muted dark:text-dark-text-muted text-sm font-semibold uppercase">
              Challenge
            </h4>
            <h4 className="text-gradient-accent text-sm font-semibold uppercase">
              Solution
            </h4>
          </div>
          {challenges?.map((challenge, index) => (
            <div
              key={challenge.challenge}
              className={`grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 ${index > 0 ? 'border-border dark:border-dark-border border-t pt-8' : ''}`}
            >
              <p className="text-text dark:text-dark-text">
                {challenge.challenge}
              </p>
              <p className="text-text dark:text-dark-text">
                {challenge.solution}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </section>
  )
}

export { Challenges }
