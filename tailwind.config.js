/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'background-dark': 'oklch(97% 0 0)',
        background: 'oklch(100% 0 0)',
        'background-light': 'oklch(97% 0.002 270)',
        text: 'oklch(18% 0 0)',
        'text-muted': 'oklch(50% 0 0)',
        border: 'oklch(90% 0 0)',
        highlight: 'oklch(90% 0 0)',
        'accent-dark': 'oklch(0.42 0.15 150)',
        accent: 'oklch(0.50 0.17 145)',
        'accent-light': 'oklch(0.58 0.15 140)',

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
