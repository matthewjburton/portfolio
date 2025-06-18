import { Link as ScrollLink } from 'react-scroll'
import { sections } from './sections/sections'

const Sidebar = () => {
  return (
    <nav
      className={`top-12 z-20 flex h-fit flex-col gap-4 rounded-lg text-sm md:sticky`}
    >
      {sections.map((section) => (
        <ScrollLink
          key={section}
          to={section}
          smooth
          duration={400}
          offset={-60}
          className="text-secondary-text dark:text-secondary-text-dark border-secondary-text dark:border-secondary-text-dark hover:text-primary cursor-pointer border-l-2 px-2 text-nowrap transition duration-300 ease-in-out"
          activeClass="active-sidebar-link"
          spy
        >
          {section}
        </ScrollLink>
      ))}
    </nav>
  )
}

export default Sidebar
