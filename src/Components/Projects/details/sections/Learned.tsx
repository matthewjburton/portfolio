import SkillPill from '@/components/skills/SkillPill'
import { ProjectType } from '../../types'
import { sections } from './sections'
import { Element } from 'react-scroll'
import FadeInSection from '@/components/FadeInSection'

const sectionIndex = 4

interface LearnedProps {
  project: ProjectType
}

const Learned = ({ project }: LearnedProps) => {
  if (!project.learned) return null

  const { learned } = project.learned

  return (
    <FadeInSection>
      <Element name={sections[sectionIndex].label}>
        <div className="flex w-full flex-col items-start gap-8 px-8 lg:px-16">
          <h2 className="text-start text-xl font-bold md:text-2xl lg:text-3xl">
            {sections[sectionIndex].label}
          </h2>
          <div className="flex flex-wrap justify-start gap-2">
            {learned?.map((learning) => (
              <SkillPill
                key={learning}
                skill={{ iconClass: '', label: learning }}
                variant="contained"
              />
            ))}
          </div>
        </div>
      </Element>
    </FadeInSection>
  )
}

export default Learned
