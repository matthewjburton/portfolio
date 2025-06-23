import React from 'react'

interface BioTextProps {
  title: string
  education: string
  description: React.ReactNode
}

const BioText: React.FC<BioTextProps> = ({ title, education, description }) => {
  return (
    <div className="flex w-full flex-col items-start gap-4">
      <div className="flex flex-col gap-2">
        <div className="text-start text-xl font-bold md:text-2xl lg:text-3xl">
          {title}
        </div>

        <span className="text-text-muted dark:text-dark-text-muted text-sm italic">
          {education}
        </span>
      </div>
      <div className="flex h-full w-fit flex-col gap-8">{description}</div>
    </div>
  )
}

export default BioText
