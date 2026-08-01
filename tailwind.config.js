/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ---- Signal · light ----
        'background-dark': '#f4f7f5', // page background
        background: '#ffffff', // cards / raised surfaces
        'background-light': '#eef2f0', // subtle raised fill
        text: '#14201c',
        'text-muted': '#5a6b65',
        border: '#dde4e1',
        highlight: '#e7ece9',
        'accent-dark': '#0b7f58',
        accent: '#0e9f6e', // emerald primary
        'accent-light': '#34b583',
        secondary: '#f0654a', // coral secondary
        'secondary-dark': '#d94e34',

        // ---- Signal · dark ----
        'dark-background-dark': '#0e1512',
        'dark-background': '#17201c',
        'dark-background-light': '#1f2a25',
        'dark-text': '#eaf1ee',
        'dark-text-muted': '#8fa39c',
        'dark-border': '#26332e',
        'dark-highlight': '#3a4a43',
        'dark-accent-dark': '#1fb47d',
        'dark-accent': '#34d399', // emerald primary
        'dark-accent-light': '#6ee7b7',
        'dark-secondary': '#fb7a5d', // coral secondary
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
