'use client'

import { ReactNode, useState } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { signIn } from 'next-auth/react'
import type { Session } from 'next-auth'

import { useIsMobileDevice } from '@/hooks/use-is-mobile-device'

const motionVariants = {
  initial: {
    opacity: 0.4,
    scale: 0.8
  },
  animate: {
    opacity: 1,
    scale: 1
  },
  exit: {
    opacity: 0,
    scale: 0.9
  }
}

export function FormOverlay({
  children,
  session
}: {
  children: ReactNode
  session: Session | null
}) {
  const [isHovered, setIsHovered] = useState(false)
  const isMobile = useIsMobileDevice()

  return (
    <article
      className='shadow-sm shadow-shadow rounded-md bg-background-tertiary border border-background-stroke p-4 mt-10 max-[376px]:w-[22rem] w-[23rem] sm:w-auto relative'
      onMouseMove={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {!session && (isHovered || isMobile) && (
          <motion.div
            className='absolute flex justify-center items-center top-0 left-0 w-full h-full bg-[#131316]/40-- bg-background-tertiary/40 backdrop-blur-sm rounded-md z-20 pointer-events-auto'
            variants={motionVariants}
            initial='initial'
            animate='animate'
            exit='exit'
          >
            <button
              className='flex items-center justify-center bg-text-primary/90 text-background-primary text-sm p-1 px-3 gap-1 hover:gap-2 transition-all font-fancy font-semibold rounded-full'
              onClick={() => signIn('google')}
            >
              <span>sign in to leave a comment</span>
              <ArrowRight size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <span className='gap-1 font-fancy font-semibold text-lg text-text-secondary flex items-start sm:items-center'>
        <Sparkles size={16} fontWeight='bold' className='sm:mt-0 mt-1.5' />
        Leave your thoughts, impressions, or just say hello 👋
      </span>
      {children}
    </article>
  )
}
