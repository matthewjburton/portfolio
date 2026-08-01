import { useRef, useState } from 'react'

interface CardMediaProps {
  banner?: string
  preview?: string
  title: string
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const CardMedia = ({ banner, preview, title }: CardMediaProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hovered, setHovered] = useState(false)

  if (!banner && !preview) return null

  const handleEnter = () => {
    setHovered(true)
    if (prefersReducedMotion()) return
    const video = videoRef.current
    if (video) {
      video.currentTime = 0
      void video.play().catch(() => undefined)
    }
  }

  const handleLeave = () => {
    setHovered(false)
    videoRef.current?.pause()
  }

  return (
    <div
      className="bg-dark-background-dark relative aspect-video w-full overflow-hidden"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {banner && (
        <img
          src={banner}
          alt={`${title} preview`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {preview && (
        <video
          ref={videoRef}
          src={preview}
          muted
          loop
          playsInline
          preload="none"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  )
}

export default CardMedia
