import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundImage: {
      'header-footer': 'linear-gradient(#F22323, #AB0707)',
      'photo-gallery': 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2),  rgba(0, 0, 0, 1))'
    },
    extend: {
      colors: {
        'page-color' : '#FAF4F4',
        'seal-brown' : '#250202',
        'red-link' : '#D21212'
      },
    },
  },
  plugins: [],
}
export default config
