import React, { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'

const sections = ['Hero', 'Projects', 'About']

const Nav: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={`bg-container dark:bg-container-dark z-20 flex w-full flex-row justify-center text-2xl ${isSticky ? 'sticky top-0 shadow-md' : ''}`}
    >
      {sections.map((section) => (
        <ScrollLink
          key={section}
          to={section}
          duration={500}
          smooth
          spy={true}
          offset={-100}
          className="px-8 py-6"
          activeClass="text-gradient-accent border-b-2 border-accent dark:border-accent-dark transition duration-300 ease-in-out"
        >
          {section}
        </ScrollLink>
      ))}
    </nav>
  )
}

export default Nav
