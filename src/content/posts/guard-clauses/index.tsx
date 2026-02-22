import { Aside } from '@/components/blog/post/sections/Aside'
import { CodeBlock } from '@/components/blog/post/sections/CodeBlock'
import { List, ListItem } from '@/components/blog/post/sections/List'
import { Note } from '@/components/blog/post/sections/Note'
import { PrevNextLinks } from '@/components/blog/post/PrevNextLinks'
import { Quote } from '@/components/blog/post/sections/Quote'
import { Section } from '@/components/blog/post/sections/Section'
import { Header } from '@/components/blog/post/sections/Header'

const GuardClausesPost = () => (
  <>
    <Section>
      <Header>Separate vs Combined Guard Clauses</Header>
      This question came up during a routine code review. No bugs, no
      performance issues—just two ways of writing the same early exit logic. On
      the surface, it felt inconsequential. But the longer we talked about it,
      the clearer it became that this tiny stylistic choice carries real
      implications for readability, refactoring, and long-term maintenance.
      <Note>
        Small patterns compound. Code lives far longer than the moment it’s
        written.
      </Note>
    </Section>

    <Section>
      <Header>The Two Competing Patterns</Header>
      The debate usually looks like this:
      <CodeBlock language="javascript">
        {`// Separate guard clauses
const fn = () => {
  if (conditionA) return;
  if (conditionB) return;

  // main logic
}`}
      </CodeBlock>
      Versus:
      <CodeBlock language="javascript">
        {`// Combined guard clause
const fn = () => {
  if (conditionA || conditionB) return;

  // main logic
}`}
      </CodeBlock>
      Functionally identical. Stylistically divisive.
    </Section>

    <Section>
      <Header>What Guard Clauses Are Actually For</Header>
      Guard clauses exist to make invalid states obvious and to avoid deeply
      nested conditionals. They serve as a short checklist of reasons a function
      should not continue.
      <Quote>
        Guard clauses are documentation for why execution should stop.
      </Quote>
      Framing the problem this way shifts the discussion from “fewer lines” to
      “clearer intent.”
    </Section>

    <Section>
      <Header>The Case for Separate Guard Clauses</Header>
      Separate guards shine when each condition represents a distinct reason for
      exiting.
      <CodeBlock language="javascript">
        {`if (!user) return;
if (!user.isActive) return;
if (user.isBanned) return;`}
      </CodeBlock>
      <List>
        <ListItem>
          <strong>Each line answers one question</strong> — Why can’t we
          proceed?
        </ListItem>
        <ListItem>
          <strong>Scales linearly</strong> — Adding rules doesn’t increase
          logical density.
        </ListItem>
        <ListItem>
          <strong>Easy to extend</strong> — Logging, metrics, or special
          handling fit naturally.
        </ListItem>
      </List>
      <Aside>
        When reading separate guards, your brain parses reasons, not boolean
        expressions.
      </Aside>
    </Section>

    <Section>
      <Header>Addressing the “Too Many Returns” Objection</Header>A common
      criticism is that multiple early returns increase cognitive load. In
      practice, the opposite is often true.
      <Note>
        Grouped guard clauses are mentally collapsed into a single “exit early”
        phase.
      </Note>
      Once past the guards, the reader can assume all preconditions are
      satisfied and focus on the core logic without defensive checks.
    </Section>

    <Section>
      <Header>Where Combined Guard Clauses Make Sense</Header>
      Separate guards should be the default—but not a rule without exceptions.
      Combined guards are appropriate when conditions express a single
      invariant.
      <CodeBlock language="javascript">
        {`// One rule: value must be within range
if (x < min || x > max) return;`}
      </CodeBlock>
      Splitting this can actually obscure intent.
      <List>
        <ListItem>Conditions are conceptually inseparable</ListItem>
        <ListItem>You never need to know which condition failed</ListItem>
        <ListItem>No future branching or instrumentation is expected</ListItem>
      </List>
    </Section>

    <Section>
      <Header>The Scaling Problem With Combined Guards</Header>
      Combined conditions degrade quickly as rules accumulate:
      <CodeBlock language="javascript">
        {`if (!user || !user.isActive || user.isBanned || isExpired(session)) return;`}
      </CodeBlock>
      Each added condition increases parsing effort. Refactors become riskier,
      and extracting logic later often requires undoing the combined expression.
      <Aside>Boolean density is a silent readability tax.</Aside>
    </Section>

    <Section>
      <Header>A Practical Heuristic</Header>
      Rather than treating this as preference, a simple rule works well in
      practice:
      <Quote>
        Combine conditions that describe one rule. Separate conditions that
        describe different reasons to exit.
      </Quote>
      Or more succinctly:
      <List>
        <ListItem>One “why” → combine</ListItem>
        <ListItem>Multiple “whys” → separate</ListItem>
      </List>
    </Section>

    <Section>
      <Header>Why This Matters</Header>
      Guard clauses influence how safe code feels to change. Readable exits make
      refactors easier. Easy refactors encourage better architecture.
      <Note>Style choices shape behavior—especially under time pressure.</Note>
      This isn’t about winning a stylistic argument. It’s about reducing the
      friction that quietly hardens codebases over time.
    </Section>

    <Section>
      <Header>Final Take</Header>
      Separate guard clauses are usually the clearer, safer default. Combined
      guards are best reserved for tightly coupled conditions that express a
      single invariant.
      <Quote>
        Optimize guard clauses for the person who has to change them next.
      </Quote>
    </Section>

    <PrevNextLinks />
  </>
)

export default GuardClausesPost
