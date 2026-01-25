import { useActiveSection } from '@/hooks/useActiveSection'
import { sections } from './sections/sections'
import { ProjectType } from '@/types/content'

interface SidebarProps {
  project: ProjectType
}

const Sidebar = ({ project }: SidebarProps) => {
  const filteredSections = sections.filter((section) =>
    Boolean(project[section.id as keyof ProjectType]),
  )

  const handleScroll = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const rect = el.getBoundingClientRect()
      const scrollTop = window.scrollY + rect.top - window.innerHeight / 2 + rect.height / 2
      window.scrollTo({ top: scrollTop, behavior: 'smooth' })
    }
  }

  const active = useActiveSection(filteredSections.map((section) => section.label))

   return (
    <nav className="top-12 z-20 flex h-fit flex-col gap-2 text-sm md:sticky">
      {filteredSections.map((section) => (
        <button
          key={section.label}
          onClick={() => handleScroll(section.label)}
          className={`border-l-2 p-2 cursor-pointer transition duration-300 ease-in-out text-start
            ${
              active === section.label
                ? 'text-primary border-primary bg-background-light dark:bg-dark-background-light border-accent dark:border-dark-accent'
                : 'text-text-muted border-text-muted dark:text-dark-text-muted dark:border-dark-text-muted hover:text-primary hover:bg-background-light hover:dark:bg-dark-background-light'
            }`}
        >
          {section.label}
        </button>
      ))}
    </nav>
  )
}

export { Sidebar }
