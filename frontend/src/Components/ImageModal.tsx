import React from 'react'

interface ModalProps {
  image: string
  title: string
  currentIndex: number
  total: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

const Modal: React.FC<ModalProps> = ({
  image,
  title,
  currentIndex,
  total,
  onClose,
  onPrev,
  onNext,
}) => {
  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-75"
        onClick={handleBackgroundClick}
      />
      <div className="relative flex h-full w-full items-center justify-center p-4">
        <button
          type="button"
          className="absolute left-0 z-50 m-4 text-3xl text-white"
          onClick={onPrev}
        >
          &lsaquo;
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-50 m-4 text-3xl text-white"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain"
        />
        <button
          type="button"
          className="absolute right-0 z-50 m-4 text-3xl text-white"
          onClick={onNext}
        >
          &rsaquo;
        </button>
        <div className="absolute bottom-0 z-50 m-4 text-white">
          {currentIndex + 1} / {total}
        </div>
      </div>
    </div>
  )
}

export default Modal
