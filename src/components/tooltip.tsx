'use client'

import { ReactNode, useEffect, useState } from 'react'
import * as RadixTooltip from '@radix-ui/react-tooltip'
import { motion } from 'framer-motion'

interface TooltipProps {
  text: string
  children: ReactNode
  side?: 'right' | 'top' | 'bottom' | 'left'
  container?: HTMLElement
}

const sideMotionVariants = {
  top: {
    initial: { translateY: -5 },
    animate: { translateY: 0 }
  }
}

export function Tooltip({
  text,
  children,
  side,
  container = document.getElementById('root') as HTMLElement
}: TooltipProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => setIsClient(true), [])

  if (!isClient) return null

  return (
    <RadixTooltip.Provider delayDuration={100}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal container={container}>
          <RadixTooltip.Content
            className='bg-background-tertiary border border-background-stroke rounded-md p-1'
            side={side}
            sideOffset={8}
          >
            <motion.div
              variants={
                sideMotionVariants[side as keyof typeof sideMotionVariants]
              }
              initial={{
                translateY: -5
              }}
              animate={{
                translateY: 0
              }}
            >
              <span className='text-sm text-text-primary font-mono'>
                {text}
              </span>
            </motion.div>
            <RadixTooltip.Arrow
              width={14}
              height={8}
              className='fill-background-tertiary'
            />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}
