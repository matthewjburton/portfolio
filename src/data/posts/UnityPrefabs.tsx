import { Aside } from '@/components/posts/Aside'
import CodeBlock from '@/components/posts/CodeBlock'
import List, { ListItem } from '@/components/posts/List'
import { Note } from '@/components/posts/Note'
import PrevNextLinks from '@/components/posts/PrevNextLinks'
import Quote from '@/components/posts/Quote'
import { Section } from '@/components/posts/Section'
import { SectionHeader } from '@/components/posts/SectionHeader'

const UnityPrefabs = () => (
  <>
    <Section>
      <SectionHeader> Problem Statement </SectionHeader>
      In Unity, when a component is attached to many prefabs (e.g.,
      `EnemyHealth`) and you **change serialized fields** (e.g., rename
      `healthValue` to `maxHealth`), all prefab instances:
      <List>
        <ListItem>Reset the value of that field to `null` or default</ListItem>
        <ListItem>Lose their custom per-prefab configuration</ListItem>
        <ListItem>
          Can introduce bugs and extra manual work to reassign values
        </ListItem>
      </List>
      <Note>
        This creates a strong **refactoring friction** when trying to improve or
        reorganize component classes.
      </Note>
    </Section>

    <Section>
      <SectionHeader>Observed Pain Points</SectionHeader>

      <Aside>
        These issues are subtle but compound quickly in large projects.
      </Aside>

      <List>
        <ListItem>
          **Serialized Field Changes Break Prefabs** — Renaming a field or
          changing its type resets the values in all prefab instances
        </ListItem>
        <ListItem>
          **Refactoring Fear** — Developers hesitate to rename fields, split
          components, or consolidate functionality
        </ListItem>
        <ListItem>
          **Hidden Dependencies** — Prefabs become tightly coupled to component
          field names and structure
        </ListItem>
      </List>
    </Section>

    <Section>
      <SectionHeader>Root Cause</SectionHeader>
      <Quote author="Unity Documentation">
        Unity serializes component data by field name in prefab assets. Any
        change to the field name or type breaks serialization.
      </Quote>
      Key facts: - Any change to the field name or type breaks serialization -
      There is no automatic migration of old serialized values - Prefabs do not
      reference the C# class definition directly but the serialized state by
      name
    </Section>

    <Section>
      <SectionHeader>Strategies to Mitigate the Problem</SectionHeader>
      ### 1. Use `[FormerlySerializedAs]` Attribute
      <CodeBlock language="csharp">
        {`using UnityEngine;
using UnityEngine.Serialization;

public class EnemyHealth : MonoBehaviour {
  [FormerlySerializedAs("healthValue")]
  public int maxHealth;
}`}
      </CodeBlock>
      This tells Unity to recognize the old field name during deserialization,
      preserving existing prefab values when you rename a field. ### 2. Create a
      Custom Migration System For complex refactors, implement custom
      serialization handlers:
      <CodeBlock language="csharp">
        {`/**
 * Multi-line comment
 * Used to test: hljs-comment
 */

'use strict'; // hljs-meta, hljs-string

// Single-line comment (hljs-comment)

import React, { useState, useEffect } from 'react'; // hljs-keyword, hljs-title, hljs-string

export interface User {
  id: number;                // hljs-number
  name: string;
  isAdmin: boolean;          // hljs-literal
  tags?: string[];           // hljs-built_in
}

const API_URL = 'https://api.example.com/users'; // hljs-string

enum Status {
  Idle = 0,
  Loading = 1,
  Error = 2,
}

function fetchUsers<T extends User>(
  limit: number = 10,
  includeAdmins: boolean = false
): Promise<T[]> {
  return new Promise((resolve, reject) => {
    if (limit <= 0) {
      throw new Error('Limit must be positive'); // hljs-built_in
    }

    setTimeout(() => {
      resolve([] as T[]);
    }, 500);
  });
}

const users = await fetchUsers<User>(25, true);

users.forEach((user) => {
  const { id, name, isAdmin } = user; // hljs-attr

  console.log(
    \`User #\${id}: \${name} (\${isAdmin ? 'admin' : 'user'})\`
  ); // template string, ternary operator
});

const regex = /^[a-z0-9_-]+$/gi; // hljs-regexp

if (regex.test('valid_name-123')) {
  console.warn('Regex matched'); // hljs-built_in
}

try {
  JSON.parse('{ invalid json }');
} catch (err) {
  console.error(err); // hljs-built_in
} finally {
  console.info('Done');
}

// Arrow function
const sum = (a: number, b: number): number => a + b;

// Class, constructor, method
class Repository<T> {
  private cache: Map<string, T> = new Map();

  constructor(private readonly name: string) {}

  get(key: string): T | null {
    return this.cache.get(key) ?? null; // nullish coalescing
  }

  set(key: string, value: T): void {
    this.cache.set(key, value);
  }
}

const repo = new Repository<User>('users');

// Optional chaining
repo?.set('123', {
  id: 123,
  name: 'Matt',
  isAdmin: true,
  tags: ['dev', 'unity', 'react'],
});

// Numbers
const int = 42;
const float = 3.14159;
const hex = 0xff;
const binary = 0b101010;

// Literals
const yes = true;
const no = false;
const nothing = null;
const missing = undefined;

// Operators
const result = (int * 2 + float) / hex;

// End of file
`}
      </CodeBlock>
    </Section>

    <Section>
      <SectionHeader>Key Takeaways</SectionHeader>

      <List ordered>
        <ListItem>
          Always use `[FormerlySerializedAs]` when renaming serialized fields
        </ListItem>
        <ListItem>
          Document serialization dependencies to avoid accidental breaks
        </ListItem>
        <ListItem>Consider custom migration logic for major refactors</ListItem>
        <ListItem>
          Test prefabs after component changes to catch serialization issues
          early
        </ListItem>
      </List>
    </Section>

    <PrevNextLinks
      prevPost={{ title: 'Previous Post', slug: 'previous-post' }}
      nextPost={{ title: 'Next Post', slug: 'next-post' }}
    />
  </>
)

export { UnityPrefabs }
