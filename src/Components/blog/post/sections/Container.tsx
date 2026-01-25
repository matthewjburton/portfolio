import React from 'react'

interface ContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => (
  <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">{children}</div>
)

export { Container }
