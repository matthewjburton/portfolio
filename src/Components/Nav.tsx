import { SECTIONS } from '@/content/sections'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useSticky } from '@/hooks/useSticky'
import { useDarkMode } from '@/hooks/useDarkMode'

const Nav = () => {
  const isSticky = useSticky()
  const active = useActiveSection(Object.values(SECTIONS))
  const { isDark, toggle } = useDarkMode()

  return (
    <nav
      className={`bg-background dark:bg-dark-background z-20 flex w-full flex-row items-center justify-center text-2xl ${isSticky ? 'sticky top-0 border-b border-border shadow-sm dark:border-dark-border dark:shadow-md' : ''}`}
    >
      {Object.entries(SECTIONS).map(([_, section]) => (
        <a
          href={`#${section}`}
          key={section}
          className={`px-8 py-6 hover:cursor-pointer ${active === section ? 'text-gradient-accent border-b-2 border-accent dark:border-dark-accent duration-300 transition ease-in-out' : ''}`}
        >
          {section}
        </a>
      ))}
      <button
        onClick={toggle}
        className="text-text-muted dark:text-dark-text-muted hover:text-accent dark:hover:text-dark-accent absolute right-8 cursor-pointer p-2 text-xl transition-colors md:right-12 lg:right-24"
        aria-label="Toggle dark mode"
      >
        <i className={`fa-solid ${isDark ? 'fa-sun' : 'fa-moon'}`} />
      </button>
    </nav>
  )
}

export { Nav }
