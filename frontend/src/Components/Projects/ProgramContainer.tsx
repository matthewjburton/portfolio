import React from 'react'
import Link from './Link'

interface ProgramContainerProps {
  program: {
    id: number
    title: string
    description: string
    link: string
  }
}

const ProgramContainer: React.FC<ProgramContainerProps> = ({ program }) => {
  return (
    <>
      <div
        key={program.id}
        className="bg-container dark:bg-container-dark hover:bg-accent dark:hover:bg-accent-dark group flex flex-col items-center justify-center overflow-hidden rounded-lg p-8 transition duration-300 ease-in-out"
      >
        <div className="text-center text-xl font-bold md:text-2xl lg:text-3xl">
          {program.title}
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-lg p-4 transition duration-300 ease-in-out lg:gap-8 lg:p-8">
          <div className="text-lg">{program.description}</div>
          <Link link={program.link} text="View" />
        </div>
      </div>
    </>
  )
}

export default ProgramContainer
