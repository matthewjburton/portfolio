import { useEffect, useState } from 'react'

export const useActiveSection = (sectionIds: string[]) => {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      const viewportCenter = window.innerHeight / 2

      // Filter only visible sections
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => {
          const rect = entry.target.getBoundingClientRect()
          const sectionCenter = rect.top + rect.height / 2
          return {
            id: entry.target.id,
            distance: Math.abs(sectionCenter - viewportCenter),
          }
        })

      // Pick the visible section closest to viewport center
      if (visibleSections.length > 0) {
       const maxDistance = window.innerHeight / 3
const candidates = visibleSections.filter(s => s.distance < maxDistance)
if (candidates.length > 0) {
  const closestSection = candidates.reduce((prev, curr) =>
    curr.distance < prev.distance ? curr : prev
  )
  setActive(closestSection.id)
}
      }
    }

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: Array.from({ length: 101 }, (_, i) => i / 100), // fine-grained visibility
    })

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return active
}
