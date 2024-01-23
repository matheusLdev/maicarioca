import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundImage: {
      'gradient-pulse': 'linear-gradient(rgba(250, 220, 220, .5), rgba(255, 200, 200, .5))',
      'header-footer': 'linear-gradient(#F22323, #AB0707)',
      'mobile': 'linear-gradient(#AB0707,#F22323, #AB0707)',
      'photo-gallery': 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2),  rgba(0, 0, 0, .8))'
    },
    extend: {
      colors: {
        'seal-brown' : '#250202',
        'red-link' : '#D21212'
      },
      height: {
        '18' : '4.5rem',
      },
      minHeight: {
        'screen-10': '90vh',
      }
    },
  },
  plugins: [],
}
export default config
