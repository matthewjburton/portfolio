import { Link as ScrollLink } from 'react-scroll'
import { sections } from './sections/sections'

const BannerCallToAction = () => {
  return (
    <ScrollLink
      to={sections[0]}
      duration="500"
      smooth
      spy={true}
      offset={-60}
      className="gradient-accent text-background dark:text-background-dark hover:dark:shadow-accent-dark z-10 cursor-pointer rounded-full bg-size-[200%] p-4 text-lg transition duration-300 ease-in-out hover:shadow-[0_0_10px_#8fcf45] hover:dark:shadow-[0_0_10px_#82db4f]"
    >
      Read More <i className="fa-solid fa-arrow-down hover-slide-down ml-2" />
    </ScrollLink>
  )
}

export default BannerCallToAction
