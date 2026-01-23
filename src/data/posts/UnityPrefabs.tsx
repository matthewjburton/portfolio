import { Aside } from '@/components/mdx/Aside'
import { Note } from '@/components/mdx/Note'
import { Section } from '@/components/mdx/Section'
import { SectionHeader } from '@/components/mdx/SectionHeader'

const UnityPrefabs = () => (
  <>
    <Section>
      <SectionHeader> Problem Statement </SectionHeader>
      In Unity, when a component is attached to many prefabs (e.g.,
      `EnemyHealth`) and you **change serialized fields** (e.g., rename
      `healthValue` to `maxHealth`), all prefab instances:
      <ul className="ml-6 list-disc space-y-1">
        <li>
          Reset the value of that field to <code>null</code> or default
        </li>
        <li>Lose their custom per-prefab configuration</li>
        <li>Can introduce bugs and extra manual work to reassign values</li>
      </ul>
      <Note>
        This creates a strong **refactoring friction** when trying to improve or
        reorganize component classes.
      </Note>
    </Section>

    <Section>
      <SectionHeader> Observed Pain Points</SectionHeader>
    </Section>

    <Aside>
      These issues are subtle but compound quickly in large projects.
    </Aside>
  </>
)

export { UnityPrefabs }
