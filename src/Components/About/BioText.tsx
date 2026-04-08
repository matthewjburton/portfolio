import React from 'react'

interface BioTextProps {
  title: string
  education: string
  description: React.ReactNode
  resumeSrc?: string
  resumeUpdated?: string
}

const BioText = ({ title, education, description, resumeSrc, resumeUpdated }: BioTextProps) => {
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
      {resumeSrc && (
        <a
          href={resumeSrc}
          download
          className="text-accent dark:text-dark-accent hover:text-accent-dark dark:hover:text-dark-accent-light flex items-center gap-2 text-sm transition-colors"
        >
          <i className="fa-solid fa-download" />
          Download Resume
          {resumeUpdated && (
            <span className="text-text-muted dark:text-dark-text-muted">
              (Updated {resumeUpdated})
            </span>
          )}
        </a>
      )}
    </div>
  )
}

export { BioText }
