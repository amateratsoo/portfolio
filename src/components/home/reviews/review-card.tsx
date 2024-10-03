'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import { useDeviceOrientation } from '@/hooks/use-device-orientation'

import type { Review } from '@/data/reviews'

interface ReviewCardProps extends Review {}

export function ReviewCard({ userAvatar, username, comment }: ReviewCardProps) {
  const orientation = useDeviceOrientation()

  return (
    <motion.article
      className='rounded-md bg-background-tertiary p-5 w-fit max-w-96'
      initial={{ opacity: 0.7, filter: 'blur(1.4px)' }}
      whileInView={{ opacity: 1, filter: 'blur(0)' }}
      whileHover={{ opacity: 1, filter: 'blur(0)', zIndex: 999 }}
      // whileTap={{ opacity: 1, filter: 'blur(0)', zIndex: 999, scale: 1.2 }}
      transition={{ delay: orientation == 'landscape' ? 0.2 : 0.6 }}
      viewport={{
        amount: orientation == 'landscape' ? 'all' : 'some'
      }}
    >
      <div className='flex items-center gap-2'>
        <Image
          src={userAvatar}
          alt=''
          className='overflow-hidden size-9 rounded-full'
        />
        <span className='text-text-tertiary font-fancy font-medium text-md'>
          {username}
        </span>
      </div>
      <div className='mt-3 text-text-primary'>{comment}</div>
    </motion.article>
  )
}
