import React from 'react'

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="flex min-h-screen flex-col">{children}</div>
}

export default Wrapper
