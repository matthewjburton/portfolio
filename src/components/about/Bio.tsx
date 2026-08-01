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
  resumeSrc?: string
  resumeUpdated?: string
}

const Bio: React.FC<BioProps> = ({
  imageSrc,
  altText,
  title,
  education,
  description,
  resumeSrc,
  resumeUpdated,
}) => {
  return (
    <>
      <FadeInSection>
        <div className="bg-background dark:bg-dark-background dark:border-t-dark-highlight border-t-highlight border-border dark:border-dark-border flex w-full flex-col gap-8 rounded-lg border p-12 shadow-lg lg:flex-row">
          <Portrait imageSrc={imageSrc} altText={altText} />
          <BioText
            title={title}
            education={education}
            description={description}
            resumeSrc={resumeSrc}
            resumeUpdated={resumeUpdated}
          />
        </div>
      </FadeInSection>
    </>
  )
}

export default Bio
