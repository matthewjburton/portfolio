import { useState } from 'react'
import { ProjectType } from '../../types'
import { sections } from './sections'
import FadeInSection from '@/components/FadeInSection'
import { Element } from 'react-scroll'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

const sectionIndex = 2

interface FeaturesProps {
  project: ProjectType
}

const Features = ({ project }: FeaturesProps) => {
  const [activeIndex, setActiveIndex] = useState<number | undefined>()
  const [isFading, setIsFading] = useState(false)

  const features = project.features ?? []

  if (features.length === 0) return null

  return (
    <Element name={sections[sectionIndex]}>
      <FadeInSection>
        <section
          className={`bg-container dark:bg-container-dark grid grid-cols-1 overflow-hidden rounded-lg shadow-xl lg:grid-cols-3`}
        >
          <div className="flex flex-col gap-4 rounded-lg p-8 lg:gap-8 lg:p-16">
            <div className="flex w-full flex-col items-start gap-4">
              <h2 className="text-start text-xl font-bold md:text-2xl lg:text-3xl">
                {sections[sectionIndex]}
              </h2>

              {activeIndex !== undefined && (
                <p
                  className={`transition-opacity duration-300 ease-in-out ${
                    isFading ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  {features[activeIndex].description}
                </p>
              )}
            </div>
          </div>
          <div className="col-span-2">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 15000 }}
              loop
              onSlideChange={(swiper) => {
                setIsFading(true)
                setTimeout(() => {
                  setActiveIndex(swiper.realIndex)
                  setIsFading(false)
                }, 300)
              }}
              className="h-full w-full"
            >
              {features.map((feature) => (
                <SwiperSlide key={feature.description}>
                  {feature.media.endsWith('.mp4') ? (
                    <video
                      src={feature.media}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="aspect-video h-full w-full object-cover"
                    />
                  ) : (
                    <img
                      src={feature.media}
                      alt={feature.description}
                      className="aspect-video h-full w-full object-cover"
                    />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </FadeInSection>
    </Element>
  )
}

export default Features
