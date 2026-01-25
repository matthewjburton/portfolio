import React from 'react'

interface QuoteProps {
  children: React.ReactNode
  author?: string
}

const Quote = ({ children, author }: QuoteProps) => (
  <blockquote className="border-accent dark:border-dark-accent bg-accent/5 dark:bg-dark-accent/5 text-text-muted dark:text-dark-text-muted my-6 border-l-4 py-3 pl-4 italic">
    <p className="mb-2">{children}</p>
    {author && (
      <p className="text-text dark:text-dark-text text-sm font-semibold">
        — {author}
      </p>
    )}
  </blockquote>
)

export { Quote }
