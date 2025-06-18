import { Element } from 'react-scroll'
import { ProjectType } from '../types'
import BannerCallToAction from './BannerCallToAction'

interface BannerProps {
  project: ProjectType
}

const Banner = ({ project }: BannerProps) => {
  return (
    <Element name="Home">
      <div className="relative isolate h-[70vh] w-full overflow-hidden rounded-lg shadow-lg">
        <img
          src={project.banner}
          alt={`${project.title} banner`}
          className="absolute inset-0 h-full w-full object-cover brightness-50"
          loading="lazy"
        />
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-8 text-center">
          <h1 className="text-primary-text dark:text-primary-text-dark text-4xl font-bold md:text-6xl">
            {project.title}
          </h1>
          <BannerCallToAction />
        </div>
      </div>
    </Element>
  )
}

export default Banner
