import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view and returns its name.
 *
 * Unlike react-scroll's built-in `spy`, this:
 *  - activates a section the moment its heading passes below the sticky nav
 *    (using the same offset the click-to-scroll uses, so the two stay in sync), and
 *  - force-activates the last section once the page is scrolled to the bottom,
 *    which fixes the case where a short final section (followed by more content)
 *    can never scroll far enough to activate on its own.
 *
 * Each section is matched to a DOM node by `id`, so the observed sections must
 * render an element whose `id` equals its name.
 *
 * @param sectionNames ordered list of section names / element ids
 * @param offset distance from the top of the viewport (px) at which a section
 *   becomes active — should match the scroll `offset` used by the nav links
 */
const useScrollSpy = (sectionNames: string[], offset = 100): string => {
  const [activeSection, setActiveSection] = useState(sectionNames[0] ?? '')

  useEffect(() => {
    if (sectionNames.length === 0) return

    const determineActive = () => {
      // Bottom-of-page guard: if we've reached (near) the bottom, the last
      // section wins even if it's too short to reach the activation line.
      const reachedBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      if (reachedBottom) {
        setActiveSection(sectionNames[sectionNames.length - 1])
        return
      }

      const activationLine = window.scrollY + offset
      let current = sectionNames[0]

      for (const name of sectionNames) {
        const el = document.getElementById(name)
        if (!el) continue
        const top = el.getBoundingClientRect().top + window.scrollY
        if (top <= activationLine) {
          current = name
        } else {
          break
        }
      }

      setActiveSection(current)
    }

    determineActive()
    window.addEventListener('scroll', determineActive, { passive: true })
    window.addEventListener('resize', determineActive)
    return () => {
      window.removeEventListener('scroll', determineActive)
      window.removeEventListener('resize', determineActive)
    }
  }, [sectionNames, offset])

  return activeSection
}

export default useScrollSpy
