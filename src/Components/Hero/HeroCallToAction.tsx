import { hero } from '@/content/hero'
import { SECTIONS } from '@/content/sections'

const HeroCallToAction = () => {
  return (
    <a 
      href={`#${SECTIONS.projects}`}
      className="gradient-accent text-background dark:text-dark-background hover:dark:shadow-dark-accent z-10 cursor-pointer rounded-full bg-size-[200%] p-4 text-lg transition duration-300 ease-in-out hover:shadow-[0_0_10px_#8fcf45] hover:dark:shadow-[0_0_10px_#82db4f] hover:scale-102"
    >
      {hero.buttonText}{' '}
      <i className="fa-solid fa-arrow-down hover-slide-down ml-2" />
    </a>
  )
}

export { HeroCallToAction }
