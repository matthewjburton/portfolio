import { Element } from 'react-scroll'
import BackgroundIcons from './BackgroundIcons'
import Greeting from './Greeting'
import RadialBackground from '@/components/hero/RadialBackground'
import HeroCallToAction from './HeroCallToAction'

const Hero = () => {
  return (
    <Element
      name="Home"
      className="relative flex h-screen flex-col items-center justify-center gap-8 overflow-hidden p-4 text-center text-wrap lg:p-8"
    >
      <RadialBackground />
      <BackgroundIcons />
      <Greeting />
      <HeroCallToAction />
    </Element>
  )
}

export default Hero
