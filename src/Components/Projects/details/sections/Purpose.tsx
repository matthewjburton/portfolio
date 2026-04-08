import { Tooltip } from '@/components/Tooltip'
import { ProjectType } from '@/types/content'
import { Card } from '../Card'
import { sections } from './sections'

const sectionIndex = 0

interface PurposeProps {
  project: ProjectType
}

const Purpose = ({ project }: PurposeProps) => {
  if (!project.purpose) return null

  const { type, purpose, goals } = project.purpose
  const role = project.role
  const stack = project.stack
  const title = sections[sectionIndex].label

  return (
    <section id={title} className="scroll-mt-32">
      <Card title={title}>
        <div className="text-text-muted dark:text-dark-text-muted flex flex-wrap items-center gap-x-3 text-sm uppercase italic">
          {type && <span>{type} Project</span>}
          {type && role?.role && <span>&middot;</span>}
          {role?.role && <span>{role.role}</span>}
        </div>

        <p className="text-text dark:text-dark-text">{purpose}</p>

        {goals && (
          <div className="flex flex-col gap-4">
            <h3 className="text-text-muted dark:text-dark-text-muted text-sm uppercase">
              Goals
            </h3>
            <ul className="text-text dark:text-dark-text list-none text-left md:text-lg">
              {goals.map((goal) => (
                <li key={goal} className="flex items-center gap-2">
                  <span className="text-gradient-accent text-sm">&#9670;</span>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {role?.responsibilities && (
          <div className="flex flex-col gap-3">
            <h3 className="text-text-muted dark:text-dark-text-muted text-sm uppercase">
              Responsibilities
            </h3>
            <p className="text-text dark:text-dark-text">
              {role.responsibilities.join(' \u00B7 ')}
            </p>
          </div>
        )}

        {stack.length > 0 && (
          <div className="flex flex-col gap-3">
            <h3 className="text-text-muted dark:text-dark-text-muted text-sm uppercase">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {stack.map((skill) => (
                <Tooltip key={skill.label} tooltip={skill.label}>
                  {skill.iconClass && (
                    <i className={`${skill.iconClass} text-gradient-accent text-2xl`} />
                  )}
                </Tooltip>
              ))}
            </div>
          </div>
        )}
      </Card>
    </section>
  )
}

export { Purpose }
