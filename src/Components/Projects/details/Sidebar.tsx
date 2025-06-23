import { Link as ScrollLink } from 'react-scroll'
import { sections } from './sections/sections'
import { ProjectType } from '../types'

interface SidebarProps {
  project: ProjectType
}

const Sidebar = ({ project }: SidebarProps) => {
  const filteredSections = sections.filter((section) =>
    Boolean(project[section.id as keyof ProjectType]),
  )

  return (
    <nav
      className={`top-12 z-20 flex h-fit flex-col gap-2 rounded-lg text-sm md:sticky`}
    >
      {filteredSections.map((section) => (
        <ScrollLink
          key={section.label}
          to={section.label}
          smooth
          duration={400}
          offset={-60}
          className="text-text-muted dark:text-dark-text-muted border-secondary-text dark:border-secondary-text-dark hover:text-primary hover:bg-background-light hover:dark:bg-dark-background-light cursor-pointer rounded-r border-l-2 p-2 text-nowrap transition duration-300 ease-in-out"
          activeClass="active-sidebar-link"
          spy
        >
          {section.label}
        </ScrollLink>
      ))}
    </nav>
  )
}

export default Sidebar
