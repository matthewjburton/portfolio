import React from 'react'

interface LinkProps {
  link: string
  text: string
}

const Link: React.FC<LinkProps> = ({ text }) => {
  return (
    <div className="bg-accent text-container dark:text-container-dark dark:bg-accent-dark rounded-full px-4 py-2">
      {text}
    </div>
  )
}

export default Link
