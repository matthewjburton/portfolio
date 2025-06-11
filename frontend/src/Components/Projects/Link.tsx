import React from 'react'

interface LinkProps {
  link: string
  text: string
}

const Link: React.FC<LinkProps> = ({ link, text }) => {
  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-accent dark:bg-accent-dark group-hover:bg-background dark:group-hover:bg-container-dark rounded-lg px-4 py-2 transition duration-300 ease-in-out"
      >
        {text}
      </a>
    </>
  )
}

export default Link
