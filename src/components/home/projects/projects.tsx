'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CornerRightDown } from 'lucide-react'
import colors from 'tailwindcss/colors'

import { ProjectInfo } from './project-info'
import { FancyCursor } from '@/components/fancy-cursor'
import { useDeviceMaxHeight } from '@/hooks/use-device-max-height'
import { useDeviceOrientation } from '@/hooks/use-device-orientation'

import { projects } from '@/data/projects'
import { useIsMobileDevice } from '@/hooks/use-is-mobile-device'

interface PointerCoords {
  x: number
  y: number
}

export interface CursorProps {
  text: string
  color: string
}

const CURSOR_OFFSET_X = 2
const CURSOR_OFFSET_Y = -4
const DEFAULT_CURSOR_PROPS: CursorProps = {
  text: 'try hover something ✨',
  color: '#00A3FF'
}

const CURSOR_COLORS = ['#00A3FF', colors.indigo[500], colors.amber[500]]

export function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const isShortDevice = useDeviceMaxHeight({ maxHeight: 668 })
  const orientation = useDeviceOrientation()

  const isMobile = useIsMobileDevice()

  const [pointerCoords, setPointerCoords] = useState<PointerCoords>({
    x: 0,
    y: 0
  })

  const cursorMotionVariants = {
    hidden: {
      scale: 0.4,
      opacity: 0,
      translateX: pointerCoords.x,
      translateY: pointerCoords.y
    },
    show: {
      translateX: pointerCoords.x,
      translateY: pointerCoords.y,
      opacity: 1,
      scale: 1
    }
  }

  const [showCursor, setShowCursor] = useState(false)
  const [cursorProps, setCursorProps] =
    useState<CursorProps>(DEFAULT_CURSOR_PROPS)

  useEffect(() => {
    // spare the mobile devices from the heavy pointer calculations
    if (isMobile) return

    function updatePointerCoords(event: PointerEvent) {
      const { clientX: x, clientY: y } = event

      setPointerCoords({
        x:
          x -
          sectionRef.current?.getBoundingClientRect().left -
          CURSOR_OFFSET_X,
        y: y - sectionRef.current?.getBoundingClientRect().top - CURSOR_OFFSET_Y
      })
    }

    sectionRef.current?.addEventListener('pointermove', updatePointerCoords)

    // window.addEventListener('scroll', () => {
    //   const { scrollX, scrollY } = window

    //   setPointerCoords({
    //     x:
    //       pointerCoords.x +
    //       scrollX -
    //       sectionRef.current?.getBoundingClientRect().left -
    //       CURSOR_OFFSET_X,
    //     y:
    //       pointerCoords.y +
    //       scrollY -
    //       sectionRef.current?.getBoundingClientRect().top -
    //       CURSOR_OFFSET_X
    //   })
    // })

    const ref = sectionRef.current

    return () => {
      if (!ref) return

      ref.removeEventListener('pointermove', updatePointerCoords)
    }
  }, [])

  return (
    <section
      className='min-h-screen w-screen bg-background-secondary flex flex-col items-center relative'
      ref={sectionRef}
      onPointerEnter={() => {
        setShowCursor(false)
        setCursorProps(DEFAULT_CURSOR_PROPS)
      }}
      onPointerLeave={() => {
        setShowCursor(false)
      }}
    >
      <div className='pt-16 mx-6 sm:mx-0'>
        <h2 className='font-sans text-text-primary text-5xl py-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-tertiary'>
          The web is our canvas. <br />
          Let&apos;s start creating
        </h2>

        <span className='gap-1 font-mono font-semibold text-lg text-text-secondary flex items-center'>
          See some projects
          <CornerRightDown size={16} fontWeight='bold' className='mt-2' />
        </span>
      </div>

      <div
        className='cursor-none my-20 mt-12 sm:mt-20 mx-6 sm:w-[initial] sm:max-w-2xl flex flex-col gap-10'
        onPointerEnter={() => setShowCursor(true)}
        onPointerLeave={() => setShowCursor(false)}
      >
        {!isMobile && (
          <motion.div
            className='absolute top-0 left-0 z-10 pointer-events-none w-fit'
            variants={cursorMotionVariants}
            animate={showCursor ? 'show' : 'hidden'}
            transition={{
              // x and y to 0 to emulate real mouse move
              translateX: { duration: 0 },
              translateY: { duration: 0 },
              delay: 0,
              bounce: 0.3
            }}
          >
            <FancyCursor
              flip
              text={cursorProps.text}
              cursorColor={cursorProps.color}
            />
          </motion.div>
        )}
        {projects.map(
          (
            { title, description, preview, technologies, githubUrl, liveUrl },
            index
          ) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0.3, filter: 'blur(0.8px)' }}
                whileInView={{ opacity: 1, filter: 'blur(0)' }}
                transition={{
                  delay: !isShortDevice || orientation == 'landscape' ? 0 : 0.6,
                  ease: 'easeInOut'
                }}
                viewport={{
                  root:
                    !isShortDevice || orientation == 'landscape'
                      ? sectionRef
                      : undefined,
                  amount:
                    !isShortDevice || orientation == 'landscape'
                      ? 'all'
                      : 'some'
                }}
              >
                <ProjectInfo
                  {...{
                    title,
                    description,
                    preview,
                    technologies,
                    githubUrl,
                    liveUrl
                  }}
                  setCursorProps={setCursorProps}
                  cursorProps={{
                    text: DEFAULT_CURSOR_PROPS.text,
                    color: CURSOR_COLORS[index]
                  }}
                />
              </motion.div>
            )
          }
        )}
      </div>
    </section>
  )
}
