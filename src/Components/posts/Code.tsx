import { ReactNode } from 'react'

interface CodeProps {
  children: ReactNode
}

const Code = ({ children }: CodeProps) => (
  <code className="rounded border border-gray-300 bg-gray-100 px-[0.35em] py-[0.15em] font-mono text-[0.9em] text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100">
    {children}
  </code>
)

export { Code }
