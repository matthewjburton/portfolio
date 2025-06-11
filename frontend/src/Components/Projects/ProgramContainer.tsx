import React from 'react'
import Link from './Link'

interface ProgramContainerProps {
  program: {
    id: number
    title: string
    description: string
    link: string
    tags: { label: string; iconClass: string }[]
    year: number
  }
}

const ProgramContainer: React.FC<ProgramContainerProps> = ({ program }) => {
  return (
    <>
      <div
        key={program.id}
        className="bg-container dark:bg-container-dark group flex flex-col items-center justify-center overflow-hidden rounded-lg p-8 shadow-xl transition duration-300 ease-in-out hover:shadow-[0_0_10px_#8fcf45] hover:dark:shadow-[0_0_10px_#82db4f]"
      >
        <div className="flex h-full w-full flex-col items-center justify-between gap-4 rounded-lg p-4 lg:gap-8 lg:p-8">
          <div className="flex w-full flex-col items-start gap-4">
            <div className="flex flex-col gap-2">
              <div className="text-start text-xl font-bold md:text-2xl lg:text-3xl">
                {program.title}
              </div>

              <span className="text-tertiary-text dark:text-tertiary-text-dark text-sm italic">
                {program.year.toString()}
              </span>
            </div>

            <div className="text-lg">{program.description}</div>

            <div className="flex flex-wrap gap-2">
              {program.tags.map((tag) => (
                <span
                  key={tag.label}
                  className="border-accent text-gradient-accent hover:bg-accent flex items-center gap-1 rounded-full border px-4 py-2 text-sm transition hover:scale-105"
                >
                  {tag.iconClass && (
                    <i className={`${tag.iconClass} text-xl`} />
                  )}
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
          <div className="flex w-full items-center justify-end">
            <Link link={program.link} text="More" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProgramContainer
