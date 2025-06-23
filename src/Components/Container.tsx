import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

const Container = ({ className = '', children }: ContainerProps) => {
  return (
    <div
      className={`relative flex w-full flex-grow flex-col justify-center gap-8 self-center px-8 py-12 md:px-12 lg:gap-12 lg:px-24 ${className}`}
    >
      {children}
    </div>
  )
}

export default Container
