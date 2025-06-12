import React from 'react'
import FadeInSection from './FadeInSection'

interface HeaderProps {
  text: string
}

const Header: React.FC<HeaderProps> = ({ text }) => {
  return (
    <div className="self-center">
      <FadeInSection>
        <div className="text-gradient-accent border-b-8 py-4 text-5xl font-bold">
          {text}
        </div>
      </FadeInSection>
    </div>
  )
}

export default Header
