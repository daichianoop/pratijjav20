import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Adjust based on your file structure
  ],
  theme: {
    extend: {
      colors: {
        primary: '#002027', // Custom primary color
        secondary: '#EBCE89', // Custom secondary color
      },
      fontFamily: {
        'built-titling': ['"built-titling"', 'sans-serif'], // Register the custom font
      },
    },
  },
  plugins: [],
};

export default config;
