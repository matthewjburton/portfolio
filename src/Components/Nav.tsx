import { SECTIONS } from '@/content/sections'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useSticky } from '@/hooks/useSticky'

const Nav = () => {
  const isSticky = useSticky()
  const active = useActiveSection(Object.values(SECTIONS))
  return (
    <nav
      className={`bg-background dark:bg-dark-background z-20 flex w-full flex-row justify-center text-2xl ${isSticky ? 'sticky top-0 shadow-md' : ''}`}
    >
      {Object.entries(SECTIONS).map(([_, section]) => (
        <a href={`#${section}`} key={section} className={`px-8 py-6 hover:cursor-pointer
          ${active === section ? 'text-gradient-accent border-b-2 border-accent dark:border-dark-accent duration-300 transition ease-in-out' : ''}`}
        >
          {section}
        </a>
      ))}
    </nav>
  )
}

export { Nav }
