import { footer } from '../data/footer'
import React from 'react'
import { ChevronsUp } from 'lucide-react'
import { Link as ScrollLink } from 'react-scroll'
import Tooltip from './Tooltip'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className="bg-background dark:bg-dark-background border-border dark:border-dark-border relative flex w-full flex-col items-center gap-8 border-t py-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <Tooltip tooltip={'Back to Top'}>
          <ScrollLink
            to="Home"
            duration="500"
            smooth
            spy={true}
            className="gradient-accent text-dark-text dark:text-text flex items-center justify-center rounded-full p-4 text-xl transition duration-300 ease-in-out hover:cursor-pointer hover:shadow-md hover:dark:shadow-[0_0_12px_#34d399]"
          >
            <ChevronsUp className="size-5" />
          </ScrollLink>
        </Tooltip>
      </div>

      <div className="mt-8 flex w-full flex-row justify-center gap-8">
        {footer.map((action) => {
          const Icon = action.icon
          return (
            <Tooltip key={action.tooltip} tooltip={action.tooltip}>
              <a
                href={action.link}
                aria-label={action.tooltip}
                className="hover:text-accent dark:hover:text-dark-accent transition-colors"
              >
                <Icon className="size-6" />
              </a>
            </Tooltip>
          )
        })}
      </div>
      <div className="text-sm uppercase">
        Matthew Burton &copy;{currentYear}
      </div>
    </div>
  )
}

export default Footer
