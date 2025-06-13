import React from 'react'

interface ContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="bg-background dark:bg-background-dark text-primary-text dark:text-primary-text-dark relative flex w-full flex-grow flex-col justify-center self-center px-8 py-12 md:px-12 lg:gap-12 lg:px-24">
      {children}
    </div>
  )
}

export default Container
