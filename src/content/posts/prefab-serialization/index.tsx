import { Aside } from '@/components/blog/post/sections/Aside'
import { CodeBlock } from '@/components/blog/post/sections/CodeBlock'
import { Code } from '@/components/blog/post/sections/Code'
import { List, ListItem } from '@/components/blog/post/sections/List'
import { Note } from '@/components/blog/post/sections/Note'
import { PrevNextLinks } from '@/components/blog/post/PrevNextLinks'
import { Quote } from '@/components/blog/post/sections/Quote'
import { Section } from '@/components/blog/post/sections/Section'
import { Header } from '@/components/blog/post/sections/Header'

const PrefabSerializationPost = () => (
  <>
    <Section>
      <Header>The Hidden Cost of Refactoring Unity Components</Header>
      If you've worked in Unity long enough, you've probably felt this pain: You
      attach a component like <Code>EnemyHealth</Code> to dozens (or hundreds)
      of prefabs. Everything works fine. Then one day, you decide to clean
      things up—maybe you rename <Code>healthValue</Code> to{' '}
      <Code>maxHealth</Code>, or adjust the type to better reflect your design.
      <Note>
        Suddenly, every prefab instance resets that value to 0, null, or a
        default. Carefully tuned enemies are broken. Bugs creep in. And what
        should have been a simple refactor turns into a tedious repair job.
      </Note>
      This is not a rare edge case. It's a structural friction baked into how
      Unity serializes data—and it quietly shapes how teams design, refactor,
      and sometimes avoid improving their codebases.
    </Section>

    <Section>
      <Header>Why This Becomes a Real Problem at Scale</Header>
      On a small prototype, resetting a few prefabs is annoying but manageable.
      On a mature project, it becomes a serious drag on velocity. The core issue
      isn't just lost values—
      <strong>it's the fear of refactoring that follows</strong>. When
      developers know a rename might break dozens of prefabs, they hesitate.
      Components grow bloated. Naming inconsistencies linger. Architectural
      improvements get postponed "until later," which often means never.
      <Aside>
        Over time, the project hardens around these fragile serialized fields.
      </Aside>
    </Section>

    <Section>
      <Header>Common Pain Points in Practice</Header>

      <List>
        <ListItem>
          <strong>Serialized Field Changes Break Prefabs</strong> — Unity
          serializes component data by field name. Rename or change a field, and
          Unity treats it as entirely new data. All existing prefab overrides
          vanish. Fixing this manually across many prefabs is slow, repetitive,
          and error-prone.
        </ListItem>
        <ListItem>
          <strong>Refactoring Fear Sets In</strong> — Developers start avoiding
          renames, splits, or cleanups because the cost feels too high. Code
          quality degrades not from ignorance, but from self-preservation.
        </ListItem>
        <ListItem>
          <strong>Hidden Dependencies Accumulate</strong> — Prefabs become
          implicitly coupled to the exact internal structure of a component.
          There's no obvious signal telling you how many prefabs depend on a
          field—or how risky a change might be.
        </ListItem>
      </List>
    </Section>

    <Section>
      <Header>The Root Cause: How Unity Serialization Works</Header>
      <Quote>
        Unity does not serialize components by "meaning" or intent—only by field
        name and type.
      </Quote>
      Prefab assets store serialized snapshots of fields. They do not reference
      your C# class definition in a flexible way. When a field name or type
      changes, Unity has no built-in understanding that "this is the same data,
      just renamed." There is no automatic migration. From Unity's perspective,
      the old data no longer belongs anywhere.
      <Note>
        Understanding this is key: this behavior is not a bug—it's a design
        constraint.
      </Note>
    </Section>

    <Section>
      <Header>Practical Strategies to Reduce Refactoring Pain</Header>

      <div className="space-y-8">
        <div>
          <h3 className="mb-3 text-lg font-semibold">
            1. Use <Code>[FormerlySerializedAs]</Code> for Renames
          </h3>
          For simple field renames, Unity provides an escape hatch:
          <CodeBlock language="csharp">
            {`using UnityEngine;
using UnityEngine.Serialization;

public class EnemyHealth : MonoBehaviour
{
    [FormerlySerializedAs("healthValue")]
    public int maxHealth;
}`}
          </CodeBlock>
          This tells Unity how to map old serialized data to the new field name.
          Existing prefab values remain intact.
          <Aside>
            Important note: This only works for renames—not type changes or
            structural refactors.
          </Aside>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold">
            2. Centralize Data with ScriptableObjects
          </h3>
          A powerful way to decouple prefabs from component internals is to move
          shared or default data into ScriptableObjects. Instead of each prefab
          storing its own health value, they reference a shared data asset:
          <List>
            <ListItem>Enemy stats live in ScriptableObjects</ListItem>
            <ListItem>Prefabs reference those assets</ListItem>
            <ListItem>Components read data, rather than own it</ListItem>
          </List>
          Now, renaming fields in a MonoBehaviour doesn't invalidate dozens of
          prefab overrides. This approach also improves consistency and makes
          global tuning much easier.
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold">
            3. Write Editor Migration Tools
          </h3>
          For larger refactors—especially when splitting or restructuring
          components—custom editor scripts can save enormous time. A migration
          script can:
          <List>
            <ListItem>Scan prefabs</ListItem>
            <ListItem>Read old serialized values</ListItem>
            <ListItem>Assign them to new fields or components</ListItem>
            <ListItem>Validate the result automatically</ListItem>
          </List>
          This requires upfront effort, but pays off quickly in larger projects.
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold">
            4. Minimize Serialized Fields in Components
          </h3>
          Every serialized field is a liability during refactors. A good rule of
          thumb:
          <List>
            <ListItem>
              Serialize only values that are truly unique per prefab
            </ListItem>
            <ListItem>
              Avoid storing defaults or shared data directly on components
            </ListItem>
            <ListItem>
              Prefer configuration assets or managers where possible
            </ListItem>
          </List>
          Less serialized state means fewer things that can break.
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold">
            5. Use Versioned Components for Major Changes
          </h3>
          When a refactor is too disruptive, consider creating a temporary
          parallel version:
          <List>
            <ListItem>EnemyHealth → EnemyHealthV2</ListItem>
            <ListItem>Migrate prefabs gradually</ListItem>
            <ListItem>
              Remove the old version once the transition is complete
            </ListItem>
          </List>
          This approach trades short-term complexity for long-term safety and
          clarity.
        </div>
      </div>
    </Section>

    <Section>
      <Header>Trade-Offs to Be Aware Of</Header>
      No strategy is free. Each comes with costs worth considering:
      <List>
        <ListItem>
          <Code>[FormerlySerializedAs]</Code> is simple but limited to renames
        </ListItem>
        <ListItem>
          ScriptableObjects improve architecture but require design changes
        </ListItem>
        <ListItem>
          Migration scripts are powerful but need testing and maintenance
        </ListItem>
        <ListItem>
          Versioned components reduce risk but temporarily increase code surface
          area
        </ListItem>
      </List>
      Choosing the right tool depends on the scale and frequency of your
      refactors.
    </Section>

    <Section>
      <Header>A Broader Architectural Insight</Header>
      <Quote>
        Prefab serialization is fragile by nature—robust Unity architectures
        work around that fragility, not against it.
      </Quote>
      The more your project grows, the more important it becomes to decouple
      data from component structure and to plan for change.
      <Note>Refactoring should feel routine, not dangerous.</Note>
    </Section>

    <Section>
      <Header>Practical Rules of Thumb</Header>
      <List ordered>
        <ListItem>
          Always use <Code>[FormerlySerializedAs]</Code> when renaming
          serialized fields
        </ListItem>
        <ListItem>
          Move shared or default values into ScriptableObjects
        </ListItem>
        <ListItem>Keep serialized fields lean and intentional</ListItem>
        <ListItem>Use migration scripts for structural changes</ListItem>
        <ListItem>Test refactors on a branch before merging</ListItem>
      </List>
      Designing with these constraints in mind doesn't eliminate friction—but it
      keeps it from silently dictating your architecture.
    </Section>

    <PrevNextLinks />
  </>
)

export default PrefabSerializationPost
