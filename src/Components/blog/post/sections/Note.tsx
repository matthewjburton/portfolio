import { ReactNode } from 'react'

interface NoteProps {
  children: ReactNode
}

const Note = ({ children }: NoteProps) => (
  <div className="bg-accent/10 dark:bg-dark-accent/10 border-accent dark:border-dark-accent text-text dark:text-dark-text my-4 rounded border p-4 font-semibold">
    {children}
  </div>
)

export { Note }
