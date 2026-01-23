import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@mdx-js/rollup'
import path from 'path'
import fs from 'fs'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

export const DEVELOPMENT_BASE = '/'
export const PRODUCTION_BASE = '/portfolio'

function spaFallbackPlugin() {
  return {
    name: 'spa-fallback',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist')
      const indexHtml = path.join(distDir, 'index.html')
      const fallbackHtml = path.join(distDir, '404.html')
      fs.copyFileSync(indexHtml, fallbackHtml)
    },
  }
}

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    tailwindcss(),
    spaFallbackPlugin(),
    mdx({
      remarkPlugins: [
        remarkFrontmatter,
        [remarkMdxFrontmatter, { name: 'frontmatter' }],
      ],
    }),
  ],
  base: mode === 'production' ? PRODUCTION_BASE : DEVELOPMENT_BASE,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))
