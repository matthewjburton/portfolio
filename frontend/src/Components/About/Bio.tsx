import React from 'react'

interface BioProps {
  imageSrc: string
  altText: string
  title: string
  description: React.ReactNode
}

const Bio: React.FC<BioProps> = ({ imageSrc, altText, title, description }) => {
  return (
    <>
      <div className="bg-container dark:bg-container-dark flex w-full flex-col gap-8 rounded-lg p-12 lg:flex-row">
        <div className="aspect-square w-full overflow-hidden rounded-lg lg:max-w-[240px]">
          <img
            src={imageSrc}
            alt={altText}
            className="h-full w-full translate-x-12 scale-150 object-cover"
          />
        </div>

        <div className="flex w-full flex-col items-start gap-4">
          <div className="flex flex-col gap-2">
            <div className="text-start text-xl font-bold md:text-2xl lg:text-3xl">
              {title}
            </div>

            <span className="text-secondary-text dark:text-secondary-text-dark text-sm italic">
              B.S. Computer Science from High Point University
            </span>
          </div>
          <div className="flex h-full w-fit flex-col gap-8">{description}</div>
        </div>
      </div>
    </>
  )
}

export default Bio
