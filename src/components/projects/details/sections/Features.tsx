import { useState, useEffect, useCallback } from 'react'
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

interface LightboxProps {
  features: { header: string; description: string; media: string }[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

const Lightbox = ({ features, index, onClose, onPrev, onNext }: LightboxProps) => {
  const feature = features[index]

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        onPrev()
      } else if (e.key === 'ArrowRight') {
        onNext()
      }
    },
    [onClose, onPrev, onNext],
  )

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  const media = feature.media.endsWith('.mp4') ? (
    <video
      src={feature.media}
      autoPlay
      muted
      loop
      playsInline
      className="max-h-[80vh] max-w-full rounded-lg object-contain"
    />
  ) : (
    <img
      src={feature.media}
      alt={feature.description}
      className="max-h-[80vh] max-w-full rounded-lg object-contain"
    />
  )

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[95vh] max-w-[95vw] flex-col items-center"
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-2 right-0 z-10 cursor-pointer p-2 text-xl text-white/70 transition-colors hover:text-white"
          aria-label="Close lightbox"
        >
          <i className="fa-solid fa-xmark" />
        </button>

        {/* Media */}
        {media}

        {/* Caption overlay */}
        <div className="absolute bottom-0 left-0 right-0 rounded-b-lg bg-gradient-to-t from-black/80 to-transparent px-6 pb-6 pt-12">
          <h3 className="text-sm font-semibold uppercase text-white/80">
            {feature.header}
          </h3>
          <p className="mt-1 text-sm text-white/90">
            {feature.description}
          </p>
        </div>

        {/* Navigation */}
        {features.length > 1 && (
          <>
            <button
              type="button"
              onClick={onPrev}
              className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 cursor-pointer p-4 text-2xl text-white/70 transition-colors hover:text-white"
              aria-label="Previous feature"
            >
              <i className="fa-solid fa-chevron-left" />
            </button>
            <button
              type="button"
              onClick={onNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full cursor-pointer p-4 text-2xl text-white/70 transition-colors hover:text-white"
              aria-label="Next feature"
            >
              <i className="fa-solid fa-chevron-right" />
            </button>
          </>
        )}

        {/* Counter */}
        <div className="mt-3 text-sm text-white/60">
          {index + 1} / {features.length}
        </div>
      </div>
    </div>
  )
}

const Features = ({ project }: FeaturesProps) => {
  const [activeIndex, setActiveIndex] = useState<number | undefined>()
  const [isFading, setIsFading] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const features = project.features?.features
  const isPortrait = project.mediaOrientation === 'portrait'

  if (!features) return null

  const mediaElement = (feature: (typeof features)[0], featureIndex: number) => {
    const handleClick = () => {
      setLightboxIndex(featureIndex)
    }

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
        <div
          className="flex h-full cursor-pointer items-center justify-center bg-black/90 p-8"
          onClick={handleClick}
        >
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
        className="aspect-video h-full w-full cursor-pointer object-cover"
        onClick={handleClick}
      />
    ) : (
      <img
        src={feature.media}
        alt={feature.description}
        loading="lazy"
        className="aspect-video h-full w-full cursor-pointer object-cover"
        onClick={handleClick}
      />
    )
  }

  return (
    <>
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
                {features.map((feature, i) => (
                  <SwiperSlide key={feature.description}>
                    {mediaElement(feature, i)}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
        </FadeInSection>
      </Element>

      {lightboxIndex !== null && (
        <Lightbox
          features={features}
          index={lightboxIndex}
          onClose={() => {
            setLightboxIndex(null)
          }}
          onPrev={() => {
            setLightboxIndex((prev) =>
              prev !== null && prev > 0 ? prev - 1 : features.length - 1,
            )
          }}
          onNext={() => {
            setLightboxIndex((prev) =>
              prev !== null && prev < features.length - 1 ? prev + 1 : 0,
            )
          }}
        />
      )}
    </>
  )
}

export default Features
