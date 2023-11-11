import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    backgroundColor:{
      'backsecondary':'#fff',
    },
      fontSize: {
        'sm': '0.875rem', // small font size
        'md': '1rem',     // medium font size
        'lg': '1.25rem',  // large font size
        '2xl': '2rem',
        'm':'1.5rem',
        's':'1rem',
        // ... add more as needed
      },
      colors: {
        'primary': '#d3d3d3', // define your primary color
        'secondary': '#fff', // define your secondary color
        // ... add more as needed
      },
      fontWeight:{
        'bold':'bold',
      },
      
    },
  },
  plugins: [],
}
export default config
