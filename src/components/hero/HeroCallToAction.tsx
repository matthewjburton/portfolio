import { hero } from '@/data/hero'
import { Link as ScrollLink } from 'react-scroll'

const HeroCallToAction = () => {
  return (
    <div className="z-10 flex flex-col items-center gap-4 sm:flex-row">
      <ScrollLink
        to="Projects"
        duration="500"
        smooth
        spy={true}
        offset={-120}
        className="gradient-accent text-background dark:text-dark-background cursor-pointer rounded-full bg-size-[200%] p-4 text-lg transition duration-300 ease-in-out hover:shadow-md hover:dark:shadow-[0_0_10px_#82db4f]"
      >
        {hero.buttonText}{' '}
        <i className="fa-solid fa-arrow-down hover-slide-down ml-2" />
      </ScrollLink>

      {hero.resumeSrc && (
        <a
          href={hero.resumeSrc}
          download
          className="border-accent text-accent dark:border-dark-accent dark:text-dark-accent hover:bg-accent/10 dark:hover:bg-dark-accent/10 cursor-pointer rounded-full border p-4 text-lg transition-colors duration-300 ease-in-out"
        >
          {hero.resumeText}
          <i className="fa-solid fa-download ml-2" />
        </a>
      )}
    </div>
  )
}

export default HeroCallToAction
