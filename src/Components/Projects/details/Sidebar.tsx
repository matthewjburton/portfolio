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
      className={`top-12 z-20 flex h-fit flex-col gap-4 rounded-lg text-sm md:sticky`}
    >
      {filteredSections.map((section) => (
        <ScrollLink
          key={section.label}
          to={section.label}
          smooth
          duration={400}
          offset={-60}
          className="text-secondary-text dark:text-secondary-text-dark border-secondary-text dark:border-secondary-text-dark hover:text-primary cursor-pointer border-l-2 px-2 text-nowrap transition duration-300 ease-in-out"
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
