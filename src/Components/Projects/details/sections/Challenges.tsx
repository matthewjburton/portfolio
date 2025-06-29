import { Element } from 'react-scroll'
import { ProjectType } from '../../types'
import { sections } from './sections'
import FadeInSection from '@/components/FadeInSection'

const sectionIndex = 4

interface ChallengesProps {
  project: ProjectType
}

const Challenges = ({ project }: ChallengesProps) => {
  if (!project.challenges) return null

  const { challenges } = project.challenges

  return (
    <FadeInSection>
      <Element name={sections[sectionIndex].label}>
        <div className="flex w-full flex-col items-start gap-8">
          <h2 className="px-8 text-start text-xl font-bold md:text-2xl lg:px-16 lg:text-3xl">
            {sections[sectionIndex].label}
          </h2>

          <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
            {challenges?.map((challenge) => (
              <div
                key={challenge.challenge}
                className="bg-background dark:bg-dark-background dark:border-t-dark-highlight border-t-highlight border-border dark:border-dark-border grid h-full grid-cols-1 gap-6 rounded-lg border p-8 shadow-lg"
              >
                <div className="flex h-full flex-col items-start gap-2">
                  <h4 className="text-text-muted dark:text-dark-text-muted text-sm font-semibold uppercase">
                    Challenge
                  </h4>
                  <p className="dark:text-dark-text text-text mb-3">
                    {challenge.challenge}
                  </p>
                </div>
                <div className="flex h-full flex-col items-start gap-2">
                  <h4 className="text-gradient-accent text-sm font-semibold uppercase">
                    Solution
                  </h4>
                  <p className="dark:text-dark-text text-text">
                    {challenge.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </FadeInSection>
  )
}

export default Challenges
