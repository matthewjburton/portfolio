import { Link as ScrollLink } from 'react-scroll'
import { ArrowDown } from 'lucide-react'
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
      className="gradient-accent text-background dark:text-dark-background z-10 inline-flex cursor-pointer items-center gap-2 rounded-full bg-size-[200%] p-4 text-lg transition duration-300 ease-in-out hover:shadow-[0_0_12px_#0e9f6e] hover:dark:shadow-[0_0_12px_#34d399]"
    >
      Read More <ArrowDown className="size-5" />
    </ScrollLink>
  )
}

export default BannerCallToAction
