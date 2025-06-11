import React from 'react'
import { programs } from '../../Content/Projects/Programs'
import SubHeader from '../SubHeader'
import ProgramContainer from './ProgramContainer'

const Programs: React.FC = () => {
  return (
    <>
      <SubHeader text="Programs" />
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
        {programs.map((program) => (
          <ProgramContainer key={program.id} program={program} />
        ))}
      </div>
    </>
  )
}

export default Programs
