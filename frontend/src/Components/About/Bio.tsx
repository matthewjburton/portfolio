import React from 'react'
import SubHeader from '../SubHeader'

interface BioProps {
  imageSrc: string
  altText: string
  title: string
  description: React.ReactNode
}

const Bio: React.FC<BioProps> = ({ imageSrc, altText, title, description }) => {
  return (
    <>
      <SubHeader text={title} />
      <div className="bg-container dark:bg-container-dark flex w-full flex-col gap-8 rounded-lg p-12 lg:flex-row">
        <div className="aspect-square w-full max-w-[240px] overflow-hidden rounded-lg">
          <img
            src={imageSrc}
            alt={altText}
            className="h-full w-full translate-x-6 scale-175 transform object-cover transition-transform duration-300"
          />
        </div>
        <div className="flex h-full w-fit flex-col gap-8">{description}</div>
      </div>
    </>
  )
}

export default Bio
