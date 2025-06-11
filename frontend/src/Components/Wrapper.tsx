import React from 'react'

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-background dark:bg-background-dark text-primary-text dark:text-primary-text-dark flex min-h-screen flex-col">
      {children}
    </div>
  )
}

export default Wrapper
