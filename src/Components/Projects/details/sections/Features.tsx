import { useState } from 'react'
import { ProjectType } from '../../types'
import { sections } from './sections'
import FadeInSection from '@/components/FadeInSection'
import { Element } from 'react-scroll'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

const sectionIndex = 1

interface FeaturesProps {
  project: ProjectType
}

const Features = ({ project }: FeaturesProps) => {
  const [activeIndex, setActiveIndex] = useState<number | undefined>()
  const [isFading, setIsFading] = useState(false)

  const features = project.features?.features
  const isPortrait = project.mediaOrientation === 'portrait'

  if (!features) return null

  const mediaElement = (feature: (typeof features)[0]) => {
    if (isPortrait) {
      const inner = feature.media.endsWith('.mp4') ? (
        <video
          src={feature.media}
          autoPlay
          muted
          loop
          playsInline
          className="h-full rounded-lg object-contain"
        />
      ) : (
        <img
          src={feature.media}
          alt={feature.description}
          loading="lazy"
          className="h-full rounded-lg object-contain"
        />
      )
      return (
        <div className="flex h-full items-center justify-center bg-black/90 p-8">
          {inner}
        </div>
      )
    }

    return feature.media.endsWith('.mp4') ? (
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
        loading="lazy"
        className="aspect-video h-full w-full object-cover"
      />
    )
  }

  return (
    <Element name={sections[sectionIndex].label}>
      <FadeInSection>
        <section
          className={`bg-background dark:bg-dark-background dark:border-t-dark-highlight border-t-highlight border-border dark:border-dark-border grid grid-cols-1 overflow-hidden rounded-lg border shadow-xl ${isPortrait ? 'lg:grid-cols-2' : 'lg:grid-cols-3'}`}
        >
          <div className="flex flex-col gap-4 rounded-lg p-8 lg:gap-8 lg:p-16">
            <div className="flex w-full flex-col items-start gap-4">
              <h2 className="text-start text-xl font-bold md:text-2xl lg:text-3xl">
                {sections[sectionIndex].label}
              </h2>

              {activeIndex !== undefined && (
                <div
                  className={`flex flex-col gap-4 transition-opacity duration-300 ease-in-out ${
                    isFading ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <h3 className="text-text-muted dark:text-dark-text-muted text-sm uppercase">
                    {features[activeIndex].header}
                  </h3>
                  <p
                    className={`transition-opacity duration-300 ease-in-out ${
                      isFading ? 'opacity-0' : 'opacity-100'
                    }`}
                  >
                    {features[activeIndex].description}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className={isPortrait ? '' : 'col-span-2'}>
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
                  {mediaElement(feature)}
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
