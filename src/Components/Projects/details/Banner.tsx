import { Element } from 'react-scroll'
import { ProjectType } from '../types'
import BannerCallToAction from './BannerCallToAction'
import RadialBackground from '@/components/hero/RadialBackground'

interface BannerProps {
  project: ProjectType
}

const Banner = ({ project }: BannerProps) => {
  const banner = project.banner

  return (
    <Element name="Home">
      <div className="relative isolate h-[70vh] w-full overflow-hidden shadow-lg">
        {banner ? (
          <img
            src={project.banner}
            alt={`${project.title} banner`}
            className="absolute inset-0 h-full w-full object-cover brightness-50"
            loading="lazy"
          />
        ) : (
          <RadialBackground />
        )}
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-8 text-center">
          <h1 className="text-dark-text dark:text-text text-4xl font-bold md:text-6xl">
            {project.title}
          </h1>
          <BannerCallToAction project={project} />
        </div>
      </div>
    </Element>
  )
}

export default Banner
