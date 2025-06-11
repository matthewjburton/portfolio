import React from 'react'
import ProgramContainer from './ProgramContainer'
import { useSortedProjects } from './useSortedProjectsHook'

const Programs: React.FC = () => {
  const { projects } = useSortedProjects()

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
        {projects.map((program) => (
          <ProgramContainer key={program.id} program={program} />
        ))}
      </div>
    </>
  )
}

export default Programs
