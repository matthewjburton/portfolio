import React from 'react'
import FadeInSection from './FadeInSection'

interface HeaderProps {
  text: string
}

const Header: React.FC<HeaderProps> = ({ text }) => {
  return (
    <FadeInSection>
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-gradient-accent text-4xl font-bold tracking-tight md:text-5xl">
          {text}
        </h2>
        <div className="gradient-accent h-1 w-12 rounded-full" />
      </div>
    </FadeInSection>
  )
}

export default Header
