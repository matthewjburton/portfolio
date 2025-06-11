import React from 'react'

interface ContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="bg-background dark:bg-background-dark text-primary-text dark:text-primary-text-dark flex w-full flex-col justify-center self-center px-12 md:px-24 lg:gap-12 lg:px-96">
      {children}
    </div>
  )
}

export default Container
