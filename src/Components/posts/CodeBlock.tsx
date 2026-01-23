import React from 'react'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import csharp from 'react-syntax-highlighter/dist/esm/languages/hljs/csharp'
import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'

SyntaxHighlighter.registerLanguage('csharp', csharp)
SyntaxHighlighter.registerLanguage('javascript', javascript)

const myTheme = {
  hljs: {
    color: 'oklch(0.78 0.01 270)',
    background: 'transparent',
  },
  'hljs-keyword': {
    color: 'oklch(0.70 0.19 130)',
    fontWeight: 600,
  },
  'hljs-string': {
    color: 'oklch(0.75 0.15 150)',
  },
  'hljs-title': {
    color: 'oklch(0.78 0.2 115)',
  },
  'hljs-number': {
    color: 'oklch(.6 0.15 35)',
  },
  'hljs-literal': {
    color: 'oklch(.65 0.15 20)',
  },
  'hljs-comment': {
    color: 'oklch(50% 0.01 270)',
    fontStyle: 'italic',
  },
}

interface CodeBlockProps {
  children: string
  language?: string
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  children,
  language = 'javascript',
}) => (
  <div className="bg-background dark:bg-dark-background border-t-highlight dark:border-t-dark-highlight border-border dark:border-dark-border my-6 overflow-x-auto rounded-md border-1 shadow-lg">
    {language && (
      <div className="bg-dark-background-light text-dark-text-muted dark:text-text-muted px-3 py-1 text-xs font-semibold">
        {language}
      </div>
    )}
    <SyntaxHighlighter
      language={language}
      style={myTheme}
      showLineNumbers={false}
      customStyle={{ padding: '0.25rem 0.5rem' }}
    >
      {children}
    </SyntaxHighlighter>
  </div>
)

export default CodeBlock
