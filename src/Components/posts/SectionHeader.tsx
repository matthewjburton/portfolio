// src/components/mdx/SectionHeader.tsx
import { ReactNode } from 'react'

interface SectionHeaderProps {
  children: ReactNode
}

const SectionHeader = ({ children }: SectionHeaderProps) => {
  return <h1 className={`mt-6 mb-4 text-xl font-bold`}>{children}</h1>
}

export { SectionHeader }
