import type { Config } from 'tailwindcss'
import { createThemes } from 'tw-colors'

import { themes } from './src/utils/themes'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
        mono: ['var(--font-space-grotesk)'],
        fancy: ['var(--font-bricolage-grotesque)'],
        serif: ['var(--font-playfair-display)']
      },
      keyframes: {
        spotlight: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },

        'hand-waving': {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '50%': {
            transform: 'rotate(45deg)'
          },
          '100%': {
            transform: 'rotate(0deg)'
          }
        },
        'float-out': {
          to: {
            rotate: '360deg'
          }
        },
        rotate: {
          to: {
            transform: 'rotate(90deg)'
          }
        },
        flip: {
          to: {
            rotate: '360deg'
          }
        }
      },
      animation: {
        spotlight: 'spotlight 1.7s ease',
        'hand-waving': 'hand-waving 800ms ease 2',
        'float-out':
          'float-out calc(var(--duration, 1) * 1s) calc(var(--delay) * -1s) infinite linear',
        rotate: 'rotate var(--spark) linear infinite both',
        flip: 'flip calc(var(--spark) * 2) infinite steps(2, end)'
      }
    }
  },
  plugins: [createThemes(themes)]
}
export default config
