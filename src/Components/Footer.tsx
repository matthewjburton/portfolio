import { footer } from '../data/footer'
import React from 'react'

import { Link as ScrollLink } from 'react-scroll'
import Tooltip from './Tooltip'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className="bg-container dark:bg-container-dark relative mt-12 flex w-full flex-col items-center gap-8 py-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <Tooltip tooltip={'Back to Top'}>
          <ScrollLink
            to="Home"
            duration="500"
            smooth
            spy={true}
            className="gradient-accent text-background dark:text-background-dark flex items-center justify-center rounded-full p-4 text-xl transition duration-300 ease-in-out hover:shadow-[0_0_10px_#8fcf45] hover:dark:shadow-[0_0_10px_#82db4f]"
          >
            <i className="fa-solid fa-angles-up" />
          </ScrollLink>
        </Tooltip>
      </div>

      <div className="mt-8 flex w-full flex-row justify-center gap-8">
        {footer.map((action) => (
          <Tooltip key={action.tooltip} tooltip={action.tooltip}>
            <a href={action.link}>
              <i className={action.icon} />
            </a>
          </Tooltip>
        ))}
      </div>
      <div className="text-sm uppercase">
        Matthew Burton &copy;{currentYear}
      </div>
    </div>
  )
}

export default Footer
