import { Element } from 'react-scroll'
import { ProjectType } from '../../types'
import { sections } from './sections'

const sectionIndex = 3

interface ChallengesProps {
  project: ProjectType
}

const Challenges = ({ project }: ChallengesProps) => {
  const challenges = project.challenges ?? []

  if (challenges.length === 0) return null

  return (
    <Element name={sections[sectionIndex]}>
      <div className="flex w-full flex-col items-start gap-8">
        <h2 className="px-8 text-start text-xl font-bold md:text-2xl lg:px-16 lg:text-3xl">
          {sections[sectionIndex]}
        </h2>

        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
          {challenges.map((challenge) => (
            <div
              key={challenge.challenge}
              className="bg-container dark:bg-container-dark grid h-full grid-cols-1 gap-6 rounded-lg p-8"
            >
              <div className="flex h-full flex-col items-start gap-2">
                <h4 className="text-secondary-text dark:text-secondary-text-dark text-sm font-semibold uppercase">
                  Challenge
                </h4>
                <p className="dark:text-primary-text-dark text-primary-text mb-3">
                  {challenge.challenge}
                </p>
              </div>
              <div className="flex h-full flex-col items-start gap-2">
                <h4 className="text-gradient-accent text-sm font-semibold uppercase">
                  Solution
                </h4>
                <p className="dark:text-primary-text-dark text-primary-text">
                  {challenge.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  )
}

export default Challenges
