import React from 'react'

interface AsideProps {
  children: React.ReactNode
}

const Aside = ({ children }: AsideProps) => (
  <aside className="bg-background dark:bg-dark-background border-accent dark:border-dark-accent text-text-muted dark:text-dark-text-muted my-4 border-l-4 py-2 pl-4 italic">
    {children}
  </aside>
)

export { Aside }
