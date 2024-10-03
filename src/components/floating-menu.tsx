import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

import { useTheme } from '@/hooks/use-theme'
import { cn } from '@/utils/cn'

const links = [
  { name: 'home', route: '/' },
  { name: 'thoughts', route: '/thoughts' },
  { name: 'guestbook', route: '/guestbook' }
]

const menuMotionVariant = {
  show: {
    opacity: 1,
    translateY: 0,
    scale: 1
  },
  hidden: {
    opacity: 0.4,
    translateY: 100,
    scale: 0.3
  }
}

const themeButtonMotionVariant = {
  light: {
    translateY: 0
  },
  dark: {
    translateY: -28
  }
}

const SCROLL_OFFSET = 6

export function FloatingMenu() {
  const pathname = usePathname()

  const [hideFloatingMenu, setHideFloatingMenu] = useState(false)
  const previousScrollPosition = useRef(0)

  useEffect(() => {
    previousScrollPosition.current = window.scrollY

    function handleHideFloatingMenu() {
      const currentScrollPosition = window.scrollY

      if (currentScrollPosition > previousScrollPosition.current) {
        setHideFloatingMenu(true)
      } else if (
        currentScrollPosition + SCROLL_OFFSET <=
        previousScrollPosition.current
      ) {
        setHideFloatingMenu(false)
      }

      previousScrollPosition.current = currentScrollPosition
    }

    window.addEventListener('scroll', handleHideFloatingMenu)

    return () => removeEventListener('scroll', handleHideFloatingMenu)
  }, [])

  const [currentTheme, , toggleTheme] = useTheme()
  const [hoveredLinkIndex, setHoveredLinkIndex] = useState<number | undefined>(
    undefined
  )

  return (
    <div className='backdrop-blur-sm-- z-[99999] w-screen h-fit fixed bottom-0 left-0 bg-background-secondary/10-- flex items-center justify-center pointer-events-none'>
      <motion.div
        initial={{
          opacity: 1,
          translateY: 0,
          scale: 1
        }}
        variants={menuMotionVariant}
        animate={hideFloatingMenu ? 'hidden' : 'show'}
        className={cn(
          'bg-background-tertiary/80 backdrop-blur-sm text-text-tertiary font-fancy m-4 rounded-full shadow-sm py-2.5 px-3 border border-background-stroke flex gap-2 pointer-events-auto',
          { 'text-zinc-500': currentTheme == 'light' }
        )}
      >
        <ul className='flex'>
          {links.map(({ name, route }, index) => {
            return (
              <li
                key={index}
                className='relative'
                onMouseEnter={() => setHoveredLinkIndex(index)}
                onMouseLeave={() => setHoveredLinkIndex(undefined)}
              >
                {hoveredLinkIndex == index && !hideFloatingMenu ? (
                  <motion.div
                    className={cn(
                      'absolute z-0 -top-[0.25rem] -left-[0.25rem] bg-background-stroke rounded-full h-[calc(100%+0.5rem)] w-[calc(100%+0.5rem)]',
                      { 'bg-zinc-400/45': currentTheme == 'light' }
                    )}
                    layoutId='link-hover'
                  />
                ) : null}
                <Link
                  className={cn('relative z-10 px-1.5 py-1', {
                    'text-text-primary/70': pathname == route
                  })}
                  href={route}
                >
                  {name}
                </Link>
              </li>
            )
          })}
        </ul>
        <div className='flex-1 gap-2 flex'>
          <div
            className={cn(
              'h-full w-[0.1rem] rounded-full bg-background-stroke',
              { 'bg-zinc-400/70': currentTheme == 'light' }
            )}
          />
          <button
            onClick={toggleTheme}
            className='h-6 flex items-start overflow-hidden'
          >
            <motion.div
              className='flex flex-col gap-2 w-fit mt-[0.23rem]'
              variants={themeButtonMotionVariant}
              animate={currentTheme}
              // uncomment the below and comment the above for fancier animation 🪄
              // whileHover={{
              //   translateY: currentTheme == 'dark' ? -26 : 0
              // }}
              // animate={{
              //   translateY: currentTheme == 'dark' ? 0 : -26
              // }}
            >
              <MoonIcon className='size-[1.15rem]' fontWeight={400} />
              <SunIcon className='size-[1.15rem]' fontWeight={400} />
            </motion.div>
          </button>
        </div>
      </motion.div>
    </div>
  )
}
