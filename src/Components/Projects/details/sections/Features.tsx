import { useState } from 'react'
import { ProjectType } from '../../types'
import { sections } from './sections'
import FadeInSection from '@/components/FadeInSection'
import { Element } from 'react-scroll'

const sectionIndex = 2

interface FeaturesProps {
  project: ProjectType
}

const Features = ({ project }: FeaturesProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  if (!project.features) return null

  return (
    <Element name={sections[sectionIndex]}>
      <FadeInSection>
        <section
          className={`bg-container dark:bg-container-dark grid grid-cols-1 rounded-lg shadow-xl md:grid-cols-3`}
        >
          <div className="flex flex-col gap-4 rounded-lg lg:gap-8 lg:p-16">
            <div className="flex w-full flex-col items-start gap-4">
              <h2 className="text-start text-xl font-bold md:text-2xl lg:text-3xl">
                {sections[sectionIndex]}
              </h2>

              <p>{project.features[selectedIndex].description}</p>
            </div>
          </div>
          <div className="col-span-2">
            <img
              className="aspect-video object-cover"
              alt={project.features[selectedIndex].description}
              src={project.features[selectedIndex].media}
            />
          </div>
        </section>
      </FadeInSection>
    </Element>
  )
}

export default Features
