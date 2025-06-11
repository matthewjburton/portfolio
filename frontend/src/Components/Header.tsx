import React from 'react'

interface HeaderProps {
  text: string
}

const Header: React.FC<HeaderProps> = ({ text }) => {
  return (
    <div className="border-accent dark:border-accent-dark self-center border-b-8 py-4 text-5xl font-bold">
      {text}
    </div>
  )
}

export default Header
