import useSticky from '@/hooks/useSticky'
import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

const sections = ['Home', 'Projects', 'About']

const Nav: React.FC = () => {
  const isSticky = useSticky()

  return (
    <nav
      className={`bg-background dark:bg-dark-background z-20 flex w-full flex-row justify-center text-2xl ${isSticky ? 'sticky top-0 shadow-md' : ''}`}
    >
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
    </nav>
  )
}

export default Nav
