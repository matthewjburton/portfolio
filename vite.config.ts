import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'

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
  plugins: [react(), tailwindcss(), spaFallbackPlugin()],
  base: mode === 'production' ? PRODUCTION_BASE : DEVELOPMENT_BASE,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))
