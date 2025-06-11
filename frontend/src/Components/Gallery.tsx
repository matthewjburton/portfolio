import React, { useState } from 'react'
import Modal from './ImageModal' // Adjust the path as necessary

interface GalleryImage {
  id: number
  image: string
  title: string
}

interface GalleryProps {
  images: GalleryImage[]
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [current, setCurrent] = useState<number | null>(null)

  const handleImageClick = (index: number) => {
    setCurrent(index)
  }

  const handleCloseModal = () => {
    setCurrent(null)
  }

  const handlePrev = () => {
    if (current !== null) {
      setCurrent(current === 0 ? images.length - 1 : current - 1)
    }
  }

  const handleNext = () => {
    if (current !== null) {
      setCurrent(current === images.length - 1 ? 0 : current + 1)
    }
  }

  if (!Array.isArray(images) || images.length <= 0) {
    return null
  }

  return (
    <div className="w-full overflow-hidden">
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            onClick={() => {
              handleImageClick(index)
            }}
          >
            <img
              src={`/${image.image}`}
              alt={image.title}
              className="cursor-pointer rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
      {current !== null && (
        <Modal
          image={`/${images[current].image}`}
          title={images[current].title}
          currentIndex={current}
          total={images.length}
          onClose={handleCloseModal}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  )
}

export default Gallery
