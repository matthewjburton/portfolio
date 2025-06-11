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
        <img
          src={imageSrc}
          alt={altText}
          className="h-full w-full rounded-lg object-cover lg:h-60 lg:w-60"
        />
        <div className="flex h-full w-fit flex-col gap-8">
          <p>{description}</p>
        </div>
      </div>
    </>
  )
}

export default Bio
