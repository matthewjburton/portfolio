import { Link as ScrollLink } from 'react-scroll'
import { sections } from './sections/sections'
import { ProjectType } from '../types'

interface BannerCallToActionProps {
  project: ProjectType
}

const BannerCallToAction = ({ project }: BannerCallToActionProps) => {
  const filteredSections = sections.filter((section) =>
    Boolean(project[section.id as keyof ProjectType]),
  )

  return (
    <ScrollLink
      to={filteredSections[0].label}
      duration="500"
      smooth
      spy={true}
      offset={-60}
      className="gradient-accent text-background dark:text-dark-background hover:dark:shadow-dark-accent z-10 cursor-pointer rounded-full bg-size-[200%] p-4 text-lg transition duration-300 ease-in-out hover:shadow-[0_0_10px_#8fcf45] hover:dark:shadow-[0_0_10px_#82db4f]"
    >
      Read More <i className="fa-solid fa-arrow-down hover-slide-down ml-2" />
    </ScrollLink>
  )
}

export default BannerCallToAction
