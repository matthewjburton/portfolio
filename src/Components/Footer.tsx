import { footer } from '../Content/footer'
import React from 'react'

import { Link as ScrollLink } from 'react-scroll'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className="bg-container dark:bg-container-dark relative mt-12 flex w-full flex-col items-center gap-8 py-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <div className="group relative">
          <ScrollLink
            to="Home"
            duration="500"
            smooth
            spy={true}
            className="gradient-accent text-background dark:text-background-dark flex items-center justify-center rounded-full p-4 text-xl transition duration-300 ease-in-out hover:shadow-[0_0_10px_#8fcf45] hover:dark:shadow-[0_0_10px_#82db4f]"
          >
            <i className="fa-solid fa-angles-up" />
          </ScrollLink>

          <span className="bg-container text-primary-text dark:bg-container-dark dark:text-primary-text-dark absolute -top-10 left-1/2 -translate-x-1/2 rounded px-2 py-1 text-xs whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100">
            Back to Top
          </span>
        </div>
      </div>

      <div className="mt-8 flex w-full flex-row justify-center gap-8">
        {footer.map((action) => (
          <div key={action.tooltip} className="group relative">
            <a href={action.link}>
              <i className={action.icon} />
            </a>
            <span className="bg-container text-primary-text dark:bg-container-dark dark:text-primary-text-dark absolute -top-10 left-1/2 -translate-x-1/2 rounded px-2 py-1 text-xs whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100">
              {action.tooltip}
            </span>
          </div>
        ))}
      </div>
      <div className="text-sm uppercase">
        Matthew Burton &copy;{currentYear}
      </div>
    </div>
  )
}

export default Footer
