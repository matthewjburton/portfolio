import { footer } from '../content/footer'
import { Tooltip } from './Tooltip'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className="bg-background dark:bg-dark-background relative flex w-full flex-col items-center gap-8 py-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <Tooltip tooltip={'Back to Top'}>
            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
              }
              className="gradient-accent text-dark-text dark:text-text flex items-center justify-center rounded-full p-4 text-xl transition duration-300 ease-in-out hover:cursor-pointer hover:shadow-[0_0_10px_#8fcf45] hover:dark:shadow-[0_0_10px_#82db4f] hover:opacity-85 hover:scale-102"
              aria-label="Back to top"
            >
              <i className="fa-solid fa-angles-up" />
            </button>
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

export { Footer }
