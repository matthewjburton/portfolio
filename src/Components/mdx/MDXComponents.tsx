import React from 'react'

export const Aside: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <aside className="bg-background dark:bg-dark-background border-accent dark:border-dark-accent text-text-muted dark:text-dark-text-muted my-4 border-l-4 py-2 pl-4 italic">
    {children}
  </aside>
)

export const Note: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-accent/10 dark:bg-dark-accent/10 border-accent dark:border-dark-accent text-text dark:text-dark-text my-4 rounded border p-4 font-semibold">
    {children}
  </div>
)

export const Image: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <img src={src} alt={alt} className="my-4 w-full rounded-lg shadow-lg" />
)
