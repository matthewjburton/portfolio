import { ReactNode } from 'react'

interface HeaderProps {
  children: ReactNode
}

const Header = ({ children }: HeaderProps) => {
  return <h1 className={`mt-6 mb-4 text-xl font-bold`}>{children}</h1>
}

export { Header }
