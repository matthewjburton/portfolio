import React from 'react'
import { programs } from '../../Content/Projects/Programs'
import ProgramContainer from './ProgramContainer'

const Programs: React.FC = () => {
  return (
    <>
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
        {programs.map((program) => (
          <ProgramContainer key={program.id} program={program} />
        ))}
      </div>
    </>
  )
}

export default Programs
