import SkillPill from '@/components/skills/SkillPill'
import { ProjectType } from '../../types'
import { sections } from './sections'
import { Element } from 'react-scroll'
import FadeInSection from '@/components/FadeInSection'

const sectionIndex = 1
const defaultRole = 'Not Specified'

interface RoleProps {
  project: ProjectType
}

const Role = ({ project }: RoleProps) => {
  if (!project.role) return null

  const { role = defaultRole, responsibilities } = project.role

  return (
    <FadeInSection>
      <Element name={sections[sectionIndex].label}>
        <div className="flex w-full flex-col items-start gap-8 px-8 lg:px-16">
          <h2 className="text-start text-xl font-bold md:text-2xl lg:text-3xl">
            {sections[sectionIndex].label}
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            {role && <SkillPill skill={{ label: role }} variant="outlined" />}
            {role && responsibilities && (
              <>
                {' '}
                <span className="text-text-muted dark:text-dark-text-muted">
                  &
                </span>{' '}
              </>
            )}
            {responsibilities?.map((responsibility) => (
              <SkillPill
                key={responsibility}
                skill={{ label: responsibility }}
                variant="outlined"
              />
            ))}
          </div>
        </div>
      </Element>
    </FadeInSection>
  )
}

export default Role
