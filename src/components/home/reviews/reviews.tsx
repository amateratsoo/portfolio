'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { ReviewCard } from './review-card'
import { reviews } from '@/data/reviews'

import filledGridPattern from '@/assets/svg/filled-grid-pattern.svg'

const halfOfTheReviews = {
  count: reviews.length / 2,
  isEven: function () {
    return this.count % 2 == 0
  }
}

interface DragContainerConstraints {
  left: number
  right: number
}

const DRAG_OFFSET = 8

export function Reviews() {
  const dragContainerRef = useRef<HTMLDivElement | null>(null)

  const [dragContainerConstraints, setDragContainerConstraints] =
    useState<DragContainerConstraints>({
      left: 0,
      right: 0
    })

  useEffect(() => {
    if (!dragContainerRef.current) return

    function updateContainerConstraints() {
      if (!dragContainerRef.current) return

      setDragContainerConstraints({
        left:
          dragContainerRef?.current?.getBoundingClientRect().left - DRAG_OFFSET,
        right:
          -dragContainerRef?.current?.getBoundingClientRect().left + DRAG_OFFSET
      })
    }

    updateContainerConstraints()

    window.addEventListener('resize', updateContainerConstraints)

    return () =>
      window.removeEventListener('resize', updateContainerConstraints)
  }, [])

  return (
    <section className='w-screen min-h-screen bg-background-primary relative overflow-hidden'>
      <Image
        src={filledGridPattern}
        alt=''
        className='lg:w-[52rem] pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '
        draggable='false'
        priority
      />

      <div className='z-20 pt-16 mb-20 px-6 sm:ml-0 w-screen flex items-center justify-center'>
        <h2 className='font-sans text-text-primary text-5xl py-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-tertiary'>
          See what others say
        </h2>
      </div>

      <div
        className='w-max absolute z-20 -translate-x-1/2 -translate-y-1/2 top-[54%] max-[376px]:top-[68%] left-1/2'
        ref={dragContainerRef}
      >
        <motion.div
          className='flex flex-col items-center gap-2 cursor-grab active:cursor-grabbing'
          drag='x'
          dragConstraints={{
            left: dragContainerConstraints.left,
            right: dragContainerConstraints.right
          }}
        >
          <div className='flex gap-2'>
            {reviews.map((review, index) => {
              if (halfOfTheReviews.isEven() && index < halfOfTheReviews.count) {
                return <ReviewCard key={index} {...review} />
              } else if (
                !halfOfTheReviews.isEven() &&
                index <= halfOfTheReviews.count
              ) {
                return <ReviewCard key={index} {...review} />
              }
            })}
          </div>
          <div className='flex gap-2'>
            {reviews.map((review, index) => {
              if (
                halfOfTheReviews.isEven() &&
                index >= halfOfTheReviews.count
              ) {
                return <ReviewCard key={index} {...review} />
              } else if (
                !halfOfTheReviews.isEven() &&
                index > halfOfTheReviews.count
              ) {
                return <ReviewCard key={index} {...review} />
              }
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
