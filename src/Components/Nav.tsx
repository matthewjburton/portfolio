import useSticky from '@/hooks/useSticky'
import { useDarkMode } from '@/hooks/useDarkMode'
import React, { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'

const sections = ['Home', 'Projects', 'About']

const Nav: React.FC = () => {
  const isSticky = useSticky()
  const { isDark, toggle } = useDarkMode()
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on resize above sm breakpoint
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 640px)')
    const handler = () => {
      if (mq.matches) {
        setMenuOpen(false)
      }
    }
    mq.addEventListener('change', handler)
    return () => {
      mq.removeEventListener('change', handler)
    }
  }, [])

  return (
    <nav
      className={`bg-background dark:bg-dark-background z-20 flex w-full flex-col text-2xl ${isSticky ? 'sticky top-0 border-b border-border shadow-sm dark:border-dark-border dark:shadow-md' : ''}`}
    >
      {/* Top bar */}
      <div className="flex w-full items-center justify-center">
        {/* Hamburger — visible below sm */}
        <button
          onClick={() => {
            setMenuOpen((prev) => !prev)
          }}
          type="button"
          className="text-text-muted dark:text-dark-text-muted hover:text-accent dark:hover:text-dark-accent absolute left-8 cursor-pointer p-2 text-xl transition-colors sm:hidden"
          aria-label="Toggle menu"
        >
          <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} />
        </button>

        {/* Nav links — hidden below sm */}
        <div className="hidden flex-row sm:flex">
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

        {/* Spacer for mobile to keep toggle right-aligned */}
        <div className="py-6 sm:hidden" />

        {/* Theme toggle */}
        <button
          onClick={toggle}
          type="button"
          className="text-text-muted dark:text-dark-text-muted hover:text-accent dark:hover:text-dark-accent absolute right-8 cursor-pointer p-2 text-xl transition-colors md:right-12 lg:right-24"
          aria-label="Toggle dark mode"
        >
          <i className={`fa-solid ${isDark ? 'fa-sun' : 'fa-moon'}`} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="border-border dark:border-dark-border flex flex-col border-t sm:hidden">
          {sections.map((section) => (
            <ScrollLink
              key={section}
              to={section}
              duration={500}
              smooth
              spy={true}
              offset={-100}
              className="text-text dark:text-dark-text hover:bg-border/50 dark:hover:bg-dark-border/50 px-8 py-4 text-lg transition-colors hover:cursor-pointer"
              activeClass="text-gradient-accent"
              onClick={() => {
                setMenuOpen(false)
              }}
            >
              {section}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Nav
