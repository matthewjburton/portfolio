import React from 'react'

interface LinkProps {
  link: string
  text: string
}

const Link: React.FC<LinkProps> = ({ link, text }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-accent text-container dark:text-container-dark dark:bg-accent-dark rounded-full px-4 py-2"
    >
      {text}
    </a>
  )
}

export default Link
