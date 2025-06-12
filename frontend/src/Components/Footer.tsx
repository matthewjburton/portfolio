import React from 'react'

import { Link as ScrollLink } from 'react-scroll'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className="bg-container dark:bg-container-dark relative mt-24 flex w-full flex-col items-center gap-8 py-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <ScrollLink
          to="Home"
          duration="500"
          smooth
          spy={true}
          className="gradient-accent text-background dark:text-background-dark flex items-center justify-center rounded-full p-4 text-xl"
        >
          <i className="fa-solid fa-angles-up" />
        </ScrollLink>
      </div>
      <div className="mt-8 flex w-full flex-row justify-center gap-8">
        <ScrollLink to="Home" duration="500" smooth spy={true}>
          <picture>
            <source
              srcSet={`/Images/white-logo.png`}
              media="(prefers-color-scheme: dark)"
            />
            <source
              srcSet={`/Images/black-logo.png`}
              media="(prefers-color-scheme: light)"
            />
            <img alt="Logo" className="h-6 w-6" />
          </picture>
        </ScrollLink>
        <a href="mailto:mattjburton64@gmail.com">
          <i className="fa-solid fa-envelope" />
        </a>
        <a
          href="https://github.com/matthewjburton"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/matthew-j-burton/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin" />
        </a>
      </div>
      <div className="text-sm uppercase">
        Matthew Burton &copy;{currentYear}
      </div>
    </div>
  )
}

export default Footer
