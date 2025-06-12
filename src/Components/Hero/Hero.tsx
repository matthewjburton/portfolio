import { Link as ScrollLink } from 'react-scroll'
import { Element } from 'react-scroll'
import { hero } from '../../Content/hero'
import DeviconRow from './DeviconRow'

const Hero = () => {
  return (
    <Element
      name="Home"
      className="relative flex h-screen flex-col items-center justify-center gap-8 overflow-hidden p-4 text-center text-wrap lg:p-8"
    >
      {/* Background Radial Gradient */}
      <div className="bg-radial-gradient dark:bg-radial-gradient pointer-events-none absolute inset-0 z-0 before:absolute before:inset-0 before:opacity-40" />

      {/* Devicon rows behind text */}
      <div className="pointer-events-none absolute inset-0 z-0 flex h-full flex-col justify-around select-none">
        <div className="overflow-hidden">
          <DeviconRow />
        </div>
        <div />
        <div className="overflow-hidden">
          <DeviconRow reverse />
        </div>
      </div>

      {/* Greeting Text */}
      <div className="z-10 text-5xl">
        <div>
          {hero.greeting}{' '}
          <span className="text-gradient-accent">{hero.name}</span>.
        </div>
        <div>{hero.description}</div>
      </div>

      {/* Call to Action */}
      <ScrollLink
        to="Projects"
        duration="500"
        smooth
        spy={true}
        offset={-80}
        className="gradient-accent text-background dark:text-background-dark hover:dark:shadow-accent-dark z-10 cursor-pointer rounded-full bg-size-[200%] p-4 text-lg transition duration-300 ease-in-out hover:shadow-[0_0_10px_#8fcf45] hover:dark:shadow-[0_0_10px_#82db4f]"
      >
        {hero.buttonText}{' '}
        <i className="fa-solid fa-arrow-down hover-slide-down ml-2" />
      </ScrollLink>
    </Element>
  )
}

export default Hero
