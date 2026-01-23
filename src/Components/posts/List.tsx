import React from 'react'

interface ListProps {
  children: React.ReactNode
  ordered?: boolean
}

const List: React.FC<ListProps> = ({ children, ordered = false }) => {
  const Tag = ordered ? 'ol' : 'ul'
  return (
    <Tag className="text-text dark:text-dark-text my-4 ml-6 space-y-2">
      {children}
    </Tag>
  )
}

export default List

export const ListItem: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <li className="marker:text-accent dark:marker:text-dark-accent list-disc">
    {children}
  </li>
)
