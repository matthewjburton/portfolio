import { hero } from '@/data/hero'
import { Link as ScrollLink } from 'react-scroll'
import { ArrowDown, Download } from 'lucide-react'

const HeroCallToAction = () => {
  return (
    <div className="z-10 flex flex-col items-center gap-4 sm:flex-row">
      <ScrollLink
        to="Projects"
        duration="500"
        smooth
        spy={true}
        offset={-120}
        className="gradient-accent text-background dark:text-dark-background inline-flex cursor-pointer items-center gap-2 rounded-full bg-size-[200%] p-4 text-lg transition duration-300 ease-in-out hover:shadow-md hover:dark:shadow-[0_0_12px_#34d399]"
      >
        {hero.buttonText}
        <ArrowDown className="size-5" />
      </ScrollLink>

      {hero.resumeSrc && (
        <a
          href={hero.resumeSrc}
          download
          className="border-accent text-accent dark:border-dark-accent dark:text-dark-accent hover:bg-accent/10 dark:hover:bg-dark-accent/10 inline-flex cursor-pointer items-center gap-2 rounded-full border p-4 text-lg transition-colors duration-300 ease-in-out"
        >
          {hero.resumeText}
          <Download className="size-5" />
        </a>
      )}
    </div>
  )
}

export default HeroCallToAction
