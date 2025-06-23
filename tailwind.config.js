/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'background-dark': 'oklch(94% 0 270)',
        background: 'oklch(97% 0 270)',
        'background-light': 'oklch(100% 0 270)',
        text: 'oklch(15.79% 0 270)',
        'text-muted': 'oklch(41.84% 0 270)',
        border: 'oklch(94% 0 270)',
        highlight: 'oklch(100% 0 270)',
        'accent-dark': 'oklch(0.62 0.1881 142.68)',
        accent: 'oklch(0.7101 0.1911 133.01)',
        'accent-light': 'oklch(0.79 0.1845 130.24)',

        'dark-background-dark': 'oklch(15% 0 270)',
        'dark-background': 'oklch(20% 0 270)',
        'dark-background-light': 'oklch(25% 0 270)',
        'dark-text': 'oklch(96.19% 0 270)',
        'dark-text-muted': 'oklch(76.52% 0 270)',
        'dark-border': 'oklch(30% 0 270)',
        'dark-highlight': 'oklch(50% 0 270)',
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
