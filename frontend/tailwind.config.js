/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        'background-dark': '#101010',
        container: '#f4f4f4',
        'container-dark': '#1a1a1e',
        'dropdown-hover': '#f4f4f4',
        'dropdown-hover-dark': '#404040',
        'primary-text': '#121212',
        'primary-text-dark': '#FFFFFF',
        'secondary-text': '#262626',
        'secondary-text-dark': '#DEDEDE',
        'tertiary-text': '#787878',
        'tertiary-text-dark': '#BEBEBE',
        accent: '#44D3AB',
        'accent-dark': '#00b294',
      },

      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      animation: {
        gradient: 'background-pan 3s linear infinite',
      },
      keyframes: {
        'background-pan': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
    },
  },
  plugins: [],
}
