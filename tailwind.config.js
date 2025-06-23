/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        background: '#F4F4F4',
        'background-dark': '#121212',

        container: '#FFFFFF',
        'container-dark': '#1E1E1E',

        'primary-text': '#121212',
        'primary-text-dark': '#E0E0E0',

        'secondary-text': '#9E9E9E',
        'secondary-text-dark': '#8C8C8C',

        accent: '#8fcf45',
        'accent-dark': '#82db4f',

        'accent-light-start': '#a4d651',
        'accent-light-mid': '#8fcf45',
        'accent-light-end': '#6daf2e',
        'accent-dark-start': '#a8e063',
        'accent-dark-mid': '#82db4f',
        'accent-dark-end': '#50a329',
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
