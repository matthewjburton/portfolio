/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const darkMode = 'media';
export const theme = {
  extend: {
    colors: {
      background: {
        DEFAULT: '#FFFFFF',
        dark: '#121212',
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
    },
  },
};
export const plugins = [];