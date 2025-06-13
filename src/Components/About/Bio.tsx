import React from 'react'
import FadeInSection from '../FadeInSection'
import Portrait from './Portrait'
import BioText from './BioText'

interface BioProps {
  imageSrc: string
  altText: string
  title: string
  education: string
  description: React.ReactNode
}

const Bio: React.FC<BioProps> = ({
  imageSrc,
  altText,
  title,
  education,
  description,
}) => {
  return (
    <>
      <FadeInSection>
        <div className="bg-container dark:bg-container-dark flex w-full flex-col gap-8 rounded-lg p-12 lg:flex-row">
          <Portrait imageSrc={imageSrc} altText={altText} />
          <BioText
            title={title}
            education={education}
            description={description}
          />
        </div>
      </FadeInSection>
    </>
  )
}

export default Bio
