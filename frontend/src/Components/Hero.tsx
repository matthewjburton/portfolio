import { Link as ScrollLink } from 'react-scroll'
import { Element } from 'react-scroll'
import { hero } from '../Content/Hero'

const Hero = () => {
  return (
    <Element
      name="Home"
      className="flex h-screen flex-col items-center justify-center gap-8 p-4 text-center text-wrap lg:p-8"
    >
      <div className="text-5xl">
        <div>
          {hero.greeting}{' '}
          <span className="text-gradient-accent">{hero.name}</span>.
        </div>
        <div>{hero.description}</div>
      </div>
      <ScrollLink
        to="Projects"
        duration="500"
        smooth
        spy={true}
        offset={-80}
        className="gradient-accent text-background dark:text-background-dark hover:dark:shadow-accent-dark cursor-pointer rounded-full bg-size-[200%] p-4 text-lg transition duration-300 ease-in-out hover:shadow-[0_0_10px_#8fcf45] hover:dark:shadow-[0_0_10px_#82db4f]"
      >
        {hero.buttonText}{' '}
        <i className="fa-solid fa-arrow-down hover-slide-down ml-2" />
      </ScrollLink>
    </Element>
  )
}

export default Hero
