import SkillPill from '@/components/skills/SkillPill'
import { ProjectType } from '../../types'
import { sections } from './sections'
import { Element } from 'react-scroll'

const sectionIndex = 1
const defaultRole = 'Not Specified'

interface RoleProps {
  project: ProjectType
}

const Role = ({ project }: RoleProps) => {
  return (
    <Element name={sections[sectionIndex]}>
      <div className="flex w-full flex-col items-start gap-8 px-8 lg:px-16">
        <h2 className="text-start text-xl font-bold md:text-2xl lg:text-3xl">
          {sections[sectionIndex]}
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <SkillPill
            skill={{ label: project.role ?? defaultRole }}
            variant="outlined"
          />{' '}
          <span className="text-secondary-text dark:text-secondary-text-dark">
            &
          </span>{' '}
          {project.responsibilities?.map((responsibility) => (
            <SkillPill
              key={responsibility}
              skill={{ label: responsibility }}
              variant="outlined"
            />
          ))}
        </div>
      </div>
    </Element>
  )
}

export default Role
