import useSticky from '@/hooks/useSticky'
import { useDarkMode } from '@/hooks/useDarkMode'
import React, { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { useNavigate } from 'react-router-dom'

const defaultSections = ['Home', 'Projects', 'About']

interface NavProps {
  sections?: string[]
  backTo?: string
}

const Nav: React.FC<NavProps> = ({
  sections = defaultSections,
  backTo,
}) => {
  const isSticky = useSticky()
  const { isDark, toggle } = useDarkMode()
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(sections[0])
  const navigate = useNavigate()

  // Breakpoint: 875px for project pages (more sections), sm (640px) for homepage
  const showAbove = backTo ? 'hidden min-[875px]:flex' : 'hidden sm:flex'
  const showAboveBlock = backTo ? 'hidden min-[875px]:block' : 'hidden sm:block'
  const hiddenAbove = backTo ? 'min-[875px]:hidden' : 'sm:hidden'

  // Close menu on resize above breakpoint
  useEffect(() => {
    const query = backTo ? '(min-width: 875px)' : '(min-width: 640px)'
    const mq = window.matchMedia(query)
    const handler = () => {
      if (mq.matches) {
        setMenuOpen(false)
      }
    }
    mq.addEventListener('change', handler)
    return () => {
      mq.removeEventListener('change', handler)
    }
  }, [backTo])

  return (
    <nav
      className={`bg-background dark:bg-dark-background z-20 flex w-full flex-col text-2xl ${isSticky ? 'sticky top-0 border-b border-border shadow-sm dark:border-dark-border dark:shadow-md' : ''}`}
    >
      {/* Top bar */}
      <div className="flex w-full items-center justify-center">
        {/* Left button — back arrow or hamburger, visible below breakpoint */}
        {backTo ? (
          <button
            onClick={() => {
              void navigate(backTo)
            }}
            type="button"
            className={`text-text-muted dark:text-dark-text-muted hover:text-accent dark:hover:text-dark-accent absolute left-4 cursor-pointer p-2 text-xl transition-colors ${hiddenAbove}`}
            aria-label="Back to home"
          >
            <i className="fa-solid fa-arrow-left" />
          </button>
        ) : (
          <button
            onClick={() => {
              setMenuOpen((prev) => !prev)
            }}
            type="button"
            className={`text-text-muted dark:text-dark-text-muted hover:text-accent dark:hover:text-dark-accent absolute left-4 cursor-pointer p-2 text-xl transition-colors ${hiddenAbove}`}
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} />
          </button>
        )}

        {/* Back button — desktop, visible above breakpoint */}
        {backTo && (
          <button
            onClick={() => {
              void navigate(backTo)
            }}
            type="button"
            className={`text-text-muted dark:text-dark-text-muted hover:text-accent dark:hover:text-dark-accent absolute left-4 cursor-pointer p-2 text-xl transition-colors ${showAboveBlock} md:left-12 lg:left-24`}
            aria-label="Back to home"
          >
            <i className="fa-solid fa-arrow-left" />
          </button>
        )}

        {/* Nav links — hidden below breakpoint */}
        <div className={`flex-row ${showAbove}`}>
          {sections.map((section) => (
            <ScrollLink
              key={section}
              to={section}
              duration={500}
              smooth
              spy={true}
              offset={-100}
              className="px-6 py-6 hover:cursor-pointer"
              activeClass="text-gradient-accent border-b-2 border-accent dark:border-dark-accent transition duration-300 ease-in-out"
              onSetActive={() => {
                setActiveSection(section)
              }}
            >
              {section}
            </ScrollLink>
          ))}
        </div>

        {/* Active section label — visible below breakpoint */}
        <span className={`text-gradient-accent py-6 text-lg font-medium ${hiddenAbove}`}>
          {activeSection}
        </span>

        {/* Theme toggle */}
        <button
          onClick={toggle}
          type="button"
          className="text-text-muted dark:text-dark-text-muted hover:text-accent dark:hover:text-dark-accent absolute right-4 cursor-pointer p-2 text-xl transition-colors md:right-12 lg:right-24"
          aria-label="Toggle dark mode"
        >
          <i className={`fa-solid ${isDark ? 'fa-sun' : 'fa-moon'}`} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && !backTo && (
        <div className={`border-border dark:border-dark-border flex flex-col border-t ${hiddenAbove}`}>
          {sections.map((section) => (
            <ScrollLink
              key={section}
              to={section}
              duration={500}
              smooth
              spy={true}
              offset={-100}
              className="text-text dark:text-dark-text hover:bg-border/50 dark:hover:bg-dark-border/50 px-4 py-4 text-lg transition-colors hover:cursor-pointer"
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
