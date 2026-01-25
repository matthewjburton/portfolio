import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
}

const Section = ({ children }: SectionProps) => (
  <section className="my-6">{children}</section>
)

export { Section }
