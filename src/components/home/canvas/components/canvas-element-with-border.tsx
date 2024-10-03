'use client'

import { ReactNode } from 'react'
import { motion, MotionProps } from 'framer-motion'

interface CanvasElementWithBorderProps extends MotionProps {
  children: ReactNode
  borderColor?: string
  label?: string
}

export function CanvasElementWithBorder({
  children,
  borderColor = '#00A3FF',
  label = '',
  ...props
}: CanvasElementWithBorderProps) {
  return (
    <motion.div {...props}>
      {label && (
        <span className='font-sans' style={{ color: borderColor }}>
          {label}
        </span>
      )}
      <div
        className={`border-2 relative w-fit`}
        style={{ borderColor: borderColor }}
      >
        {children}
        <div
          className={`size-2 absolute -top-[0.30rem] -left-[0.30rem] border-2 bg-white`}
          style={{ borderColor: borderColor }}
        />
        <div
          className={`size-2 -top-[0.30rem] -right-[0.30rem] absolute border-2 bg-white`}
          style={{ borderColor: borderColor }}
        />
        <div
          className={`size-2 -bottom-[0.30rem] -left-[0.30rem]  absolute border-2 bg-white`}
          style={{ borderColor: borderColor }}
        />
        <div
          className={`size-2 -bottom-[0.30rem] -right-[0.30rem] absolute border-2 bg-white`}
          style={{ borderColor: borderColor }}
        />
      </div>
    </motion.div>
  )
}
