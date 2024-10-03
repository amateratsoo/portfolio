import { ComponentProps } from 'react'
import { motion } from 'framer-motion'

import { cn } from '@/utils/cn'
import { ClassValue } from 'clsx'

interface FancyCursorProps extends ComponentProps<'div'> {
  cursorClassnames?: ClassValue[]
  cursorColor?: string
  text: string
  flip?: boolean
}

export function FancyCursor({
  cursorClassnames = [],
  text,
  cursorColor = '#00A3FF',
  flip = false
}: FancyCursorProps) {
  return (
    <div className={cn('relative -mt-1')}>
      <svg
        className={cn('size-8', ...cursorClassnames)}
        viewBox='0 0 40 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_1013_95)'>
          <path
            transform={flip ? 'scale (-1, 1)' : ''}
            transform-origin='center'
            d='M22.5199 39.9999C22.4803 39.9999 22.4423 39.9991 22.401 39.9972C21.4851 39.9467 20.7001 39.3257 20.4429 38.4442L16.5303 25.0815L2.24065 22.2497C1.33797 22.0705 0.647525 21.3402 0.518142 20.43C0.389359 19.5202 0.848504 18.6265 1.66638 18.2038L36.3449 0.242802C37.1489 -0.176267 38.1331 -0.0434319 38.8027 0.570463C39.4742 1.18601 39.686 2.15398 39.3373 2.99392L24.5163 38.6651C24.1801 39.4782 23.3905 39.9999 22.5199 39.9999Z'
            fill={cursorColor}
          />
        </g>
        <defs>
          <clipPath id='clip0_1013_95'>
            <rect width='40' height='40' fill='white' />
          </clipPath>
        </defs>
      </svg>

      <motion.div
        layout='size'
        initial={false}
        transition={{
          layout: {
            duration: 0.2
          }
        }}
        className={cn(
          'rounded-full w-max max-w-64 px-3 -mt-1 absolute font-medium font-sans text-white',
          {
            '-left-20': !flip,
            'ml-6': flip
          }
        )}
        style={{ backgroundColor: cursorColor }}
      >
        {text}
      </motion.div>
    </div>
  )
}
