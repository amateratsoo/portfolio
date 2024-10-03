'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { FancyCursor } from '@/components/fancy-cursor'

import prismaLogo from '@/assets/svg/icons/prisma-orm.svg'
import figmaLogo from '@/assets/svg/icons/figma.svg'
import nodejsLogo from '@/assets/svg/icons/nodejs.svg'
import typescriptLogo from '@/assets/svg/icons/typescript.svg'
import reactLogo from '@/assets/svg/icons/react.svg'
import tailwindcssLogo from '@/assets/svg/icons/tailwindcss.svg'
import framerMotionLogo from '@/assets/svg/icons/framer-motion.svg'
import duolingoImage from '@/assets/img/duolingo.png'

import { CanvasElementWithBorder } from './components/canvas-element-with-border'

interface PointerCoords {
  x: number
  y: number
}

interface WindowDimensions {
  width: number
  height: number
}

const canvasComponentColor = '#8000FF'

export function Canvas() {
  const canvasRef = useRef<HTMLElement | null>(null)

  const [pointerCoords, setPointerCoords] = useState<PointerCoords>({
    x: 0,
    y: 0
  })

  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: 0,
    height: 0
  })

  useEffect(() => {
    setWindowDimensions({
      height: window.innerHeight,
      width: window.innerWidth
    })

    function updatePointerCoords(event: MouseEvent) {
      const { clientX: x, clientY: y } = event

      setPointerCoords({ x, y })
    }

    function updateWindowDimensions() {
      const { innerHeight, innerWidth } = window

      setWindowDimensions({
        height: innerHeight,
        width: innerWidth
      })
    }

    canvasRef.current?.addEventListener('pointermove', updatePointerCoords)

    window.addEventListener('resize', updateWindowDimensions)

    return () => {
      window.removeEventListener('resize', updateWindowDimensions)

      if (!canvasRef.current) return
      canvasRef.current.removeEventListener('pointermove', updatePointerCoords)
    }
  }, [])

  const animateMouseX = (pointerCoords.x - windowDimensions.width / 2) / 100
  const animateMouseY = (pointerCoords.y - windowDimensions.height / 2) / 100

  const mouseMoveParallaxEffect = {
    x: animateMouseX,
    y: animateMouseY
  }

  return (
    <section
      className='w-screen h-[90vh] bg-background-primary overflow-hidden relative'
      ref={canvasRef}
    >
      <div className='w-[200vw] sm:w-screen [@media(max-width:727.5px)]:w-[200vw] flex items-center justify-center mt-20 cursor-grab active:cursor-grabbing z-10 active:z-[9999]'>
        <CanvasElementWithBorder drag dragElastic={0.5}>
          <h2 className='cursor-grab active:cursor-grabbing mx-9 text-5xl text-text-primary font-mono'>
            <span className='font-semibold'>Designing</span> and{' '}
            <span className='font-semibold'>building</span> with <br />
            the tools I love and{' '}
            <span className='text-transparent font-bold bg-clip-text bg-gradient-to-r from-accent-color/45 from-5% via-accent-color/30 via-5%% to-accent-color/20 to-80%'>
              know
            </span>{' '}
            💖
          </h2>
        </CanvasElementWithBorder>
      </div>

      <motion.div
        className='hidden sm:block active:z-[9999] cursor-grab active:cursor-grabbing z-10 absolute bottom-32 sm:left-28 left-32'
        whileInView={mouseMoveParallaxEffect}
      >
        <CanvasElementWithBorder
          borderColor={canvasComponentColor}
          label='prisma'
          drag
        >
          <Image
            src={prismaLogo}
            className='size-16 cursor-grab active:cursor-grabbing'
            draggable='false'
            alt='prisma orm logo. You can learn more on https://prisma.io/'
          />
        </CanvasElementWithBorder>
      </motion.div>

      <motion.div
        className='absolute bottom-4 left-12 max-[375px]:bottom-0 sm:bottom-64 lg:bottom-80 sm:left-44 active:z-[9999] cursor-grab active:cursor-grabbing z-10'
        whileInView={mouseMoveParallaxEffect}
      >
        <CanvasElementWithBorder
          borderColor={canvasComponentColor}
          label='figma'
          drag
        >
          <Image
            src={figmaLogo}
            className='size-12 m-2 cursor-grab active:cursor-grabbing'
            draggable='false'
            alt='figma logo. You can learn more on https://figma.com/'
          />
        </CanvasElementWithBorder>
      </motion.div>

      <motion.div
        className='absolute bottom-80 max-[375px]:bottom-[15rem] sm:bottom-72 left-10 active:z-[9999] cursor-grab active:cursor-grabbing z-10'
        whileInView={mouseMoveParallaxEffect}
      >
        <CanvasElementWithBorder
          borderColor={canvasComponentColor}
          label='node js'
          drag
        >
          <Image
            src={nodejsLogo}
            className='size-14 m-1 cursor-grab active:cursor-grabbing'
            draggable='false'
            alt='nodejs logo. You can learn more on https://nodejs.org/'
          />
        </CanvasElementWithBorder>
      </motion.div>

      <motion.div
        className='absolute bottom-14 right-24 sm:bottom-80 sm:right-24 active:z-[9999] cursor-grab active:cursor-grabbing z-10'
        whileInView={mouseMoveParallaxEffect}
      >
        <CanvasElementWithBorder
          borderColor={canvasComponentColor}
          label='typescript'
          drag
        >
          <Image
            src={typescriptLogo}
            className='size-16 cursor-grab active:cursor-grabbing'
            draggable='false'
            alt='typescript logo. You can learn more on https://www.typescriptlang.org/'
          />
        </CanvasElementWithBorder>
      </motion.div>

      <motion.div
        className='absolute bottom-32 max-[375px]:bottom-[6rem] sm:bottom-56 right-56 sm:right-56 active:z-[9999] cursor-grab active:cursor-grabbing z-10'
        whileInView={mouseMoveParallaxEffect}
      >
        <CanvasElementWithBorder
          borderColor={canvasComponentColor}
          label='react'
          drag
        >
          <Image
            src={reactLogo}
            className='size-14 m-1 cursor-grab active:cursor-grabbing'
            draggable='false'
            alt='reactjs logo. You can learn more on https://react.dev/'
          />
        </CanvasElementWithBorder>
      </motion.div>

      <motion.div
        className='hidden sm:block absolute bottom-40 right-14 active:z-[9999] cursor-grab active:cursor-grabbing z-10'
        whileInView={mouseMoveParallaxEffect}
      >
        <CanvasElementWithBorder
          borderColor={canvasComponentColor}
          label='tailwindcss'
          drag
        >
          <Image
            src={tailwindcssLogo}
            className='size-14 m-1 cursor-grab active:cursor-grabbing'
            draggable='false'
            alt='tailwindcss logo. You can learn more on https://tailwindcss.com/'
          />
        </CanvasElementWithBorder>
      </motion.div>

      <motion.div
        className='hidden sm:block absolute bottom-28 right-64 active:z-[9999] cursor-grab active:cursor-grabbing z-10'
        whileInView={mouseMoveParallaxEffect}
      >
        <CanvasElementWithBorder
          borderColor={canvasComponentColor}
          label='framer motion'
          drag
        >
          <Image
            src={framerMotionLogo}
            className='size-12 m-2 cursor-grab active:cursor-grabbing'
            draggable='false'
            alt='framer motion logo. You can learn more on https://framer.com/motion/'
          />
        </CanvasElementWithBorder>
      </motion.div>

      <div className='absolute -bottom-44 left-44 lg:left-56 active:z-[9999] cursor-grab active:cursor-grabbing z-10'>
        <CanvasElementWithBorder borderColor={canvasComponentColor} drag>
          <Image
            src={duolingoImage}
            className='size-48 m-2 cursor-grab active:cursor-grabbing'
            draggable='false'
            alt='duolingo mascot, Duo, looking at you in the night with a sinister look. You can learn more on https://duolingo.com/'
          />
        </CanvasElementWithBorder>
      </div>

      <motion.div
        className='absolute top-60 lg:top-80 lg:left-[40%] left-44 active:z-[9999] z-10'
        initial={{
          translateY: -40,
          translateX: 40
        }}
        whileInView={{
          translateY: 0,
          translateX: 0
        }}
        transition={{
          bounce: 0.1,
          delay: 0.2,
          duration: 0.6,
          ease: 'easeOut'
        }}
        viewport={{ root: canvasRef }}
      >
        <CanvasElementWithBorder>
          <span className='text-text-primary font-medium p-2.5'>
            💡 tip: you can click & drag almost everything here
          </span>
        </CanvasElementWithBorder>

        <FancyCursor text='Jossani' />
      </motion.div>
    </section>
  )
}
