'use client'

import { ComponentProps, ReactNode, useEffect, useState } from 'react'

import { useTheme } from '@/hooks/use-theme'
import {
  Greetings,
  helloInDifferentLanguages,
  intervalTimeInMs
} from './greetings'
import { FloatingMenu } from './floating-menu'

interface RootProps extends ComponentProps<'div'> {
  children: ReactNode
}

export function Root({ children, ...props }: RootProps) {
  const [currentTheme] = useTheme()
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => setShowContent(true),
      intervalTimeInMs * helloInDifferentLanguages.length
    )

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div
      id='root'
      className='relative overflow-hidden'
      data-theme={currentTheme}
      {...props}
    >
      {!showContent && (
        <div className='bg-background-primary text-text-primary'>
          <Greetings />
        </div>
      )}
      {showContent && (
        <div className='relative'>
          {children}
          <FloatingMenu />
        </div>
      )}
    </div>
  )
}
