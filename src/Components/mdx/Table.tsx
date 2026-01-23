import { ReactNode } from 'react'

interface TableProps {
  children: ReactNode
}

const Table = ({ children }: TableProps) => (
  <div className="my-6 overflow-x-auto">
    <table className="border-border dark:border-dark-border w-full border-collapse border">
      {children}
    </table>
  </div>
)

export { Table }
