import React from 'react'

interface SubHeaderProps {
  text: string
}

const SubHeader: React.FC<SubHeaderProps> = ({ text }) => {
  return (
    <div className="align-self-start border-accent dark:border-accent-dark w-full justify-self-center border-b-4 py-2 text-3xl font-bold">
      {text}
    </div>
  )
}

export default SubHeader
