import React from 'react'

interface ListProps {
  children: React.ReactNode
  ordered?: boolean
}

const List = ({ children, ordered = false }: ListProps) => {
  const Tag = ordered ? 'ol' : 'ul'
  return (
    <Tag className="text-text dark:text-dark-text my-4 ml-6 space-y-2">
      {children}
    </Tag>
  )
}


interface ListItemProps {
  children: React.ReactNode
} 

const ListItem = ({ children }: ListItemProps) => (
  <li className="marker:text-accent dark:marker:text-dark-accent list-disc">
    {children}
  </li>
)

export { List, ListItem }