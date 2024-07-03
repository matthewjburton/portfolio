/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // Enable JIT mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#FFFFFF',
          dark: '#101010',
        },
        container: {
          DEFAULT: '#f4f4f4',
          dark: '#1a1a1e',
        },
        dropdownHover: {
          DEFAULT: '#f4f4f4',
          dark: '#404040',
        },
        primaryText: {
          DEFAULT: '#121212',
          dark: '#FFFFFF',
        },
        secondaryText: {
          DEFAULT: '#262626',
          dark: '#DEDEDE',
        },
        tertiaryText: {
          DEFAULT: '#787878',
          dark: '#BEBEBE',
        },
        accent: {
          DEFAULT: '#44D3AB',
          dark: '#00b294',
        },
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
};
