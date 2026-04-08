import useSticky from '@/hooks/useSticky'
import { useDarkMode } from '@/hooks/useDarkMode'
import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

const sections = ['Home', 'Projects', 'About']

const Nav: React.FC = () => {
  const isSticky = useSticky()
  const { isDark, toggle } = useDarkMode()

  return (
    <nav
      className={`bg-background dark:bg-dark-background z-20 flex w-full flex-row items-center justify-center text-2xl ${isSticky ? 'sticky top-0 border-b border-border shadow-sm dark:border-dark-border dark:shadow-md' : ''}`}
    >
      <div className="flex flex-row">
        {sections.map((section) => (
          <ScrollLink
            key={section}
            to={section}
            duration={500}
            smooth
            spy={true}
            offset={-100}
            className="px-8 py-6 hover:cursor-pointer"
            activeClass="text-gradient-accent border-b-2 border-accent dark:border-dark-accent transition duration-300 ease-in-out"
          >
            {section}
          </ScrollLink>
        ))}
      </div>
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

export default Nav
