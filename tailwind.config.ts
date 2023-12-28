import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'light-gray-nav': '#EFE0E0',      'seal-brown-text': '#250202',   'red-link': '#D21212'
      },
    },
  },
  plugins: [],
}
export default config
