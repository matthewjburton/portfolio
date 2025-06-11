import { Link as ScrollLink } from 'react-scroll'
import { Element } from 'react-scroll'
import { hero } from '../Content/Hero'

const Hero = () => {
  return (
    <Element
      name="Hero"
      className="flex h-screen flex-col items-center justify-center gap-8 p-4 text-center text-wrap lg:p-8"
    >
      <div className="text-5xl">
        <div>
          {hero.greeting}{' '}
          <span className="text-accent dark:text-accent-dark">{hero.name}</span>
          .
        </div>
        <div>{hero.description}</div>
      </div>
      <ScrollLink
        to="Projects"
        duration="500"
        smooth
        spy={true}
        offset={-80}
        className="border-accent text-accent dark:border-accent-dark dark:text-accent-dark hover:dark:shadow-accent-dark cursor-pointer rounded-full border-2 p-4 text-lg transition duration-300 ease-in-out hover:shadow-[0_0_10px_#44D3AB] hover:dark:shadow-[0_0_10px_#00b294]"
      >
        {hero.buttonText} <i className="fa-solid fa-arrow-down ml-2" />
      </ScrollLink>
    </Element>
  )
}

export default Hero
