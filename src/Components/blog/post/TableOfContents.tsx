import { useEffect, useMemo, useState } from 'react'

interface HeadingItem {
  id: string
  text: string
  level: number
}

const TableOfContents = () => {
  const [activeId, setActiveId] = useState<string>('')

   // Memoize the headings so it only calculates once
  const headings: HeadingItem[] = useMemo(() => {
    return Array.from(document.querySelectorAll('h2, h3')).map((element) => ({
      id:
        element.id ||
        element.textContent?.toLowerCase().replace(/\s+/g, '-') ||
        '',
      text: element.textContent || '',
      level: parseInt(element.tagName[1]),
    }))
  }, [])

  useEffect(() => {
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -66%' },
    )

    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <nav className="border-border dark:border-dark-border bg-background dark:bg-dark-background mb-8 rounded-lg border p-4">
      <h3 className="text-text dark:text-dark-text mb-4 font-bold">
        Table of Contents
      </h3>
      <ul className="space-y-2 text-sm">
        {headings.map(({ id, text, level }) => (
          <li key={id} style={{ paddingLeft: `${(level - 2) * 1}rem` }}>
            <a
              href={`#${id}`}
              className={`transition ${
                activeId === id
                  ? 'text-gradient-accent font-semibold'
                  : 'text-text-muted dark:text-dark-text-muted hover:text-text dark:hover:text-dark-text'
              }`}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export { TableOfContents }
