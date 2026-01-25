import React from 'react'

interface WrapperProps {
  children: React.ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
  return <div className="flex min-h-screen flex-col">{children}</div>
}

export { Wrapper }
