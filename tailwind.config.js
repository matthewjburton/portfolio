/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'background-dark': 'oklch(94% 0 89.9)',
        background: 'oklch(97% 0 89.9)',
        'background-light': 'oklch(100% 0 89.9)',
        text: 'oklch(15.79% 0 89.9)',
        'text-muted': 'oklch(41.84% 0 89.9)',
        border: 'oklch(94% 0 89.9)',
        highlight: 'oklch(100% 0 89.9)',
        'accent-dark': 'oklch(0.62 0.1881 142.68)',
        accent: 'oklch(0.7101 0.1911 133.01)',
        'accent-light': 'oklch(0.79 0.1845 130.24)',

        'dark-background-dark': 'oklch(5% 0.01 89.9)',
        'dark-background': 'oklch(18% 0 89.9)',
        'dark-background-light': 'oklch(25% 0 89.9)',
        'dark-text': 'oklch(96.19% 0 89.9)',
        'dark-text-muted': 'oklch(76.52% 0 89.9)',
        'dark-border': 'oklch(30% 0 89.9)',
        'dark-highlight': 'oklch(50% 0 89.9)',
        'dark-accent-dark': 'oklch(0.63 0.17 140.66)',
        'dark-accent': 'oklch(0.8071 0.21 136.02)',
        'dark-accent-light': 'oklch(0.88 0.16 124.66)',
      },

      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
