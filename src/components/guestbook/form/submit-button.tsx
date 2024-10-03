'use client'

import { useState } from 'react'
import { useFormStatus } from 'react-dom'
import { motion } from 'framer-motion'
import { Send, LoaderCircle } from 'lucide-react'

export function SubmitButton({ isDisabled }: { isDisabled: boolean }) {
  const [isHovered, setIsHovered] = useState(false)
  const { pending } = useFormStatus()

  return (
    <motion.button
      data-is-pending={pending}
      className='data-[is-pending="true"]:opacity-65 flex items-center justify-center mt-4 w-full bg-text-primary/90 font-semibold rounded-md p-3 text-background-primary active:scale-95 transition-all relative'
      type='submit'
      disabled={isDisabled || pending}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        gap: isHovered ? '0.3rem' : 0
      }}
      transition={{
        delay: -0.6
      }}
    >
      {pending ? (
        <div className='flex items-center justify-center gap-2'>
          <LoaderCircle size={16} className='animate-spin' />
          <span>sharing with the world</span>
        </div>
      ) : (
        <>
          <span>send</span>
          <span className='relative mt-px'>
            <motion.span
              className='absolute -top-1/2 opacity-0'
              animate={{
                translateY: isHovered ? '-50%' : '20%',
                opacity: isHovered ? 1 : 0
              }}
            >
              <Send size={14} className='mt-px' />
            </motion.span>
          </span>
        </>
      )}
    </motion.button>
  )
}
